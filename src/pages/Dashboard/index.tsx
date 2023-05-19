import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { Container } from "./styles";
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
      <Container>Olá, mundo 🌏 Dashboard</Container>
    </>
  );
}
