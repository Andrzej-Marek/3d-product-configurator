import { Canvas, useThree } from "@react-three/fiber";
import {
  Bounds,
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Suspense, useEffect } from "react";
import PalletShelfModel from "./PalletShelfModel";
import Configuration from "./Configuration";
import ShopLayout from "../../layout/ShopLayout";
import CanvasControls from "./CanvasControls";
import { useWindowDeviceType } from "../../utils/useWindowDeviceType";

type PalletShelfConfigurationProps = {};

const PalletShelfConfiguration = ({}: PalletShelfConfigurationProps) => {
  return (
    <>
      <ShopLayout className="lg:flex">
        <div className="h-[40%] relative lg:h-full lg:auto lg:w-2/3 lg:flex-1">
          <Viewer />
        </div>

        <div className="h-[60%] w-full lg:relative lg:w-1/3 lg:py-6">
          <div className="h-full lg:h-fit lg:max-w-[380px] xl:max-w-[420px] 2xl:max-w-[500px] ">
            <Configuration />
          </div>
        </div>
      </ShopLayout>
    </>
  );
};

const Viewer = () => {
  return (
    <Canvas shadows camera={{ position: [0, 1.5, 4], fov: 70 }}>
      <CanvasControls />
      <Lights />
      <CameraHandler />

      <Camera />
      <Suspense fallback={<Loader />}>
        <Bounds>
          <PalletShelfModel />
        </Bounds>
      </Suspense>
    </Canvas>
  );
};

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-center text-2xl">{progress.toFixed(2)}%</div>
    </Html>
  );
}

const Camera = () => {
  return (
    <OrbitControls
      minPolarAngle={Math.PI / 8}
      maxPolarAngle={Math.PI}
      // minDistance={current ? undefined : 2}
      maxDistance={4}
      enablePan={false}
    />
  );
};

const Lights = () => {
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.7} />
      <directionalLight intensity={0.5} castShadow position={[0, 5, 2]} />
    </>
  );
};

const CameraHandler = () => {
  const { camera } = useThree();
  const { isMobile, isTablet } = useWindowDeviceType();

  useEffect(() => {
    if (isMobile || isTablet) {
      // @ts-ignore
      camera.fov = 50;
      camera.updateProjectionMatrix();
    } else {
      // @ts-ignore
      camera.fov = 70;
      camera.updateProjectionMatrix();
    }
  }, [isMobile, isTablet]);

  return null;
};

export default PalletShelfConfiguration;
