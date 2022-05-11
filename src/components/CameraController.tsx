import { useThree } from "@react-three/fiber";
import { ReactElement, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = (): ReactElement | null => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    }
  }, [camera, gl]);

  return null;
}

export default CameraController;