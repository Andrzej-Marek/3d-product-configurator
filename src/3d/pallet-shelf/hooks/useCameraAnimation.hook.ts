import { useEffect } from "react";
import { subscribeKey } from "valtio/utils";
import { palletShelfStore } from "../pallet-shelf.store";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { gsap } from "gsap";

export const useCameraAnimation = () => {
  const { camera } = useThree();

  useEffect(() => {
    const unsubscribeMaterial = subscribeKey(
      palletShelfStore.shelf.material,
      "current",
      () => {
        gsap.to(
          camera.position,
          new Vector3(...palletShelfStore.shelf.material.cameraPosition)
        );
      }
    );

    const unsubscribeAmount = subscribeKey(
      palletShelfStore.shelf.shelfs,
      "amount",
      () => {
        gsap.to(
          camera.position,
          new Vector3(...palletShelfStore.shelf.shelfs.cameraPosition)
        );
      }
    );

    const unsubscribeShelfStrengthen = subscribeKey(
      palletShelfStore.accessories.shelfStrengthen,
      "selected",
      (selected) => {
        if (!selected) {
          return;
        }
        gsap.to(
          camera.position,
          new Vector3(
            -0.1618853070157193,
            -0.5607107478146117,
            1.567351409301167
          )
        );
      }
    );
    const unsubscribeWidth = subscribeKey(
      palletShelfStore.width,
      "value",
      () => {
        gsap.to(
          camera.position,
          new Vector3(
            0.0548045593975091,
            0.5118475753299963,
            3.9667377679773383
          )
        );
      }
    );

    const unsubscribeHeight = subscribeKey(
      palletShelfStore.height,
      "value",
      () => {
        gsap.to(
          camera.position,
          new Vector3(
            0.0548045593975091,
            0.5118475753299963,
            3.9667377679773383
          )
        );
      }
    );
    const unsubscribeDepth = subscribeKey(
      palletShelfStore.depth,
      "value",
      () => {
        gsap.to(
          camera.position,
          new Vector3(2.6824055225507206, 2.525504620193605, 1.5577313715688845)
        );
      }
    );
    const unsubscribeFrameColor = subscribeKey(
      palletShelfStore.frame,
      "colorKey",
      () => {
        gsap.to(
          camera.position,
          new Vector3(
            0.07567508052952977,
            0.7614918362105076,
            2.402047705538346
          )
        );
      }
    );
    const unsubscribeLegsColor = subscribeKey(
      palletShelfStore.legs,
      "colorKey",
      () => {
        gsap.to(
          camera.position,
          new Vector3(
            -0.07082168018868705,
            0.6035705713107548,
            2.726442099313921
          )
        );
      }
    );

    return () => {
      unsubscribeMaterial();
      unsubscribeAmount();
      unsubscribeShelfStrengthen();
      unsubscribeWidth();
      unsubscribeHeight();
      unsubscribeDepth();
      unsubscribeFrameColor();
      unsubscribeLegsColor();
    };
  }, []);
};
