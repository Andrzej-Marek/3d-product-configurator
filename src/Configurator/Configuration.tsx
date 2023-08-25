import { useMemo, useState } from "react";
import { useMedia } from "react-use";
import {
  configurationStore,
  useConfigurationStore,
} from "../store/configurator.store";
import classNames from "classnames";
import Card from "../components/Card";
import { Tooltip } from "../components/tooltip";
import { Dropdown } from "../components/dropdowns";
import Popover from "../components/popover/Popover";
import TruckIcon from "../components/TruckIcon";
import LetterIcon from "../components/LetterIcon";

const colors = [
  {
    color: "#ff80ed",
  },
  {
    color: "#065535",
  },
  {
    color: "#000000",
  },
  {
    color: "#133337",
  },
  {
    color: "#ffc0cb",
  },
  {
    color: "#ffffff",
  },
  {
    color: "#ffe4e1",
  },
  {
    color: "#008080",
  },
  {
    color: "#ff0000",
  },
  {
    color: "#e6e6fa",
  },
  {
    color: "#ffd700",
  },
  {
    color: "#00ffff",
  },
  {
    color: "#ffa500",
  },
  {
    color: "#ff7373",
    additionalCost: 100,
  },
  {
    color: "#0000ff",
    additionalCost: 100,
  },
  {
    color: "#c6e2ff",
    additionalCost: 100,
  },
  {
    color: "#40e0d0",
    additionalCost: 100,
  },
  {
    color: "#b0e0e6",
    additionalCost: 100,
  },
  {
    color: "#d3ffce",
    additionalCost: 100,
  },
  {
    color: "#f0f8ff",
    additionalCost: 100,
  },
  {
    color: "#666666",
    additionalCost: 100,
  },
  {
    color: "#bada55",
    additionalCost: 100,
  },
  {
    color: "#faebd7",
    additionalCost: 100,
  },
  {
    color: "#fa8072",
  },
  {
    color: "#003366",
  },
  {
    color: "#ffb6c1",
  },
  {
    color: "#c0c0c0",
  },
  {
    color: "#ffff00",
  },
  {
    color: "#800000",
  },
  {
    color: "#800080",
  },
  {
    color: "#c39797",
  },
  {
    color: "#00ff00",
  },
  {
    color: "#7fffd4",
  },
  {
    color: "#cccccc",
  },
  {
    color: "#eeeeee",
  },
];

const MobileConfiguration = ({ className }: { className?: string }) => {
  const { current, items } = useConfigurationStore();
  return (
    <div className={classNames("h-full flex flex-col p-2", className)}>
      <h1 className="text-black font-semibold text-xl mb-4">
        Sportowe Buty Nike Air Max
      </h1>
      <div className="flex gap-2 overflow-x-auto">
        {Object.entries(items).map(([key, value]) => (
          <div
            key={key}
            className={classNames(
              "font-medium pb-4 text-sm uppercase",
              key === current ? "text-primary" : "text-gray-400"
            )}
            onClick={() => {
              configurationStore.current = key as any;
            }}
          >
            {value.translate.pl}
          </div>
        ))}
      </div>
      <div className="text-dark overflow-y-auto flex-1 mb-4">
        {!!current && (
          <ColorCustomizationElement
            onSelect={(color) => {
              configurationStore.items[current].color = color;
            }}
          />
        )}
      </div>
      {/* <div className="text-dark px-11">ssssssssssssssssss</div> */}
      <div className="">
        <button className="w-full bg-primary text-white">
          Dodaj do koszyka - 500 zł
        </button>
      </div>
    </div>
  );
};

const ColorCustomizationElement = ({
  onSelect,
}: {
  onSelect: (color: string) => void;
}) => {
  const { current } = useConfigurationStore();

  const colorsTiles = useMemo(
    () =>
      colors.map(({ color, additionalCost }) => (
        <div
          key={color}
          style={{ backgroundColor: color }}
          className={`center-center center-ce h-10 w-10 rounded-full border border-gray-300`}
          onClick={() => onSelect(color)}
        >
          {/* {!!additionalCost && (
            <span className="text-xs">+{additionalCost}</span>
          )} */}
        </div>
      )),
    [colors, current]
  );

  return (
    <div className="flex items-center justify-normal flex-wrap gap-2 overflow-y-auto">
      {colorsTiles}
    </div>
  );
};

const DesktopConfiguration = ({ className }: { className: string }) => {
  const { items, current } = useConfigurationStore();
  return (
    <div className="relative top-2 space-y-2">
      <Card className={classNames(className, "space-y-4")}>
        <div className="space-y-2">
          <h1 className="text-2xl font-medium">Sportowe Buty Nike Air Max</h1>
          <h5 className="text-xs text-gray-500">
            <span className="font-bold">5.0</span> (340 opinii)
            <span className="text-purple-600 ml-2">Popularny</span>
          </h5>
          <h2 className="text-xs text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis a voluptates optio repellendus error laboriosam minus
            delectus. Sunt, harum ipsum.
          </h2>
        </div>
        <div>
          <div className="font-bold mb-2">Rozmiar</div>
          <SizeSelector />
        </div>

        <div className="space-y-2">
          {Object.entries(items).map(([key, value]) => {
            // @ts-ignore
            let currentColor = items[key].color;
            return (
              <div key={key}>
                <div className="font-bold mb-2">{value.translate.pl}</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ColorCircle color={currentColor} current />
                    {colors
                      .filter((color) => color.color !== currentColor)
                      .slice(0, 5)
                      .map(({ color }) => (
                        <ColorCircle
                          color={color}
                          onClick={(color) => {
                            configurationStore.current = key as any;
                            // @ts-ignore
                            configurationStore.items[key].color = color;
                          }}
                        />
                      ))}
                  </div>
                  <Popover
                    content={
                      <div className="flex gap-2 items-center flex-wrap">
                        {colors.map(({ color }) => (
                          <ColorCircle
                            color={color}
                            onClick={(color) => {
                              configurationStore.current = key as any;
                              // @ts-ignore
                              configurationStore.items[key].color = color;
                            }}
                          />
                        ))}
                      </div>
                    }
                  >
                    <div className="text-xs text-primary cursor-pointer pr-4">
                      + Więcej
                    </div>
                  </Popover>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
      <Card>
        <div className="flex gap-2 items-center justify-between">
          <div className="font-medium text-xl ">500 PLN</div>
          <button className="bg-primary text-white py-3">
            Dodaj do koszyka
          </button>
        </div>
      </Card>
      <div className="text-xs flex justify-around text-gray-500">
        <div className="flex items-center gap-1">
          <TruckIcon className="w-5 h-5" />
          Darmowa dostawa
        </div>
        <div className="flex items-center gap-1">
          <LetterIcon className="w-5 h-5" />
          Wysyłka w 4 dni
        </div>
      </div>
    </div>
  );
};

const ColorCircle = ({
  color,
  onClick,
  current,
}: {
  onClick?: (color: string) => void;
  color: string;
  current?: boolean;
}) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={classNames("w-6 h-6 border border-gray-300 rounded-full", {
        "border-2 border-primary": !!current,
        "cursor-pointer": !current,
      })}
      onClick={() => {
        onClick?.(color);
      }}
    />
  );
};

const Configuration = () => {
  return (
    <>
      <MobileConfiguration className="lg:hidden" />
      <DesktopConfiguration className="hidden lg:block" />
    </>
  );
};

const SizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState<number>();
  const sizes = [40, 41, 42, 43, 44, 45, 46, 47];

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <span
          key={size}
          className={classNames(
            "cursor-pointer px-3 py-2 rounded text-xs border border-gray-300",
            {
              "shadow-lg border-gray-500": selectedSize === size,
            }
          )}
          onClick={() => setSelectedSize(size)}
        >
          {size} EU
        </span>
      ))}
    </div>
  );
};

export default Configuration;
