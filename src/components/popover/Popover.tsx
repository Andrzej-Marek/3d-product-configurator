import { Popover as HeadlessPopover, Transition } from "@headlessui/react";
import { ReactNode, useState } from "react";
import { usePopper } from "react-popper";

export type PopoverTypes = {
  children: ReactNode;
  content: ReactNode;
};
const Popover = ({ children, content }: PopoverTypes) => {
  let [referenceElement, setReferenceElement] = useState<HTMLButtonElement>();
  let [popperElement, setPopperElement] = useState<HTMLDivElement>();

  let { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <HeadlessPopover>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of the chevron icon. */
        <>
          <HeadlessPopover.Button
            as="div"
            ref={(element) => setReferenceElement(element ?? undefined)}
          >
            {children}
          </HeadlessPopover.Button>

          <HeadlessPopover.Panel
            ref={(element) => setPopperElement(element ?? undefined)}
            style={styles.popper}
            {...attributes.popper}
          >
            <div className="bg-white p-4 rounded shadow-lg z-[9999]">
              {content}
            </div>
          </HeadlessPopover.Panel>
        </>
      )}
    </HeadlessPopover>
  );
};

export default Popover;
