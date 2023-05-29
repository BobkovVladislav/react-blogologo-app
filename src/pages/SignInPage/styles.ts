import { motion } from "framer-motion";
import { StyledLink } from "../../components/SingInForm/styles";
import styled from "styled-components";
import { H1, H2 } from "../../ui";
import { Media } from "../../ui/media";

const StyledWrapper = styled(motion.div)`
  display: grid;
  place-items: center start;
  ${Media.LG} {
    max-width: 568px;
    width: 100%;
  }
`;

const SLink = styled(StyledLink)`
  text-align: start;
  ${Media.MD} {
    font-size: 14px;
  }
`;

const SigInTitle = styled.h1`
  ${H1}
  padding: 32px 0 56px 0;
  ${Media.LG} {
    ${H2}
    padding: 32px 0 32px 0;
  }
`;

export { StyledWrapper, StyledLink, SigInTitle, SLink };
