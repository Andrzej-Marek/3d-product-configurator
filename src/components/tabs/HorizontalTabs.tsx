import classNames from "classnames";
import { ReactNode, useState } from "react";

export type Tab = {
  label: ReactNode;
  component: ReactNode | ((uniqId: string | undefined) => ReactNode);
};

type Props = {
  tabs: (() => Tab[]) | Tab[];
  defaultTab?: string; // label;
  className?: string;
  uniqId?: string;
};

const HorizontalTabs = ({
  className,
  tabs: propTabs,
  defaultTab,
  uniqId,
}: Props) => {
  const tabs = typeof propTabs === "function" ? propTabs() : propTabs;
  const [currentTab, setCurrentTab] = useState<Tab>(
    tabs.find((tab) => tab.label === defaultTab) || tabs[0]
  );

  return (
    <div>
      <ul
        className={classNames(
          "grid rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700 mb-4",
          className
        )}
        style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}
      >
        {tabs.map((tab, index) => (
          <li key={index} onClick={() => setCurrentTab(tab)}>
            <div
              className={classNames(
                "inline-flex items-center relative p-4 w-full text-sm font-medium focus:z-20 text-white cursor-pointer ",
                { "rounded-l-md": index === 0 },
                { "rounded-r-md": index === tabs.length - 1 },
                { "bg-accent": currentTab.label === tab.label },
                { "bg-gray-700 ": currentTab.label !== tab.label }
              )}
            >
              {tab.label}
            </div>
          </li>
        ))}
      </ul>
      {typeof currentTab.component === "function"
        ? currentTab.component(uniqId)
        : currentTab.component}
    </div>
  );
};

export default HorizontalTabs;
