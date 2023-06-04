import { useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Navbar,
  NavbarLink,
  Logo,
  NavbarSpan,
  NavbarImage,
} from "./styles";
import logo from "../../assets/logo.svg";
import dashboard from "../../assets/dashboard.png";
import exit from "../../assets/exit.png";
import StorageController from "../../utils/controllers/session";

export default function Sidebar() {
  const navigate = useNavigate();

  async function handleLogoutUser() {
    await StorageController.clearRecords();
    navigate("/");
  }

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>

      <NavbarLink to="/dashboard">
        <NavbarImage src={dashboard} alt="dashboard" />
        Dashboard
      </NavbarLink>
      <NavbarSpan onClick={handleLogoutUser}>
        <NavbarImage src={exit} alt="sair" />
        Sair
      </NavbarSpan>
    </Container>
  );
}
