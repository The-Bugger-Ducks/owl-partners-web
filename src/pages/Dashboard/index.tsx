import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import dashboardRequests from "../../utils/requests/dashboard";
import { default as DashboardInterface } from "../../utils/interfaces/dashboard";
import { Container, Description, Header, Title, ReloadButton } from "./styles";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardInterface>();

  useEffect(() => {
    getDashboardData();
  }, []);

  const refreshPage = () => {
    getDashboardData();
  };

  const getDashboardData = async () => {
    const data = await dashboardRequests.get();
    if (data !== "error") setDashboardData(data);
    console.log(data);
  };

  return (
    <>
      <Sidebar />

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
