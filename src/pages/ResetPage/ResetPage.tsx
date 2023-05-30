import { ResetForm } from "../../components/ResetForm/ResetForm";
import { StyledWrapper } from "../SignInPage/styles";
import { ROUTE } from "../../routes/routes";
import { ResetPageTitle, SLink } from "./styles";

export const ResetPage = () => {
  return (
    <StyledWrapper
      initial={{ x: -1920 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
      }}
    >
      <SLink to={ROUTE.HOME}>Back to home</SLink>
      <ResetPageTitle>Reset Password</ResetPageTitle>
      <ResetForm />
    </StyledWrapper>
  );
};
