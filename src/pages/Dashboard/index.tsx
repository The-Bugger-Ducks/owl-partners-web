import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Container, Header, Title } from "./styles";
import dashboardRequests from "../../utils/requests/dashboard";
import { default as DashboardInterface } from "../../utils/interfaces/dashboard";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardInterface>();

  useEffect(() => {
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    const data = await dashboardRequests.get();
    if (data !== "error") setDashboardData(data);
  };

  return (
    <>
      <Sidebar />

      <Container>
        <Header>
          <Title>Dashboard: Análise de parcerias em desenvolvimento</Title>
        </Header>
      </Container>
    </>
  );
}
