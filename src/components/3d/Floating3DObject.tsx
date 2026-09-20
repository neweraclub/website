"use client";

import React, { useRef, useMemo, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF, ContactShadows, Center } from "@react-three/drei";
import * as THREE from "three";

interface Floating3DObjectProps {
  modelPath: string;
  scale?: number;
  rotationOffset?: [number, number, number];
  glowColor?: string;
  className?: string;
  interactive?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  floatSpeed?: number;
  floatIntensity?: number;
}

function ModelInstance({
  modelPath,
  scale = 2.2,
  rotationOffset = [0, 0, 0],
}: {
  modelPath: string;
  scale?: number;
  rotationOffset?: [number, number, number];
}) {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef<THREE.Group>(null);

  const cloned = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.geometry = mesh.geometry.clone();
        mesh.geometry.computeVertexNormals();
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  return (
    <group ref={meshRef} rotation={rotationOffset} scale={scale}>
      <Center>
        <primitive object={cloned} />
      </Center>
    </group>
  );
}

function MiniLoader({ color = "#C0278A" }: { color?: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.getElapsedTime() * 3;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.8, 0.05, 16, 32]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

function Scene({
  modelPath,
  scale,
  rotationOffset,
  glowColor = "#3629D2",
  interactive = true,
  autoRotate = true,
  autoRotateSpeed = 1.4,
  floatSpeed = 1.8,
  floatIntensity = 0.5,
}: Floating3DObjectProps) {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 6, 5]} intensity={1.8} color="#FFFFFF" />
      <pointLight position={[-4, 2, 3]} intensity={2.5} color={glowColor} distance={8} />
      <pointLight position={[4, -2, 3]} intensity={2.0} color="#F0516D" distance={8} />
      <pointLight position={[0, 3, -3]} intensity={1.5} color="#FFFFFF" distance={8} />

      <Float speed={floatSpeed} rotationIntensity={0.35} floatIntensity={floatIntensity}>
        <Suspense fallback={<MiniLoader color={glowColor} />}>
          <ModelInstance
            modelPath={modelPath}
            scale={scale}
            rotationOffset={rotationOffset}
          />
        </Suspense>
      </Float>

      <ContactShadows
        position={[0, -1.5, 0]}
        opacity={0.4}
        scale={4.5}
        blur={2}
        far={3}
        color="#1E1450"
      />

      {interactive ? (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping={true}
          dampingFactor={0.07}
          autoRotate={autoRotate}
          autoRotateSpeed={autoRotateSpeed}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          rotateSpeed={0.8}
        />
      ) : null}
    </>
  );
}

export const Floating3DObject: React.FC<Floating3DObjectProps> = ({
  modelPath,
  scale = 2.2,
  rotationOffset = [0, 0, 0],
  glowColor = "#3629D2",
  className = "w-40 h-40",
  interactive = true,
  autoRotate = true,
  autoRotateSpeed = 1.4,
  floatSpeed = 1.8,
  floatIntensity = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Performance optimization: only render when visible in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative select-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
        dpr={[1, 1.25]}
        frameloop={inView ? "always" : "never"}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Scene
          modelPath={modelPath}
          scale={scale}
          rotationOffset={rotationOffset}
          glowColor={glowColor}
          interactive={interactive}
          autoRotate={autoRotate}
          autoRotateSpeed={autoRotateSpeed}
          floatSpeed={floatSpeed}
          floatIntensity={floatIntensity}
        />
      </Canvas>
    </div>
  );
};
