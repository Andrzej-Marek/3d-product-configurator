import AdditionalCostLabel from "../../../components/AdditionalCostLabel";
import Checkbox from "../../../components/form/checkbox/Checkbox";
import NextButton from "../components/NextButton";
import {
  usePalletShelfActions,
  usePalletShelfStore,
} from "../pallet-shelf.store";

type AccessoriesConfigurationProps = {};

const AccessoriesConfiguration = ({}: AccessoriesConfigurationProps) => {
  const { accessories } = usePalletShelfStore();
  const { setAccessories } = usePalletShelfActions();
  return (
    <div className="flex flex-col w-full text-sm lg:mt-4">
      <div className="flex flex-1 flex-col w-full gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="sm:text-base">Dodatkowe wzmocnienia półek</p>
            <AdditionalCostLabel
              className="!text-left"
              isActive={accessories.shelfStrengthen.selected}
              additionalCost={accessories.shelfStrengthen.additionalCost}
            />
          </div>

          <Checkbox
            size="lg"
            checked={accessories.shelfStrengthen.selected}
            onChange={(event) =>
              setAccessories("shelfStrengthen", event.target.checked)
            }
          />
        </div>

        <div className="flex items-center justify-between ">
          <div>
            <p className="sm:text-base">Zestaw montażowy</p>
            <AdditionalCostLabel
              className="!text-left"
              isActive={accessories.installationKit.selected}
              additionalCost={accessories.installationKit.additionalCost}
            />
          </div>

          <Checkbox
            size="lg"
            checked={accessories.installationKit.selected}
            onChange={(event) =>
              setAccessories("installationKit", event.target.checked)
            }
          />
        </div>
      </div>

      <NextButton />
    </div>
  );
};

export default AccessoriesConfiguration;
