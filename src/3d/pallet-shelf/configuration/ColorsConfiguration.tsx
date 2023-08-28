import { useTranslation } from "react-i18next";
import AdditionalCostLabel from "../../../components/AdditionalCostLabel";
import NextButton from "../components/NextButton";
import { OptionLabel } from "../components/OptionLabel";
import {
  FrameColors,
  LegsColors,
  frameColorsConfig,
  legsColorsConfig,
} from "../configs";
import {
  usePalletShelfActions,
  usePalletShelfStore,
} from "../pallet-shelf.store";

type ColorsConfigurationProps = {};

const ColorsConfiguration = ({}: ColorsConfigurationProps) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-1 flex-col ">
        <LegsColorPicker />
        <FrameColorPicker />
      </div>
      <NextButton />
    </div>
  );
};

const LegsColorPicker = () => {
  const { t } = useTranslation();
  const { legs } = usePalletShelfStore();
  const { setLegsColor } = usePalletShelfActions();
  return (
    <div className="space-y-2 lg:space-y-4 lg:mt-4">
      <OptionLabel>{t("summary_items.legsColor")}</OptionLabel>
      <div className="flex items-center gap-4">
        {Object.entries(legsColorsConfig).map(([key, config]) => (
          <div key={key} onClick={() => setLegsColor(key as LegsColors)}>
            <div
              key={key}
              className={`w-16 h-10  sm:h-12`}
              style={{ backgroundColor: config.color }}
            />
            <AdditionalCostLabel
              additionalCost={config.additionalCost}
              currentAdditionalCost={legs.additionalCost}
              isActive={key === legs.colorKey}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const FrameColorPicker = () => {
  const { t } = useTranslation();
  const { frame } = usePalletShelfStore();
  const { setFrameColor } = usePalletShelfActions();
  return (
    <div className="space-y-2 lg:space-y-4 lg:mt-4">
      <OptionLabel>{t("summary_items.shelfColor")}</OptionLabel>
      <div className="flex items-center gap-4">
        {Object.entries(frameColorsConfig).map(([key, config]) => (
          <div key={key} onClick={() => setFrameColor(key as FrameColors)}>
            <div
              key={key}
              className={`w-16 h-10 sm:h-12`}
              style={{ backgroundColor: config.color }}
            />
            <AdditionalCostLabel
              additionalCost={config.additionalCost}
              currentAdditionalCost={frame.additionalCost}
              isActive={key === frame.colorKey}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorsConfiguration;
