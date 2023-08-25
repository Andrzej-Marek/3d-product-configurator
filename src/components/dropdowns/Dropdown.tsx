import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, ReactNode } from "react";

type DropdownProps = {
  content: ReactNode;
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
};

const Dropdown = ({
  wrapperClassName,
  children,
  className,
  content,
}: DropdownProps) => {
  return (
    <Menu
      as="div"
      className={classNames("relative inline-flex", wrapperClassName)}
    >
      <Menu.Button as="div">{children}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            "fixed z-[99999] right-8 mt-4 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
            className
          )}
        >
          {content}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
