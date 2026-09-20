"use client";

import React, { useRef, useMemo, useState, useEffect, Component, ErrorInfo, ReactNode, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Shield, Sparkles, Smartphone } from "lucide-react";

// Preload all 7 clinical 3D assets
useGLTF.preload("/models/shield.glb");
useGLTF.preload("/models/pill.glb");
useGLTF.preload("/models/ecg.glb");
useGLTF.preload("/models/thermometer.glb");
useGLTF.preload("/models/checklist.glb");
useGLTF.preload("/models/syringe.glb");
useGLTF.preload("/models/virus.glb");

// WebGL Error Boundary to catch any context creation errors gracefully
interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("WebGL Context fallback triggered:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function checkWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

// -------------------------------------------------------------
// Mobile Optimized Warm-Cream Preview Card
// -------------------------------------------------------------
function MobileOptimizedHeroCard({ onEnable3D }: { onEnable3D: () => void }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 180, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  return (
    <div className="w-full h-[360px] sm:h-[440px] relative flex items-center justify-center select-none px-4">
      {/* Soft Ambient Warm Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#3B33FF]/06 via-[#8B3EE1]/05 to-[#F97316]/05 rounded-3xl blur-2xl -z-10" />

      {/* Main Warm Cream Glass Card */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full max-w-sm glass-panel p-6 sm:p-7 rounded-3xl border border-[#E4DAC8] shadow-md relative overflow-hidden flex flex-col items-center text-center bg-[#FEFCF7]/90"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#3B33FF] via-[#8B3EE1] to-[#E53888] flex items-center justify-center shadow-md mb-4">
          <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EFE4] border border-[#E8DFD1] text-[10px] font-bold uppercase tracking-wider text-slate-800 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B33FF] animate-pulse" />
          <span>Tactile Matte-Clay Studio</span>
        </div>

        <h3 className="text-lg font-black text-[#0A0F24] mb-1">
          Architectural Clinical Assembly
        </h3>
        <p className="text-xs text-slate-600 font-normal leading-relaxed mb-5">
          Tactile unglazed matte-clay medical shield, tumbled capsule cascades, and clinical instruments.
        </p>

        <button
          onClick={onEnable3D}
          className="w-full min-h-[48px] py-2.5 rounded-xl bg-[#0A0F24] hover:bg-slate-800 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
        >
          <Smartphone className="w-4 h-4 text-[#FACC15]" />
          <span>Launch Interactive 3D Canvas</span>
        </button>
      </motion.div>
    </div>
  );
}

function CSSHeroGraphic() {
  return (
    <div className="w-full h-[450px] md:h-[550px] lg:h-[620px] relative flex items-center justify-center select-none">
      <div className="glass-panel p-8 rounded-3xl border border-[#E4DAC8] shadow-md text-center max-w-sm bg-[#FEFCF7]">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#3B33FF] via-[#8B3EE1] to-[#E53888] flex items-center justify-center mx-auto mb-4 shadow-sm">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-lg font-black text-[#0A0F24] mb-2">Club Médical New Era</h3>
        <p className="text-xs text-slate-600">Architectural Matte-Clay Health-Tech Composition</p>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Tactile Unglazed Matte-Clay Material Pipeline
// STRICT REQUIREMENTS:
// 1. DO NOT TOUCH 3D OBJECT COLORS! Preserve all native textures, maps, and colors.
// 2. Strictly ZERO gloss, ZERO reflectivity, ZERO gold, ZERO wireframes.
// 3. Set roughness = 0.90, metalness = 0.0, clearcoat = 0.0, envMapIntensity = 0.0.
// -------------------------------------------------------------
function applyTactileMatteClayFinish(group: THREE.Group) {
  group.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      const processMaterial = (mat: THREE.Material) => {
        const m = mat.clone() as THREE.MeshStandardMaterial;

        // DO NOT TOUCH 3D OBJECT COLORS:
        // Original m.color and m.map are 100% preserved as authored.
        
        // Rich tactile unglazed matte-clay finish:
        m.roughness = 0.90; // tactile velvety unglazed clay texture
        m.metalness = 0.0;  // strictly zero reflectivity, zero gold/metal
        m.wireframe = false; // strictly zero wireframes

        // Eliminate specular highlights and gloss reflections
        if ("clearcoat" in m) (m as any).clearcoat = 0.0;
        if ("clearcoatRoughness" in m) (m as any).clearcoatRoughness = 1.0;
        if ("envMapIntensity" in m) (m as any).envMapIntensity = 0.0;
        if ("roughnessMap" in m) (m as any).roughnessMap = null;
        if ("metalnessMap" in m) (m as any).metalnessMap = null;

        m.needsUpdate = true;
        return m;
      };

      if (Array.isArray(mesh.material)) {
        mesh.material = mesh.material.map(processMaterial);
      } else if (mesh.material) {
        mesh.material = processMaterial(mesh.material);
      }
    }
  });
}

// -------------------------------------------------------------
// 1. Mid-Right Anchor: Massive Medical Shield
// -------------------------------------------------------------
function MatteMedicalShield() {
  const { scene } = useGLTF("/models/shield.glb");

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [scene]);

  return (
    <group scale={2.6} position={[1.35, 0.2, 0.2]} rotation={[-0.08, -0.32, 0.06]}>
      <primitive object={clonedScene} />
    </group>
  );
}

// -------------------------------------------------------------
// 2. Floating Clinical Instruments (Syringe & Stethoscope)
// -------------------------------------------------------------
function MatteClinicalInstruments() {
  const { scene: syringeScene } = useGLTF("/models/syringe.glb");
  const { scene: ecgScene } = useGLTF("/models/ecg.glb");

  const syringeClone = useMemo(() => {
    const clone = syringeScene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [syringeScene]);

  const ecgClone = useMemo(() => {
    const clone = ecgScene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [ecgScene]);

  const instrumentsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (instrumentsRef.current) {
      instrumentsRef.current.position.y = Math.sin(t * 0.85) * 0.04;
    }
  });

  return (
    <group ref={instrumentsRef}>
      {/* Precision Clinical Syringe (Floating under shield) */}
      <group position={[0.75, -1.25, 0.8]} rotation={[0.35, 0.85, -0.45]} scale={1.05}>
        <primitive object={syringeClone} />
      </group>

      {/* Stethoscope / ECG Node (Floating mid-upper right) */}
      <group position={[2.5, 0.85, -0.15]} rotation={[0.25, -0.55, 0.12]} scale={1.05}>
        <primitive object={ecgClone} />
      </group>
    </group>
  );
}

// -------------------------------------------------------------
// 3. Left & Lower Planes: Tumbling Cascades of Matte Capsules
// -------------------------------------------------------------
function MatteCapsuleCascade() {
  const { scene } = useGLTF("/models/pill.glb");

  const pill1 = useMemo(() => {
    const clone = scene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [scene]);

  const pill2 = useMemo(() => {
    const clone = scene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [scene]);

  const pill3 = useMemo(() => {
    const clone = scene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [scene]);

  const pill4 = useMemo(() => {
    const clone = scene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [scene]);

  const cascadeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cascadeRef.current) {
      cascadeRef.current.position.y = Math.cos(t * 0.75) * 0.05;
    }
  });

  return (
    <group ref={cascadeRef}>
      {/* Pill 1: Upper Left Cascade */}
      <group position={[-2.65, 1.45, 0.25]} rotation={[0.55, 0.45, 0.75]} scale={1.05}>
        <primitive object={pill1} />
      </group>

      {/* Pill 2: Mid-Left Cascade */}
      <group position={[-3.15, 0.35, 0.55]} rotation={[1.15, -0.35, 0.45]} scale={1.15}>
        <primitive object={pill2} />
      </group>

      {/* Pill 3: Mid-Lower Left Cascade */}
      <group position={[-2.25, -0.65, 0.75]} rotation={[-0.65, 0.8, -0.55]} scale={1.2}>
        <primitive object={pill3} />
      </group>

      {/* Pill 4: Lower Plane Cascade */}
      <group position={[-1.75, -1.65, 0.45]} rotation={[0.3, -0.85, 1.15]} scale={1.1}>
        <primitive object={pill4} />
      </group>
    </group>
  );
}

// -------------------------------------------------------------
// 4. Lower Plane: Digital Clinical Thermometer & Academic Clipboard
// -------------------------------------------------------------
function LowerPlanesCluster() {
  const { scene: thermometerScene } = useGLTF("/models/thermometer.glb");
  const { scene: checklistScene } = useGLTF("/models/checklist.glb");

  const thermometerClone = useMemo(() => {
    const clone = thermometerScene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [thermometerScene]);

  const checklistClone = useMemo(() => {
    const clone = checklistScene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [checklistScene]);

  const clusterRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (clusterRef.current) {
      clusterRef.current.position.y = Math.sin(t * 0.9) * 0.035;
    }
  });

  return (
    <group ref={clusterRef}>
      {/* Detailed Digital Thermometer (Lower-center plane) */}
      <group position={[-0.8, -1.75, 0.9]} rotation={[0.2, 0.6, -0.3]} scale={1.0}>
        <primitive object={thermometerClone} />
      </group>

      {/* Academic Clipboard Checklist (Lower-right plane) */}
      <group position={[1.65, -1.8, 0.55]} rotation={[-0.25, -0.35, 0.15]} scale={1.2}>
        <primitive object={checklistClone} />
      </group>
    </group>
  );
}

// -------------------------------------------------------------
// 5. Background: Atmospheric Biomedical Helix / DNA Structure
// -------------------------------------------------------------
function BackgroundBiomedicalHelix() {
  const { scene } = useGLTF("/models/virus.glb");

  const helixClone = useMemo(() => {
    const clone = scene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [scene]);

  const helixRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (helixRef.current) {
      helixRef.current.rotation.y = t * 0.25;
      helixRef.current.position.y = 1.85 + Math.sin(t * 0.6) * 0.08;
    }
  });

  return (
    <group ref={helixRef} position={[-0.7, 1.85, -1.8]} scale={0.85}>
      <primitive object={helixClone} />
    </group>
  );
}

// -------------------------------------------------------------
// Master 3D Architectural Scene Assembly
// -------------------------------------------------------------
function MasterArchitecturalScene() {
  return (
    <>
      {/* Diffused Warm Studio Ambient Lighting */}
      <ambientLight intensity={1.4} color="#FFFBF5" />

      {/* Directional Key Studio Light with Soft Realistic Shadows */}
      <directionalLight
        position={[7, 12, 8]}
        intensity={1.75}
        color="#FFF9F0"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />

      {/* Soft Studio Fill Light */}
      <directionalLight position={[-8, 6, 5]} intensity={0.95} color="#F5EFE4" />

      {/* Harmonic Brand Color Studio Point Lights */}
      {/* Deep Royal Blue (#3B33FF) Tint */}
      <pointLight position={[-4.5, 1.5, 2]} intensity={1.1} color="#3B33FF" distance={12} />
      {/* Vibrant Violet (#8B3EE1) Tint */}
      <pointLight position={[0, 4.5, -3]} intensity={1.0} color="#8B3EE1" distance={10} />
      {/* Hot Magenta/Pink (#E53888) Tint */}
      <pointLight position={[4.5, -1.5, 2]} intensity={1.0} color="#E53888" distance={11} />
      {/* Warm Sunset Orange (#F97316) Tint */}
      <pointLight position={[-1.5, -3.5, 2]} intensity={0.85} color="#F97316" distance={9} />

      {/* Floating Assembly with Natural Micro-Float */}
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <Suspense fallback={null}>
          {/* Mid-Right Anchor: Massive Medical Shield */}
          <MatteMedicalShield />

          {/* Mid-Right Floating Instruments: Syringe & Stethoscope */}
          <MatteClinicalInstruments />

          {/* Left & Lower Planes: Tumbling Capsule Cascades */}
          <MatteCapsuleCascade />

          {/* Lower Planes: Thermometer & Academic Clipboard */}
          <LowerPlanesCluster />

          {/* Background Atmospheric Depth: Biomedical Helix */}
          <BackgroundBiomedicalHelix />
        </Suspense>
      </Float>

      {/* Soft Contact Shadows on Warm Studio Floor */}
      <ContactShadows
        position={[0, -2.45, 0]}
        opacity={0.32}
        scale={18}
        blur={2.6}
        far={6}
        color="#453524"
      />

      {/* Smooth 360-degree Orbit Interaction */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
    </>
  );
}

// -------------------------------------------------------------
// Main Export: HeroCanvas
// -------------------------------------------------------------
export const HeroCanvas: React.FC = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [forceWebGLOnMobile, setForceWebGLOnMobile] = useState(false);

  useEffect(() => {
    setHasWebGL(checkWebGL());

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!hasWebGL) {
    return <CSSHeroGraphic />;
  }

  if (isMobile && !forceWebGLOnMobile) {
    return <MobileOptimizedHeroCard onEnable3D={() => setForceWebGLOnMobile(true)} />;
  }

  return (
    <WebGLErrorBoundary fallback={<CSSHeroGraphic />}>
      <div className="w-full h-[520px] sm:h-[600px] md:h-[680px] lg:h-[750px] xl:h-[820px] relative flex items-center justify-center select-none">
        {/* Three.js R3F WebGL Canvas */}
        <Canvas
          camera={{ position: [0, 0, 7.2], fov: 46 }}
          gl={{
            antialias: true,
            alpha: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.05,
          }}
          dpr={[1, 2]}
          className="cursor-grab active:cursor-grabbing w-full h-full"
        >
          <MasterArchitecturalScene />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
};
