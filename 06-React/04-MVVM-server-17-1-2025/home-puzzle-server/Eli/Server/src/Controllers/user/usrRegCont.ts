import { error } from "console";
import { infoValidation } from "../../Model/validatorModel";

export async function registerUser(req: any, res: any) {
  try {
    const { userName, email, password, rePassword } = req.body;

    if (
        !userName ||
        !email ||
        !password ||
        !rePassword
      ) {
        throw new Error("wtf")
      }

    const invalidUsername = infoValidation.isNameValid(userName);
    const invalidEmail = await infoValidation.isEmailValid(email);
    const invalidPassword = infoValidation.isPasswordValid(password);
    const invalidRePassword = infoValidation.isRePasswordValid(
      rePassword,
      password
    );
    console.log(
        invalidUsername,
        invalidEmail,
        invalidPassword,
        invalidRePassword
      );
    
    if (
      !invalidUsername &&
      !invalidEmail &&
      !invalidPassword &&
      !invalidRePassword
    ) {
      console.log("OK!");

      return res.json({ message: "works !" });
    }else
    throw new Error("not valid")
    res.json({ message: "nothing for you" });

    console.log(
      invalidUsername,
      invalidEmail,
      invalidPassword,
      invalidRePassword
    );
  } 
    catch (error: any) {
        console.error(error);
        return res.status(500).send({ error: error.message });
  }
}
