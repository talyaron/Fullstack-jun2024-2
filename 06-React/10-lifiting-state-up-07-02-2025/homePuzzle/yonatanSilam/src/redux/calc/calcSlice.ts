import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FatCalcPayload {
  gender: string;
  age: number;
  weight: number;
  bone: number;
  abdomen: number;
  chest: number;
  back: number;
  leg: number;
  frontArm: number;
  backArm: number;
  waistCircumference: number;
  armCircumference: number;
}

export interface CalcState {
  fatPercent1: number;
  fatPercent2: number;
  fatPercent3: number;
}

const initialState: CalcState = {
  fatPercent1: 0,
  fatPercent2: 0,
  fatPercent3: 0,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    calcFatPercent: (state, action: PayloadAction<FatCalcPayload>) => {
      const {
        gender,
        chest,
        abdomen,
        leg,
        age,
        frontArm,
        backArm,
        back,
        bone,
      } = action.payload;
      const sumSkinFolds1 = frontArm + backArm + back + bone;

      let BD1: number;
      let BD2: number;
      let BD3: number;
      let a: number, b: number;

      if (gender === "man") {
        if (age >= 17 && age <= 19) {
          a = 1.162;
          b = 0.063;
        } else if (age >= 20 && age <= 29) {
          a = 1.1631;
          b = 0.0632;
        } else if (age >= 30 && age <= 39) {
          a = 1.1422;
          b = 0.0544;
        } else if (age >= 40 && age <= 49) {
          a = 1.162;
          b = 0.07;
        } else {
          a = 1.1715;
          b = 0.0779;
        }
      } else {
        if (age >= 17 && age <= 19) {
          a = 1.1549;
          b = 0.0678;
        } else if (age >= 20 && age <= 29) {
          a = 1.1599;
          b = 0.0717;
        } else if (age >= 30 && age <= 39) {
          a = 1.1423;
          b = 0.0632;
        } else if (age >= 40 && age <= 49) {
          a = 1.1333;
          b = 0.0612;
        } else {
          a = 1.1339;
          b = 0.0645;
        }
      }
      BD1 = a - b * Math.log10(sumSkinFolds1);

      if (gender === "man") {
        // Body Density formula for men
        BD1 = 1.1631 - 0.0632 * Math.log10(sumSkinFolds1);
      } else {
        // Body Density formula for women
        BD1 =
          1.097 -
          0.00046971 * sumSkinFolds1 +
          0.00000056 * sumSkinFolds1 ** 2 -
          0.00012828 * age;
      }

      // Calculate Body Density using Jackson and Pollock 3-Site formula

      const sumSkinfolds3 = chest + abdomen + leg;

      // Calculate body density based on gender

      if (gender === "man") {
        BD2 =
          1.10938 -
          0.0008267 * sumSkinfolds3 +
          0.0000016 * sumSkinfolds3 * sumSkinfolds3 -
          0.0002574 * age;
      } else {
        // female
        BD2 =
          1.0994921 -
          0.0009929 * sumSkinfolds3 +
          0.0000023 * sumSkinfolds3 * sumSkinfolds3 -
          0.0001392 * age;
      }
      // 4-Site formula

      const sumSkinfolds = abdomen + backArm + leg + bone;

      // Calculate body density based on gender
      let bodyDensity: number;

      if (gender === "man") {
        // Corrected formula for males
        bodyDensity =
          1.10938 -
          0.0008267 * sumSkinfolds +
          0.0000016 * sumSkinfolds * sumSkinfolds -
          0.0002574 * age;
      } else {
        // female
        // Corrected formula for females
        bodyDensity =
          1.0994921 -
          0.0009929 * sumSkinfolds +
          0.0000023 * sumSkinfolds * sumSkinfolds -
          0.0001392 * age;
      }

      //   // Calculate Body Fat Percentage using Siri Equation
      const fatPercentage1 = 495 / BD1 - 450;
      const fatPercentage2 = 495 / BD2 - 450;
      const fatPercentage3 = 495 / bodyDensity - 450;

      //   const fatPercentEnd = fatPercentage1 + ageAdjustment;
      state.fatPercent1 = parseFloat(fatPercentage1.toFixed(2));
      state.fatPercent2 = parseFloat(fatPercentage2.toFixed(2));
      state.fatPercent3 = parseFloat(fatPercentage3.toFixed(2));
    },
  },
});

export const { calcFatPercent } = calcSlice.actions;
export default calcSlice.reducer;
