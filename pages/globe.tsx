import { Canvas, useFrame } from "@react-three/fiber";
import type { NextPage } from "next";
import Head from "next/head";
import { ReactElement, useMemo, useRef } from "react";
import * as THREE from "three";
import CameraController from "../src/components/CameraController";
import styles from "../styles/Globe.module.scss";

// @ts-ignore
import globeVertexShader from "../src/shaders/globeVertex.glsl";
// @ts-ignore
import globeFragmentShader from "../src/shaders/globeFragment.glsl";
// @ts-ignore
import atmosphereVertexShader from "../src/shaders/atmosphereVertex.glsl";
// @ts-ignore
import atmosphereFragmentShader from "../src/shaders/atmosphereFragment.glsl";

const Atmosphere = (): ReactElement => {
  const mesh = useRef<any>();

  const scaleFactor = 1.2;

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={[scaleFactor, scaleFactor, scaleFactor]}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 30, 30]} />
      <shaderMaterial 
        vertexShader={atmosphereVertexShader} 
        fragmentShader={atmosphereFragmentShader}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
      />
    </mesh>
  )
}

const Globe = (): ReactElement => {
  const mesh = useRef<any>();

  const globeTexture = useMemo(() => new THREE.TextureLoader().load("/earth.jpg"), []);

  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  })

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 30, 30]} />
      <shaderMaterial 
        vertexShader={globeVertexShader} 
        fragmentShader={globeFragmentShader}
        uniforms={{
          globeTexture: {
            value: globeTexture
          }
        }}
      />
    </mesh>
  )
}

const App: NextPage = () => {
  return (
    <div className={styles.canvas}>
      <Head>
        <title>ThreeJS Sandbox</title>
        <meta name="description" content="ThreeJS Sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas>
        <CameraController />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Globe />
        <Atmosphere />
      </Canvas>
    </div>
  );
};

export default App;
