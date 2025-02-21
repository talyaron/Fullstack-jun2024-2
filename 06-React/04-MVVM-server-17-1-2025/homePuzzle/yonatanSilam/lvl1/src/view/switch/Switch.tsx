import { useSwitchVM } from "./SwitchVM";
import style from "./Switch.module.scss";

const Switch = () => {
  try {
    const { s, setSwitch } = useSwitchVM();

    if (!s) throw new Error("s2 not find");

    function changeSwitch(index: number): void {
      const finalA = s.map((sw, i) => {
        if (i !== index) {
          return { ...sw, on: false };
        } else {
          return { ...sw, on: !sw.on };
        }
      });

      setSwitch(finalA);
    }

    return (
      <div>
        <div>
          {s.map((sw, index) => (
            <div
              key={sw.id}
              className={`${style.borderSwitch}`}
              onClick={() => changeSwitch(index)}
            >
              <div
                className={`${style.toggle}  ${sw.on ? style.on : style.off} `}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
};
export default Switch;
