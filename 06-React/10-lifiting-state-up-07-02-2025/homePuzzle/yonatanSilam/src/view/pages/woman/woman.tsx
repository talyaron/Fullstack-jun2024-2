import styles from "./Woman.module.scss";
import Input from "../../components/input/Input";
import { Link } from "react-router";
import { calcFatPercent, FatCalcPayload } from "../../../redux/calc/calcSlice";
import { FormEvent } from "react";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";

const woman = () => {
    const dispatch = useDispatch();
    const fatPercent1 = useSelector((state: RootState) => state.calc.fatPercent1);
    const fatPercent2 = useSelector((state: RootState) => state.calc.fatPercent2);
    const fatPercent3 = useSelector((state: RootState) => state.calc.fatPercent3);
  
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const age = Number(form.get("גיל"));
      const weight = Number(form.get("משקל"));
      const bone = Number(form.get("עצם"));
      const abdomen = Number(form.get("בטן"));
      const chest = Number(form.get("חזה"));
      const back = Number(form.get("גב"));
      const leg = Number(form.get("רגל"));
      const frontArm = Number(form.get("יד קדמית"));
      const backArm = Number(form.get("יד אחורית"));
      const waistCircumference = Number(form.get("היקף בטן"));
      const armCircumference = Number(form.get("היקף יד"));
  
      const user: FatCalcPayload = {
        gender: "woman",
        age: age,
        weight: weight,
        bone: bone,
        abdomen: abdomen,
        chest: chest,
        back: back,
        leg: leg,
        frontArm: frontArm,
        backArm: backArm,
        waistCircumference: waistCircumference,
        armCircumference: armCircumference,
      };
      dispatch(calcFatPercent(user));
    }

  return (
    <div className={styles.column}>
      <div className={styles.container}>
        <h1>woman</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.row}>
            <Input placeholder={"גיל"} />
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <Input placeholder={"משקל"} />
              <Input placeholder={"עצם"} />
              <Input placeholder={"בטן"} />
              <Input placeholder={"גב"} />
            </div>
            <div className={styles.column}>
              <Input placeholder={"רגל"} />
              <Input placeholder={"יד קדמית"} />
              <Input placeholder={"יד אחורית"} />
              <Input placeholder={"היקף בטן"} />
            </div>
          </div>
          <button className={styles.btnSecondary} type="submit">
            calculate
          </button>
        </form>
        <h2>אחוז שומן ראשון:  {fatPercent1}</h2>
        <h2>אחוז שומן שני:  {fatPercent2}</h2>
        <h2>אחוז שומן שלישי:  {fatPercent3}</h2>
      </div>

      <Link className={styles.btnSecondary} to="/">
        back
      </Link>
    </div>
  );
};

export default woman;
