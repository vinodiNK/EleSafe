// utils/authApi.ts
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

type LoginSuccess = { success: true; role: string };
type LoginFailure = { success: false; error: string };
export type LoginResult = LoginSuccess | LoginFailure;

export const loginWithRole = async (
  email: string,
  password: string
): Promise<LoginResult> => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (!userDoc.exists()) throw new Error("User role not found in Firestore");

    const { role } = userDoc.data();
    return { success: true, role };
  } catch (err: unknown) {
    let message = "Unknown error occurred";

    if (err instanceof FirebaseError) {
      message = err.message;
    } else if (err instanceof Error) {
      message = err.message;
    } else {
      message = String(err);
    }

    return { success: false, error: message };
  }
};
