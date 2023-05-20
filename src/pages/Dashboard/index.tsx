import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import dashboardRequests from "../../utils/requests/dashboard";
import { default as DashboardInterface } from "../../utils/interfaces/dashboard";
import { Container, Description, Header, Title, ReloadButton } from "./styles";
import toast, { Toaster } from "react-hot-toast";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardInterface>();

  const dashboardSuccessToast = () =>
    toast.success("Dashboard carregada com sucesso!");

  const dashboardErrorToast = () =>
    toast.error("Erro ao carregar dados da dashboard.");

  useEffect(() => {
    getDashboardData();
  }, []);

  const refreshPage = async () => {
    await getDashboardData();
  };

  const getDashboardData = async () => {
    const data = await dashboardRequests.get();

    if (data === "error") {
      dashboardErrorToast();
      return;
    }

    setDashboardData(data);
    dashboardSuccessToast();
  };

  return (
    <>
      <Sidebar />

      <Toaster />

      <Container>
        <Header>
          <ReloadButton onClick={refreshPage}>
            Recarregar dashboard
          </ReloadButton>

          <Title>Dashboard: Análise de parcerias em desenvolvimento</Title>

          <Description>
            Análises de parcerias em desenvolvimento cadastradas através da
            aplicação mobile Owl Partners.
          </Description>
        </Header>
      </Container>
    </>
  );
}
