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
  fatPercent3: 0
};

export const calcSlice = createSlice({
  name: "calc",
  initialState,
  reducers: {
    calcFatPercent: (state, action: PayloadAction<FatCalcPayload>) => {
      const { gender,chest,abdomen,leg, age, frontArm, backArm, back, bone } = action.payload;
      const sumSkinFolds1 = frontArm + backArm + back + bone;

      let BD1: number;
      let BD2: number;
      let BD3: number;
      let a: number, b: number;

      if (gender === "man") {
          if (age >= 17 && age <= 19) { a = 1.1620; b = 0.0630; }
          else if (age >= 20 && age <= 29) { a = 1.1631; b = 0.0632; }
          else if (age >= 30 && age <= 39) { a = 1.1422; b = 0.0544; }
          else if (age >= 40 && age <= 49) { a = 1.1620; b = 0.0700; }
          else { a = 1.1715; b = 0.0779; }
      } else {
          if (age >= 17 && age <= 19) { a = 1.1549; b = 0.0678; }
          else if (age >= 20 && age <= 29) { a = 1.1599; b = 0.0717; }
          else if (age >= 30 && age <= 39) { a = 1.1423; b = 0.0632; }
          else if (age >= 40 && age <= 49) { a = 1.1333; b = 0.0612; }
          else { a = 1.1339; b = 0.0645; }
      }
       BD1 = a - (b * Math.log10(sumSkinFolds1));

    
    
    //    let c: number, d: number;

    //    if (gender === "male") {
    //        c = 1.280;
    //        d = 0.137;
    //    } else {
    //        c = 1.242;
    //        d = 0.110;
    //    }
    //      const sumSkinFolds2 = abdomen + leg + backArm + bone; // Same for both men and women
    //     BD2 = a - (b * Math.log10(sumSkinFolds2));


    //   let sumSkinFolds3 = gender === 'man' 
    //   ? (chest + abdomen + leg)  // Men: Chest, Abdomen, Thigh
    //   : (backArm + bone + back); // Women: Triceps, Suprailiac, Thigh


    //     if (gender === "male") {
    //         BD3 = 1.10938 - (0.0008267 * sumSkinFolds3) + (0.0000016 * Math.pow(sumSkinFolds3, 2)) - (0.0002574 * age);
    //     } else {
    //         BD3 = 1.0994921 - (0.0009929 * sumSkinFolds3) + (0.0000023 * Math.pow(sumSkinFolds3, 2)) - (0.0001392 * age);
    //     }
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
      

      const sumSkinFolds2 = abdomen + leg + backArm + bone; // Same for both men and women

      if (gender == 'man') {
        BD2 = 1.191 - (0.00231 * sumSkinFolds2) + (0.00000333 * sumSkinFolds2 ** 2) - (0.00005664 * age);
      } else {
        BD2 = 1.12397 - (0.0005682 * sumSkinFolds2) + (0.00000117 * sumSkinFolds2 ** 2) - (0.0002182 * age);
      }


      let sumSkinFolds3 = gender === 'man' 
      ? (chest + abdomen + leg)  // Men: Chest, Abdomen, Thigh
      : (backArm + bone + back); // Women: Triceps, Suprailiac, Thigh

      if (gender === 'man') {
        BD3 = 1.10938 - (0.0008267 * sumSkinFolds3) + (0.0000016 * sumSkinFolds3 ** 2) - (0.0002574 * age);
      } else {
        BD3 = 1.0994921 - (0.0009929 * sumSkinFolds3) + (0.0000023 * sumSkinFolds3 ** 2) - (0.0001392 * age);
      }

      
    //   // Calculate Body Fat Percentage using Siri Equation
      const fatPercentage1 = 495 / BD1 - 450;
      const fatPercentage2 = 495 / BD2 - 450;
      const fatPercentage3 = 495 / BD3 - 450;


    //   // Add 2.5% fat for every 10 years of age
    //   let ageAdjustment = 0;
    //   if (age >= 50) {
    //     ageAdjustment = 7;
    //   } else if (age >= 40) {
    //     ageAdjustment = 5;
    //   } else if (age >= 30) {
    //     ageAdjustment = 2.5;
    //   }

    //   const fatPercentEnd = fatPercentage1 + ageAdjustment;
      state.fatPercent1 = parseFloat(fatPercentage1.toFixed(2));
      state.fatPercent2 = parseFloat(fatPercentage2.toFixed(2));
      state.fatPercent3 = parseFloat(fatPercentage3.toFixed(2));
    },
  },
});

export const { calcFatPercent } = calcSlice.actions;
export default calcSlice.reducer;
