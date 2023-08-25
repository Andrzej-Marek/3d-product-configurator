import { ReactNode } from "react";

type CanvasOverlayProps = { children: ReactNode };

const CanvasOverlay = ({ children }: CanvasOverlayProps) => {
  return (
    <div className="absolute bottom-0 top-0 w-full h-full select-none">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "12vw",
            textAlign: "center",
            color: "GrayText",
            opacity: 0.3,
            fontWeight: "bold",
          }}
        >
          {children}
        </h1>
      </div>
    </div>
  );
};

export default CanvasOverlay;
