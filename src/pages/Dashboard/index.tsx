import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import dashboardRequests from "../../utils/requests/dashboard";
import { default as DashboardInterface } from "../../utils/interfaces/dashboard";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../components/Loading";
import { Container, Description, Header, Title, ReloadButton } from "./styles";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardInterface>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dashboardSuccessToast = () =>
    toast.success("Dashboard carregada com sucesso!");

  const dashboardErrorToast = () => toast.error("Erro ao carregar dashboard.");

  useEffect(() => {
    getDashboardData();
  }, []);

  const refreshPage = async () => {
    await getDashboardData();
  };

  const getDashboardData = async () => {
    setIsLoading(true);

    const data = await dashboardRequests.get();

    setIsLoading(false);

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

        {isLoading ? <Loading width="100px" height="100px" /> : ""}
      </Container>
    </>
  );
}
