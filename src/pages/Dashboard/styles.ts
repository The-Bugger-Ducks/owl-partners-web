import styled from "styled-components";
import dashboard from "../../assets/dashboard.png";

export const Container = styled.div`
  background: #f4f4f4;
  height: 100vh;
  margin-left: 8rem;
  padding: 2.25rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  color: #333333;

  &:before {
    content: "";
    background: url("https://raw.githubusercontent.com/The-Bugger-Ducks/owl-partners-web/35e3272c5760a391bb8eaa3b3cab644d558aef9b/src/assets/icons/big-menu.svg")
      no-repeat;
    width: 2rem;
    height: 2rem;
    float: left;
    margin: 0 8px 0 0;
  }
`;
