"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Tactile Unglazed Matte-Clay Material Pipeline
function applyTactileMatteClayFinish(group: THREE.Group) {
  group.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      const processMaterial = (mat: THREE.Material) => {
        const m = mat.clone() as THREE.MeshStandardMaterial;
        m.roughness = 0.90;
        m.metalness = 0.0;
        m.wireframe = false;
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

function ContactClusterScene() {
  const { scene: shieldScene } = useGLTF("/models/shield.glb");
  const { scene: pillScene } = useGLTF("/models/pill.glb");
  const { scene: syringeScene } = useGLTF("/models/syringe.glb");

  const shieldClone = useMemo(() => {
    const clone = shieldScene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [shieldScene]);

  const pill1Clone = useMemo(() => {
    const clone = pillScene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [pillScene]);

  const pill2Clone = useMemo(() => {
    const clone = pillScene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [pillScene]);

  const syringeClone = useMemo(() => {
    const clone = syringeScene.clone(true);
    applyTactileMatteClayFinish(clone);
    return clone;
  }, [syringeScene]);

  const clusterRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (clusterRef.current) {
      clusterRef.current.rotation.y = Math.sin(t * 0.4) * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={1.3} color="#FFFBF5" />
      <directionalLight
        position={[6, 10, 6]}
        intensity={1.6}
        color="#FFF9F0"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-6, 5, 4]} intensity={0.9} color="#F5EFE4" />

      {/* Harmonic brand studio rim lights */}
      <pointLight position={[-3, 1, 2]} intensity={0.8} color="#3B33FF" distance={8} />
      <pointLight position={[3, -1, 2]} intensity={0.8} color="#E53888" distance={8} />

      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.35}>
        <group ref={clusterRef} position={[0, 0.1, 0]}>
          {/* Main Tactile Shield */}
          <group scale={2.1} position={[0, 0, 0]} rotation={[-0.05, -0.2, 0.05]}>
            <primitive object={shieldClone} />
          </group>

          {/* Orbiting Matte Pill Top-Right */}
          <group scale={0.95} position={[1.4, 1.1, 0.4]} rotation={[0.6, 0.4, -0.3]}>
            <primitive object={pill1Clone} />
          </group>

          {/* Orbiting Matte Pill Bottom-Left */}
          <group scale={1.05} position={[-1.35, -0.85, 0.6]} rotation={[-0.4, 0.7, 0.5]}>
            <primitive object={pill2Clone} />
          </group>

          {/* Floating Syringe Below */}
          <group scale={0.9} position={[0.6, -1.2, 0.3]} rotation={[0.3, 0.8, -0.4]}>
            <primitive object={syringeClone} />
          </group>
        </group>
      </Float>

      <ContactShadows
        position={[0, -2.1, 0]}
        opacity={0.3}
        scale={10}
        blur={2.4}
        far={5}
        color="#453524"
      />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={0.8}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />
    </>
  );
}

export const ContactCanvas: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-[400px] sm:h-[480px] lg:h-[540px] relative flex items-center justify-center select-none">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
        }}
        dpr={[1, 1.5]}
        className="cursor-grab active:cursor-grabbing w-full h-full"
      >
        <Suspense fallback={null}>
          <ContactClusterScene />
        </Suspense>
      </Canvas>
    </div>
  );
};
