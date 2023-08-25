import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import classNames from "classnames";
import { gsap } from "gsap";
import { ReactNode } from "react";
import { Vector3 } from "three";
import { Tooltip } from "../../components/tooltip";
import {
  usePalletShelfActions,
  usePalletShelfStore,
} from "./pallet-shelf.store";

type CanvasControlsProps = {};

const CanvasControls = ({}: CanvasControlsProps) => {
  const { showSizes } = usePalletShelfStore();
  const { hideSizes, showSizes: showSizesAction } = usePalletShelfActions();
  const { camera } = useThree();

  const onFrontView = () => {
    gsap.to(camera.position, { ...new Vector3(0, 1.5, 4), duration: 1 });
  };

  const onSideView = () => {
    gsap.to(camera.position, {
      ...new Vector3(
        3.8982494744250764,
        0.8895822097882381,
        -0.11088068890708085
      ),
      duration: 1,
    });
  };
  const onTopView = () => {
    gsap.to(camera.position, {
      ...new Vector3(-0.1422903384930902, 3.695518130045096, 1.524106036363309),
      duration: 1,
    });
  };

  return (
    <Html fullscreen>
      <div className="hidden lg:flex lg:justify-center lg:gap-4 lg:ml-4 lg:mt-4">
        <ButtonIcon onClick={onFrontView} tooltipContent="Frontowy widok">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 7.35321V16.6472C21.0001 16.7543 20.9714 16.8595 20.9171 16.9518C20.8627 17.0442 20.7847 17.1203 20.691 17.1722L12.291 21.8382C12.202 21.8876 12.1018 21.9135 12 21.9135C11.8982 21.9135 11.798 21.8876 11.709 21.8382L3.309 17.1722C3.21532 17.1203 3.13725 17.0442 3.08292 16.9518C3.02858 16.8595 2.99995 16.7543 3 16.6472V7.35321C3.00013 7.24625 3.02884 7.14127 3.08317 7.04914C3.1375 6.95701 3.21547 6.88108 3.309 6.82921L11.709 2.16221C11.798 2.11282 11.8982 2.08691 12 2.08691C12.1018 2.08691 12.202 2.11282 12.291 2.16221L20.691 6.82921C20.7845 6.88108 20.8625 6.95701 20.9168 7.04914C20.9712 7.14127 20.9999 7.24625 21 7.35321Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.528 7.29432L11.708 11.8383C11.7972 11.8879 11.8975 11.9139 11.9995 11.9139C12.1015 11.9139 12.2018 11.8879 12.291 11.8383L20.5 7.27832M12 21.0003V12.0003"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.691 11.8292L3.891 7.49521C3.79964 7.44455 3.69663 7.41861 3.59217 7.41997C3.48771 7.42134 3.38541 7.44995 3.29541 7.50299C3.2054 7.55602 3.1308 7.63164 3.07899 7.72235C3.02718 7.81307 2.99995 7.91574 3 8.02021V16.6472C2.99995 16.7543 3.02858 16.8595 3.08292 16.9518C3.13725 17.0442 3.21532 17.1203 3.309 17.1722L11.109 21.5052C11.2004 21.5559 11.3034 21.5818 11.4078 21.5805C11.5123 21.5791 11.6146 21.5505 11.7046 21.4974C11.7946 21.4444 11.8692 21.3688 11.921 21.2781C11.9728 21.1874 12.0001 21.0847 12 20.9802V12.3532C11.9999 12.2463 11.9712 12.1413 11.9168 12.0491C11.8625 11.957 11.7845 11.8811 11.691 11.8292Z"
              fill="black"
              stroke="black"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonIcon>

        <ButtonIcon onClick={onSideView} tooltipContent="Boczny widok">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 16.6472V7.35321C20.9999 7.24625 20.9712 7.14127 20.9168 7.04914L12 12V21.9135L20.9171 16.9518C20.9714 16.8595 21.0001 16.7543 21 16.6472Z"
              fill="black"
            />
            <path
              d="M20.9171 16.9518C20.9714 16.8595 21.0001 16.7543 21 16.6472V7.35321C20.9999 7.24625 20.9712 7.14127 20.9168 7.04914M20.9171 16.9518C20.8627 17.0442 20.7847 17.1203 20.691 17.1722L12.291 21.8382C12.202 21.8876 12.1018 21.9135 12 21.9135M20.9171 16.9518L12 21.9135M12 21.9135C11.8982 21.9135 11.798 21.8876 11.709 21.8382L3.309 17.1722C3.21532 17.1203 3.13725 17.0442 3.08292 16.9518C3.02858 16.8595 2.99995 16.7543 3 16.6472V7.35321C3.00013 7.24625 3.02884 7.14127 3.08317 7.04914C3.1375 6.95701 3.21547 6.88108 3.309 6.82921L11.709 2.16221C11.798 2.11282 11.8982 2.08691 12 2.08691C12.1018 2.08691 12.202 2.11282 12.291 2.16221L20.691 6.82921C20.7845 6.88108 20.8625 6.95701 20.9168 7.04914M12 21.9135V12L20.9168 7.04914"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.528 7.29432L11.708 11.8383C11.7972 11.8879 11.8975 11.9139 11.9995 11.9139C12.1015 11.9139 12.2018 11.8879 12.291 11.8383L20.5 7.27832M12 21.0003V12.0003"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.691 11.8292L3.891 7.49521C3.79964 7.44455 3.69663 7.41861 3.59217 7.41997C3.48771 7.42134 3.38541 7.44995 3.29541 7.50299C3.2054 7.55602 3.1308 7.63164 3.07899 7.72235C3.02718 7.81307 2.99995 7.91574 3 8.02021V16.6472C2.99995 16.7543 3.02858 16.8595 3.08292 16.9518C3.13725 17.0442 3.21532 17.1203 3.309 17.1722L11.109 21.5052C11.2004 21.5559 11.3034 21.5818 11.4078 21.5805C11.5123 21.5791 11.6146 21.5505 11.7046 21.4974C11.7946 21.4444 11.8692 21.3688 11.921 21.2781C11.9728 21.1874 12.0001 21.0847 12 20.9802V12.3532C11.9999 12.2463 11.9712 12.1413 11.9168 12.0491C11.8625 11.957 11.7845 11.8811 11.691 11.8292Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonIcon>
        <ButtonIcon onClick={onTopView} tooltipContent="Górny widok">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3.309 6.82921C3.21547 6.88108 3.1375 6.95701 3.08317 7.04914L12 12L20.9168 7.04914L12 2.08691C11.8982 2.08691 11.798 2.11282 11.709 2.16221L3.309 6.82921Z"
              fill="black"
            />
            <path
              d="M20.9171 16.9518C20.9714 16.8595 21.0001 16.7543 21 16.6472V7.35321C20.9999 7.24625 20.9712 7.14127 20.9168 7.04914M20.9171 16.9518C20.8627 17.0442 20.7847 17.1203 20.691 17.1722L12.291 21.8382C12.202 21.8876 12.1018 21.9135 12 21.9135M20.9171 16.9518L12 21.9135M12 21.9135C11.8982 21.9135 11.798 21.8876 11.709 21.8382L3.309 17.1722C3.21532 17.1203 3.13725 17.0442 3.08292 16.9518C3.02858 16.8595 2.99995 16.7543 3 16.6472V7.35321C3.00013 7.24625 3.02884 7.14127 3.08317 7.04914M12 21.9135V12M3.08317 7.04914C3.1375 6.95701 3.21547 6.88108 3.309 6.82921L11.709 2.16221C11.798 2.11282 11.8982 2.08691 12 2.08691M3.08317 7.04914L12 12M12 2.08691C12.1018 2.08691 12.202 2.11282 12.291 2.16221L20.691 6.82921C20.7845 6.88108 20.8625 6.95701 20.9168 7.04914M12 2.08691L20.9168 7.04914M20.9168 7.04914L12 12"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.528 7.29432L11.708 11.8383C11.7972 11.8879 11.8975 11.9139 11.9995 11.9139C12.1015 11.9139 12.2018 11.8879 12.291 11.8383L20.5 7.27832M12 21.0003V12.0003"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.691 11.8292L3.891 7.49521C3.79964 7.44455 3.69663 7.41861 3.59217 7.41997C3.48771 7.42134 3.38541 7.44995 3.29541 7.50299C3.2054 7.55602 3.1308 7.63164 3.07899 7.72235C3.02718 7.81307 2.99995 7.91574 3 8.02021V16.6472C2.99995 16.7543 3.02858 16.8595 3.08292 16.9518C3.13725 17.0442 3.21532 17.1203 3.309 17.1722L11.109 21.5052C11.2004 21.5559 11.3034 21.5818 11.4078 21.5805C11.5123 21.5791 11.6146 21.5505 11.7046 21.4974C11.7946 21.4444 11.8692 21.3688 11.921 21.2781C11.9728 21.1874 12.0001 21.0847 12 20.9802V12.3532C11.9999 12.2463 11.9712 12.1413 11.9168 12.0491C11.8625 11.957 11.7845 11.8811 11.691 11.8292Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonIcon>

        <ButtonIcon
          className={classNames(showSizes ? "bg-purple-200" : "")}
          tooltipContent={showSizes ? "Ukryj wymiary" : "Pokaż wymiary"}
          onClick={showSizes ? hideSizes : showSizesAction}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M2 3C2 2.44772 2.44772 2 3 2H11C11.5523 2 12 2.44772 12 3V12H21C21.5523 12 22 12.4477 22 13V21C22 21.5523 21.5523 22 21 22H3C2.44772 22 2 21.5523 2 21V3ZM4 4V6.5H6.004V8.5H4V11H6.004V13H4V15.5H6.004V17.5H4V20H6.5V18.033H8.5V20H11V18.033H13V20H15.5V18.033H17.5V20H20V14H10V4H4Z"
              fill="black"
            />
          </svg>
        </ButtonIcon>
      </div>
    </Html>
  );
};

const ButtonIcon = ({
  children,
  className,
  onClick,
  tooltipContent,
}: {
  tooltipContent?: ReactNode;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) => {
  const button = (
    <button
      onClick={onClick}
      className={classNames(
        "w-11 h-11 cursor-pointer bg-white rounded-full shadow flex flex-col justify-center items-center",
        className
      )}
    >
      {children}
    </button>
  );

  if (tooltipContent)
    return (
      <Tooltip className="inline-block w-fit h-fit" content={tooltipContent}>
        {button}
      </Tooltip>
    );

  return button;
};

export default CanvasControls;
