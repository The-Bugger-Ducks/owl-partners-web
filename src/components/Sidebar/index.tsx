import { useNavigate } from "react-router-dom";
import exit from "../../assets/exit.png";
import logo from "../../assets/logo.svg";
import StorageController from "../../utils/controllers/session";
import { Container, Header, Logo, NavbarImage, NavbarSpan } from "./styles";

export default function Sidebar() {
  const navigate = useNavigate();

  function handleLogoutUser() {
    StorageController.clearRecords();
    navigate("/");
  }

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>

      <NavbarSpan onClick={handleLogoutUser}>
        <NavbarImage src={exit} alt="sair" />
        Sair
      </NavbarSpan>
    </Container>
  );
}
