import classNames from "classnames";
import {
  PalletShelfConfigurationTab,
  usePalletShelfActions,
  usePalletShelfStore,
} from "../pallet-shelf.store";
import { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};
export const Button = ({ className, onClick, children }: ButtonProps) => (
  <button
    className={classNames(
      "px-2 h-10 text-sm sm:text-base w-full bg-primary text-white flex justify-center items-center flex-col",
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
const NextButton = ({ className }: { className?: string }) => {
  const { currentTab } = usePalletShelfStore();
  const { setTab } = usePalletShelfActions();

  const nextTabMap: Record<
    PalletShelfConfigurationTab,
    PalletShelfConfigurationTab
  > = {
    SIZE: "SHELF",
    SHELF: "COLORS",
    COLORS: "ACCESSORIES",
    ACCESSORIES: "SUMMARY",
    SUMMARY: "SUMMARY",
  };

  if (currentTab === "SUMMARY") {
    return null;
  }
  return (
    <Button
      className={classNames(className, "mt-2 lg:mt-4")}
      onClick={() => {
        setTab(nextTabMap[currentTab]);
      }}
    >
      {" "}
      {currentTab === "ACCESSORIES" ? "Podsumowanie" : "Dalej"}
    </Button>
  );
};

export default NextButton;
