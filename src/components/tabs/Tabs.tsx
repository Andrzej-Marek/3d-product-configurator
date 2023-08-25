import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";

export type Tab<Meta = any> = {
  key: string;
  label: ReactNode;
  component: ReactNode | ((uniqId: string | undefined) => ReactNode);
  metadata?: Meta;
};

type TabsProps = {
  tabs: (() => Tab[]) | Tab[];
  currentTab: string;
  onChange?: (tab: Tab) => void;
  className?: string;
  uniqId?: string;
};

const Tabs = ({
  tabs: propTabs,
  currentTab: currentTabProps,
  uniqId,
  onChange,
}: TabsProps) => {
  const tabs = typeof propTabs === "function" ? propTabs() : propTabs;
  const [currentTab, setCurrentTab] = useState<Tab>(
    currentTabProps
      ? tabs.find((tab) => tab.key === currentTabProps) ?? tabs[0]
      : tabs[0]
  );

  useEffect(() => {
    const tab = tabs.find((tab) => tab.key === currentTabProps);
    if (tab) {
      setCurrentTab(tab);
    }
  }, [currentTabProps]);

  return (
    <div className="flex flex-col flex-1 w-full">
      <div className="overflow-x-auto py-2">
        <nav className="flex gap-6 " aria-label="Tabs">
          {tabs.map((tab, index) => (
            <div
              onClick={() => {
                setCurrentTab(tab);
                onChange?.(tab);
              }}
              key={index}
              className={classNames(
                "shrink-0 cursor-pointer rounded-lg p-2 text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700",
                { " bg-gray-100 ": tab.label === currentTab.label }
              )}
            >
              {tab.label}
            </div>
          ))}
        </nav>
      </div>
      <div className="flex flex-1 ">
        {typeof currentTab.component === "function"
          ? currentTab.component(uniqId)
          : currentTab.component}
      </div>
    </div>
  );
};

export default Tabs;
