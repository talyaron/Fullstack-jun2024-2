import { useState } from "react";
import { Switch } from "../../model/switch/SwitchModel";

export function useSwitchVM() {
  const [s, setSwitch] = useState<Switch[]>([
    {
      on: false,
      id: crypto.randomUUID(),
    },
    {
      on: false,
      id: crypto.randomUUID(),
    },
  ]);

  return {
    s,
    setSwitch,
  };
}
