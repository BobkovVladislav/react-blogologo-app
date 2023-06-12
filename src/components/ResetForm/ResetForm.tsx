import { Modal } from "components";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes/routes";
import { useAppSelector, useAppDispatch } from "store/hooks/hooks";
import { getUserInfo } from "store/selectors/userSelector";
import { resetPassword } from "store/features/userSlice/userSlice";
import { validateEmail } from "utils/validateForm";
import { StyledResetForm, ResetLabel, ResetInput, ResetButton } from "./styles";

export interface SignInFormTypes {
  userEmail: string;
}

export const ResetForm = () => {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const { error } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate(ROUTE.SIGN_IN);
  };

  const handleCloseModal = () => {
    setIsActiveModal(false);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormTypes>();

  const onSubmit: SubmitHandler<SignInFormTypes> = (userEmail) => {
    dispatch(resetPassword(userEmail))
      .catch(() => setIsActiveModal(true))
      .then(() => setIsActiveModal(true))
      .then(() => reset());
  };

  return (
    <StyledResetForm onSubmit={handleSubmit(onSubmit)}>
      <ResetLabel>Email</ResetLabel>
      <ResetInput
        type="email"
        placeholder="Your email"
        {...register("userEmail", validateEmail())}
      />
      {errors.userEmail && <p>{errors.userEmail.message}</p>}
      <ResetButton type="submit">Reset password</ResetButton>
      {isActiveModal && error && <Modal message={error as string} handleClick={handleCloseModal} />}
      {isActiveModal && !error && <Modal message="Check your email" handleClick={handleBackHome} />}
    </StyledResetForm>
  );
};
