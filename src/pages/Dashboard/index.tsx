import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import dashboardRequests from "../../utils/requests/dashboard";
import { default as DashboardInterface } from "../../utils/interfaces/dashboard";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../components/Loading";
import Card from "../../components/Card";
import {
  Container,
  Description,
  Header,
  Title,
  ReloadButton,
  Cards,
} from "./styles";
import moment from "moment";

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

    console.log(data);
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

        {isLoading ? (
          <Loading width="100px" height="100px" />
        ) : (
          <Cards>
            <Card
              gridArea="totalActivePartners"
              title="Total de parcerias em desenvolvimento"
              textInformation={{
                label: "Parcerias em desenvolvimento",
                data: dashboardData
                  ? `${dashboardData.totalActivePartners}`
                  : "Informação não identificada",
              }}
            />

            <Card
              gridArea="top10MostMembers"
              title="TOP 10 Parcerias com maior quantidade de membros"
              chartInformation={
                dashboardData
                  ? dashboardData.top10MostMembers.reduce(
                      (prev: any, curr: any) => {
                        return [
                          ...prev,
                          { name: curr.name, total: curr.memberNumber ?? 0 },
                        ];
                      },
                      []
                    )
                  : undefined
              }
            />

            <Card
              gridArea="partnersPerStatus"
              title="Parcerias por status"
              chartInformation={
                dashboardData
                  ? dashboardData.partnersPerStatus.reduce(
                      (prev: any, curr: any) => {
                        return [
                          ...prev,
                          { name: curr.status, total: curr._count },
                        ];
                      },
                      []
                    )
                  : undefined
              }
            />

            <Card
              gridArea="partnersPerState"
              title="Parcerias por estado"
              chartInformation={
                dashboardData
                  ? dashboardData.partnersPerState.reduce(
                      (prev: any, curr: any) => {
                        return [
                          ...prev,
                          { name: curr.state, total: curr._count },
                        ];
                      },
                      []
                    )
                  : undefined
              }
            />

            <Card
              gridArea="partnerPerClassification"
              title="Parcerias por classificação"
              chartInformation={
                dashboardData
                  ? dashboardData.partnerPerClassification.reduce(
                      (prev: any, curr: any) => {
                        return [
                          ...prev,
                          { name: curr.classification, total: curr._count },
                        ];
                      },
                      []
                    )
                  : undefined
              }
            />

            <Card
              gridArea="nextMeeting"
              title="Próxima reunião agendada"
              textInformation={{
                label: dashboardData
                  ? `${moment(
                      new Date(dashboardData.nextMeeting.createdAt)
                    ).format("DD/MM/YYYY, HH:mm")}`
                  : "Informação não identificada",
                data: dashboardData
                  ? `${dashboardData.nextMeeting.title}`
                  : "---",
              }}
            />
          </Cards>
        )}
      </Container>
    </>
  );
}
