import { AuthGoogleRepository } from "../../../Data/repositories/AuthGoogleRepository";

const { loginWithGoogle } = new AuthGoogleRepository();

export const LoginGoogleUseCase = async (setLoad: any) => {
  const res = await loginWithGoogle(setLoad);
  return res;
};
