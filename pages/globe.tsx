import type { NextPage } from "next";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Globe: NextPage = () => {
  const mesh = useRef<any>();

  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x = mesh.current.rotation.y;
  })

  return (
    <Globe />
  );
};

export default Globe;
