import { ReactNode, useState } from "react";
import {
  palletShelfMaterialConfig,
  usePalletShelfStore,
} from "../pallet-shelf.store";
import { formatCurrency } from "../../../utils/formatCurrency";
import classNames from "classnames";
import HorizontalDividerLine from "../../../components/HorizontalDividerLine";
import { frameColorsConfig, legsColorsConfig } from "../configs";
import { Button } from "../components/NextButton";
import Modal from "../../../components/Modal";
import { useTranslation } from "react-i18next";

type SummaryTabProps = {};

const SummaryTab = ({}: SummaryTabProps) => {
  const { t } = useTranslation();
  const [showModal, toggleModal] = useState(false);
  const { accessories, frame, height, legs, shelf, width, depth, summary } =
    usePalletShelfStore();
  return (
    <>
      <Modal open={showModal} onClose={() => toggleModal(false)}>
        <div>
          <h3 className="text-center text-lg lg:text-lg font-semibold">
            {t("thanksModal.title")}
          </h3>
          <div className="mt-4">
            {t("thanksModal.list", { returnObjects: true }).map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
          <div className="mt-4 font-bold">
            {t("thanksModal.contactUs")}
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
          {t("cart.elements")}
        </h5>
        <EstimateElement
          base={{ label: `${height.minSize} cm`, value: 0 }}
          additional={{
            label: `${height.value - height.minSize} cm`,
            value: height.additionalPrice,
          }}
        >
          {t("height")} {height.value} cm
        </EstimateElement>
        <EstimateElement
          base={{ label: `${height.minSize} cm`, value: 0 }}
          additional={{
            label: `+ ${width.value - width.minSize} cm`,
            value: width.additionalPrice,
          }}
        >
          {t("width")} {width.value} cm
        </EstimateElement>
        <EstimateElement
          base={{ label: `${depth.minSize} cm`, value: 0 }}
          additional={{
            label: `+ ${depth.value - depth.minSize} cm`,
            value: depth.additionalPrice,
          }}
        >
          {t("depth")} {depth.value} cm
        </EstimateElement>
        <EstimateElement
          base={{
            label: `${shelf.shelfs.itemsIncludeInPrice} ${t("unit", {
              count: 2,
            })}`,
            value: 0,
          }}
          additional={{
            label: `+${
              shelf.shelfs.amount - shelf.shelfs.itemsIncludeInPrice
            } ${t("unit", {
              count: shelf.shelfs.amount - shelf.shelfs.itemsIncludeInPrice,
            })}`,
            value: shelf.shelfs.additionalCost,
          }}
        >
          {t("summary_items.shelf")}
        </EstimateElement>
        <EstimateElement
          base={{
            label: t(palletShelfMaterialConfig["plywood"].name as any),
            value: 0,
          }}
          additional={{
            label: `+ ${t(
              palletShelfMaterialConfig[shelf.material.current].name as any
            )}`,
            value: shelf.material.additionalCost,
          }}
        >
          {t("summary_items.shelfMaterial")}
        </EstimateElement>

        <EstimateElement
          base={{ label: t("colors.blue"), value: 0 }}
          additional={{
            label: `+ ${t(frameColorsConfig[frame.colorKey].name as any)}`,
            value: frame.additionalCost,
          }}
        >
          {t("summary_items.shelfColor")}
        </EstimateElement>
        <EstimateElement
          base={{ label: t("colors.blue"), value: 0 }}
          additional={{
            label: `+ ${t(legsColorsConfig[legs.colorKey].name as any)}`,
            value: legs.additionalCost,
          }}
        >
          {t("summary_items.legsColor")}
        </EstimateElement>
        {accessories.installationKit.selected && (
          <EstimateElement
            additional={{
              label: ``,
              value: accessories.installationKit.additionalCost,
            }}
          >
            {t("accessories.installationKit")}
          </EstimateElement>
        )}
        {accessories.shelfStrengthen.selected && (
          <EstimateElement
            additional={{
              label: ``,
              value: accessories.shelfStrengthen.additionalCost,
            }}
          >
            {t("accessories.shelfStrengthen")}
          </EstimateElement>
        )}

        <div>
          <div className="flex justify-between items-center mb-2">
            <span>{t("total")}</span>
            <span className="text-lg font-bold">
              {formatCurrency(summary.finalPrice)}
            </span>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 left-0 mx-2 mb-4 lg:relative lg:mx-0 lg:mt-4">
          <Button onClick={() => toggleModal(true)}>
            {t("cart.addToCart")}
          </Button>
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
