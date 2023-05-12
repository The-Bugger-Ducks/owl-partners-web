import styled from "styled-components";
import { Link } from "react-router-dom";

interface NavbarLinkProps {
  isActive?: boolean;
}

export const Container = styled.aside`
  background: #ffffff;
  width: 8rem;
  height: 91%;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  z-index: 1000 !important;
`;

export const Navbar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLink = styled(Link)<NavbarLinkProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 500;
  font-size: 12px;
  color: ${({ isActive }) => (isActive ? "#EF4444" : "#666666")};
  text-decoration: none;

  &:hover {
    color: #ef4444;
  }
`;

export const NavbarSpan = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  color: #666666;
  text-decoration: none;

  &:hover {
    color: #ef4444;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 4.0625rem;
  height: 4.0625rem;
`;

export const NavbarImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
`;
