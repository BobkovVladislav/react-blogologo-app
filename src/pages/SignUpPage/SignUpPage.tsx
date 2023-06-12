import { SignUpForm } from "components";
import { ROUTE } from "routes/routes";
import { StyledWrapper } from "pages/SignInPage/styles";
import { SigUpTitle, StyledLink } from "./styles";

export const SignUpPage = () => {
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
      <StyledLink to={ROUTE.HOME}>Back to home</StyledLink>
      <SigUpTitle>Sign Up</SigUpTitle>
      <SignUpForm />
    </StyledWrapper>
  );
};
