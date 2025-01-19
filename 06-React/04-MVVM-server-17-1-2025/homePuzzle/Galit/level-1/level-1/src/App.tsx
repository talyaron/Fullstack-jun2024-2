import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import "./App.css";

interface Settings {
  WatchBtn: boolean;
  SupportBtn: boolean;
}

const Toggle: React.FC = () => {
  const [settings, setSettings] = useState<Settings>({
    WatchBtn: false,
    SupportBtn: false,
  });

  const handleToggle = (button: "WatchBtn" | "SupportBtn") => {
    setSettings((prevState) => ({
      WatchBtn: button === "WatchBtn" ? !prevState.WatchBtn : false,
      SupportBtn: button === "SupportBtn" ? !prevState.SupportBtn : false,
    }));
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={settings.WatchBtn}
            onChange={() => handleToggle("WatchBtn")}
            color={settings.WatchBtn ? "primary" : "default"}
          />
        }
        label="Watch Button"
      />
      <FormControlLabel
        control={
          <Switch
            checked={settings.SupportBtn}
            onChange={() => handleToggle("SupportBtn")}
            color={settings.SupportBtn ? "primary" : "default"}
          />
        }
        label="Support Button"
      />
    </FormGroup>
  );
};

export default Toggle;
