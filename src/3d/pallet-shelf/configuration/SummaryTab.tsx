import { ReactNode, useState } from "react";
import {
  palletShelfMaterialConfig,
  usePalletShelfStore,
} from "../pallet-shelf.store";
import { formatCurrency } from "../../../utils/formatCurrency";
import classNames from "classnames";
import HorizontalDividerLine from "../../../components/HorizontalDividerLine";
import { getVariety } from "../../../utils/getVariety";
import { frameColorsConfig, legsColorsConfig } from "../configs";
import { Button } from "../components/NextButton";
import Modal from "../../../components/Modal";

type SummaryTabProps = {};

const SummaryTab = ({}: SummaryTabProps) => {
  const [showModal, toggleModal] = useState(false);
  const { accessories, frame, height, legs, shelf, width, depth, summary } =
    usePalletShelfStore();
  return (
    <>
      <Modal open={showModal} onClose={() => toggleModal(false)}>
        <div>
          <h3 className="text-center text-lg lg:text-lg font-semibold">
            Dziękujemy za spróbowanie konfiguratora!
          </h3>
          <div className="mt-4">
            <p>Potrzebujesz czegoś podobnego?</p>
            <p>Aplikacji internetowej lub mobilnej?</p>
            <p>A może pełnego sklepu internetowego?</p>
          </div>
          <div className="mt-4 font-bold">
            Skontaktuj się z nami na{" "}
            <a
              href="mailto:kontakt@musclecode.pl"
              target="_blank"
              className="text-blue-500 underline"
            >
              kontakt@musclecode.pl
            </a>{" "}
          </div>
        </div>
      </Modal>

      <div className="w-full pb-14 lg:mt-4 lg:pb-0">
        <h5 className="text-xl font-semibold text-center mb-2">
          Elementy Kosztów
        </h5>
        <EstimateElement
          base={{ label: `${height.minSize} cm`, value: 0 }}
          additional={{
            label: `${height.value - height.minSize} cm`,
            value: height.additionalPrice,
          }}
        >
          Wysokość {height.value} cm
        </EstimateElement>
        <EstimateElement
          base={{ label: `${height.minSize} cm`, value: 0 }}
          additional={{
            label: `+ ${width.value - width.minSize} cm`,
            value: width.additionalPrice,
          }}
        >
          Szerokość {width.value} cm
        </EstimateElement>
        <EstimateElement
          base={{ label: `${depth.minSize} cm`, value: 0 }}
          additional={{
            label: `+ ${depth.value - depth.minSize} cm`,
            value: depth.additionalPrice,
          }}
        >
          Głębokość {depth.value} cm
        </EstimateElement>
        <EstimateElement
          base={{
            label: `${getVariety(
              shelf.shelfs.itemsIncludeInPrice,
              "sztuka",
              "sztuki",
              "sztuk"
            )}`,
            value: 0,
          }}
          additional={{
            label: `+ ${getVariety(
              shelf.shelfs.amount - shelf.shelfs.itemsIncludeInPrice,
              "sztuka",
              "sztuki",
              "sztuk"
            )}`,
            value: shelf.shelfs.additionalCost,
          }}
        >
          Regały {getVariety(shelf.shelfs.amount, "sztuka", "sztuki", "sztuk")}
        </EstimateElement>
        <EstimateElement
          base={{
            label: `${palletShelfMaterialConfig["plywood"].name}`,
            value: 0,
          }}
          additional={{
            label: `+ ${
              palletShelfMaterialConfig[shelf.material.current].name
            }`,
            value: shelf.material.additionalCost,
          }}
        >
          Materiał regałów
        </EstimateElement>

        <EstimateElement
          base={{ label: `Niebieski`, value: 0 }}
          additional={{
            label: `+ ${frameColorsConfig[frame.colorKey].name}`,
            value: frame.additionalCost,
          }}
        >
          Kolor półek
        </EstimateElement>
        <EstimateElement
          base={{ label: `Niebieski`, value: 0 }}
          additional={{
            label: `+ ${legsColorsConfig[legs.colorKey].name}`,
            value: legs.additionalCost,
          }}
        >
          Kolor nóg
        </EstimateElement>
        {accessories.installationKit.selected && (
          <EstimateElement
            additional={{
              label: ``,
              value: accessories.installationKit.additionalCost,
            }}
          >
            Zestaw montażowy
          </EstimateElement>
        )}
        {accessories.shelfStrengthen.selected && (
          <EstimateElement
            additional={{
              label: ``,
              value: accessories.shelfStrengthen.additionalCost,
            }}
          >
            Dodatkowe wzmocnienia półek
          </EstimateElement>
        )}

        <div>
          <div className="flex justify-between items-center mb-2">
            <span>RAZEM</span>
            <span className="text-lg font-bold">
              {formatCurrency(summary.finalPrice)}
            </span>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 left-0 mx-2 mb-4 lg:relative lg:mx-0 lg:mt-4">
          <Button onClick={() => toggleModal(true)}>Dodaj do koszyka</Button>
        </div>
      </div>
    </>
  );
};

const EstimateElement = ({
  children,
  base,
  additional,
}: {
  base?: {
    label: string;
    value: number;
  };
  additional?: {
    label: string;
    value?: number;
  };
  children: ReactNode;
}) => {
  return (
    <>
      <div className="text-sm">
        <div className="flex justify-between items-center">
          <span>{children}</span>
        </div>
        {base && <Element label={base.label} value={base.value} />}
        {additional && additional.value && (
          <Element
            label={additional.label}
            value={additional.value}
            isAdditional
          />
        )}
      </div>
      <HorizontalDividerLine className="my-2" />
    </>
  );
};

const Element = ({
  label,
  value,
  isAdditional,
}: {
  label: string;
  value: number;
  isAdditional?: boolean;
}) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-gray-400">{label}</span>
    <span className={classNames(isAdditional ? "" : "text-gray-400")}>
      {isAdditional ? "+ " : ""}
      {formatCurrency(value)}
    </span>
  </div>
);

export default SummaryTab;
