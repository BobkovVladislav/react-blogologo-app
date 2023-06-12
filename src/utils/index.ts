import { FirebaseErrorCode } from "./firebaseErrors";
import { FirebaseErrorMessage } from "./firebaseErrors";
import { getFBErrorMessage } from "./firebaseErrors";
import { validateName } from "./validateForm";
import { validateEmail } from "./validateForm";
import { validatePassword } from "./validateForm";
import { setNotFoundImg } from "./setNotFoundImg";

export type { FirebaseErrorCode, FirebaseErrorMessage };
export { getFBErrorMessage, validateName, validateEmail, validatePassword, setNotFoundImg };
