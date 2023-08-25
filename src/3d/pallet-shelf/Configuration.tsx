import classNames from "classnames";
import RangeInput from "../../components/inputs/RangeInput";
import Tabs from "../../components/tabs/Tabs";
import { ReactNode } from "react";
import {
  PalletShelfConfigurationTab,
  PalletShelfMaterial,
  palletShelfMaterialConfig,
  usePalletShelfActions,
  usePalletShelfStore,
} from "./pallet-shelf.store";
import { Tooltip } from "../../components/tooltip";
import AdditionalCostLabel from "../../components/AdditionalCostLabel";
import NextButton from "./components/NextButton";
import ColorsConfiguration from "./configuration/ColorsConfiguration";
import { OptionLabel } from "./components/OptionLabel";
import AccessoriesConfiguration from "./configuration/AccessoriesConfiguration";
import SummaryTab from "./configuration/SummaryTab";
import { formatCurrency } from "../../utils/formatCurrency";

type ConfigurationProps = {};

const Configuration = ({}: ConfigurationProps) => {
  const { summary, currentTab } = usePalletShelfStore();
  const { setTab } = usePalletShelfActions();
  return (
    <div className="bg-white h-full w-full rounded-t-2xl px-3 py-2 overflow-y-auto lg:rounded-xl lg:p-6 ">
      <div className="flex flex-col h-full w-full ">
        <div>
          <div className="flex items-center justify-between lg:flex-col lg:items-start">
            <h2 className="text-lg lg:text-2xl lg:mb-1">Regał magazynowy</h2>
            <div className="font-medium text-lg lg:font-bold lg:text-2xl">
              {formatCurrency(summary.finalPrice)}
            </div>
          </div>
        </div>

        <Tabs
          currentTab={currentTab}
          onChange={(tab) => setTab(tab.key as PalletShelfConfigurationTab)}
          tabs={[
            {
              component: <SizeTab />,
              label: "Wymiary",
              key: "SIZE",
            },
            {
              component: <Shelf />,
              label: "Regały",
              key: "SHELF",
            },
            {
              component: <ColorsConfiguration />,
              label: "Kolory",
              key: "COLORS",
            },
            {
              component: <AccessoriesConfiguration />,
              label: "Akcesoria",
              key: "ACCESSORIES",
            },
            {
              component: <SummaryTab />,
              label: "Podsumowanie",
              key: "SUMMARY",
            },
          ]}
        />
      </div>
    </div>
  );
};

const Shelf = () => {
  const { shelf } = usePalletShelfStore();
  const { setShelfAmount, setShelfMaterial } = usePalletShelfActions();
  return (
    <div className="flex flex-col w-full">
      <div className=" flex flex-col flex-1 ">
        <div className="space-y-2 lg:space-y-4 lg:mt-4">
          <OptionLabel>Ilość regałów</OptionLabel>
          <div className="flex flex-wrap gap-4">
            {Array.from({ length: shelf.shelfs.maxAmount }).map(
              (_el, index) => {
                if (index === 0) {
                  return null;
                }
                const shelfAmount = index + 1;
                const { itemsIncludeInPrice, additionItemPrice } = shelf.shelfs;
                const isActive = shelf.shelfs.amount === index + 1;

                return (
                  <div key={index} className="">
                    <div
                      onClick={() => setShelfAmount(shelfAmount)}
                      className={classNames(
                        "w-16 h-10 flex flex-col justify-center items-center text-sm border cursor-pointer border-gray-300 rounded",
                        {
                          "border-primary text-black bg-purple-100": isActive,
                          "text-gray-300": !isActive,
                        }
                      )}
                    >
                      {shelfAmount}
                    </div>

                    <AdditionalCostLabel
                      additionalCost={
                        shelfAmount > itemsIncludeInPrice
                          ? additionItemPrice *
                            (shelfAmount - itemsIncludeInPrice)
                          : 0
                      }
                      isActive={isActive}
                      currentAdditionalCost={shelf.shelfs.additionalCost}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="space-y-2 lg:space-y-4 lg:mt-4">
          <OptionLabel>Materiały</OptionLabel>
          <div className="overflow-auto flex md:flex-wrap gap-4 mt-2  ">
            {Object.entries(palletShelfMaterialConfig).map(
              ([key, { previewUrl, name, additionalCost }]) => (
                <Tooltip content={name} key={key}>
                  <div>
                    <img
                      key={key}
                      className={classNames(
                        "rounded overflow-hidden w-16 h-10 sm:h-12",
                        {
                          "border-2 border-primary  ":
                            shelf.material.current === key,
                        }
                      )}
                      src={previewUrl}
                      onClick={() =>
                        setShelfMaterial(key as PalletShelfMaterial)
                      }
                    />
                    <AdditionalCostLabel
                      additionalCost={additionalCost}
                      isActive={shelf.material.current === key}
                      currentAdditionalCost={shelf.material.additionalCost}
                    />
                  </div>
                </Tooltip>
              )
            )}
          </div>
        </div>
      </div>
      <NextButton />
    </div>
  );
};

const SizeTab = () => {
  const { width, depth, height } = usePalletShelfStore();
  const { setSize } = usePalletShelfActions();
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-1 mt-4 flex-col gap-4 lg:flex-auto">
        <AdditionalCostWrapper additionalCost={width.additionalPrice}>
          <RangeInput
            label="Szerokość"
            min={width.minSize}
            max={width.maxSize}
            step={width.step}
            onChange={(event) =>
              setSize("width", Math.floor(+event.target.value))
            }
            value={width.value}
            labelClassName="w-[120px]"
          />
        </AdditionalCostWrapper>

        <AdditionalCostWrapper additionalCost={height.additionalPrice}>
          <RangeInput
            label="Wysokość"
            min={height.minSize}
            max={height.maxSize}
            step={height.step}
            value={height.value}
            onChange={(event) =>
              setSize("height", Math.floor(+event.target.value))
            }
            labelClassName="w-[120px]"
          />
        </AdditionalCostWrapper>

        <AdditionalCostWrapper additionalCost={depth.additionalPrice}>
          <RangeInput
            label="Głębokość"
            min={depth.minSize}
            max={depth.maxSize}
            step={depth.step}
            value={depth.value}
            onChange={(event) =>
              setSize("depth", Math.floor(+event.target.value))
            }
            labelClassName="w-[120px]"
          />
        </AdditionalCostWrapper>
      </div>
      <NextButton />
    </div>
  );
};

const AdditionalCostWrapper = ({
  additionalCost,
  children,
  className,
}: {
  additionalCost?: number;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="w-full">
      {children}

      {!!additionalCost && (
        <div
          className={classNames(
            "text-xs sm:text-sm text-left font-medium whitespace-nowrap text-primary lg:mt-2",
            className
          )}
        >
          +{formatCurrency(additionalCost)}
        </div>
      )}
    </div>
  );
};
export default Configuration;
