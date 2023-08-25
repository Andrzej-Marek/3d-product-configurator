import { useCallback, useState } from "react";

type Return = [boolean, () => void, () => void];

export const useBoolState = (defaultValue = false): Return => {
  const [isOn, setOn] = useState(defaultValue);

  return [
    isOn,
    useCallback(() => setOn(true), []),
    useCallback(() => setOn(false), []),
  ];
};
