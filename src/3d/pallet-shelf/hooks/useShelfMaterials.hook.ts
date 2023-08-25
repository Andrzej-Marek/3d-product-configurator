import { useTexture } from "@react-three/drei";
import { RepeatWrapping, sRGBEncoding } from "three";

export const useShelfMaterials = () => {
  const textures = useTexture({
    laminate: "./pallet-shelf/textures/laminate_floor_diff_1k.jpg",
  });

  const metal = useTexture({
    map: "./pallet-shelf/textures/metal/painted_metal_shutter_disp_1k.jpg",
    displacementMap:
      "./pallet-shelf/textures/metal/painted_metal_shutter_disp_1k.jpg",
    aoMap: "./pallet-shelf/textures/metal/painted_metal_shutter_arm_1k.jpg",
    roughnessMap:
      "./pallet-shelf/textures/metal/painted_metal_shutter_arm_1k.jpg",
    metalnessMap:
      "./pallet-shelf/textures/metal/painted_metal_shutter_arm_1k.jpg",
    normalMap:
      "./pallet-shelf/textures/metal/painted_metal_shutter_nor_gl_1k.jpg",
  });
  const wood = useTexture({
    map: "./pallet-shelf/textures/wood/wooden_planks_diff_1k.jpg",
    displacementMap: "./pallet-shelf/textures/wood/wooden_planks_disp_1k.jpg",
    aoMap: "./pallet-shelf/textures/wood/wooden_planks_arm_1k.jpg",
    roughnessMap: "./pallet-shelf/textures/wood/wooden_planks_arm_1k.jpg",
    metalnessMap: "./pallet-shelf/textures/wood/wooden_planks_arm_1k.jpg",
    normalMap: "./pallet-shelf/textures/wood/wooden_planks_nor_gl_1k.jpg",
  });

  textures.laminate.encoding = sRGBEncoding;
  textures.laminate.flipY = false;
  textures.laminate.wrapS = RepeatWrapping;
  textures.laminate.wrapT = RepeatWrapping;

  wood.map.flipY = false;
  wood.map.encoding = sRGBEncoding;

  metal.map.flipY = false;
  metal.map.wrapS = RepeatWrapping;
  metal.map.wrapT = RepeatWrapping;
  metal.map.encoding = sRGBEncoding;

  return {
    laminate: {
      map: textures.laminate,
    },
    wood,
    metal,
  };
};
