import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui";
import { Media } from "../../ui/media";
import { S1 } from "../../ui/typography";

const TabsBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${Color.WHITE_HEADER};
  ${Media.MD} {
    justify-content: center;
  }
`;

const TabButton = styled(NavLink)<{ $isActive: boolean }>`
  ${S1};
  padding: 0 40px 15px 40px;
  border-bottom: ${({ $isActive }) =>
    $isActive ? `2px solid ${Color.PRIMARY}` : "transparent"};
  cursor: pointer;
  :hover {
    color: ${Color.LIGHT};
  }
  ${Media.MD} {
    width: 50%;
    text-align: center;
  }
`;

export { TabsBlock, TabButton };
