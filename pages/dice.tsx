import type { NextPage } from "next";
import { ReactElement, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import styles from "../styles/Dice.module.scss";
import Head from "next/head";

const Dice = (props: { position: [number, number, number] }): ReactElement => {
  const mesh = useRef<any>();

  const [focused, setFocused] = useState(false);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x = mesh.current.rotation.y;
  });

  const texture = useMemo(
    () => new THREE.TextureLoader().load("/dice.png"),
    []
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={focused ? [2, 2, 2] : [1.5, 1.5, 1.5]}
      onClick={(e) => setFocused(!focused)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
};

const App: NextPage = () => {
  return (
    <div className={styles.canvas}>
      <Head>
        <title>ThreeJS Sandbox</title>
        <meta name="description" content="ThreeJS Sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Dice position={[-1.2, 0, 0]} />
        <Dice position={[2.5, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default App;
