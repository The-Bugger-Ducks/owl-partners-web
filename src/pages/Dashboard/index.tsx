import moment from "moment";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import Sidebar from "../../components/Sidebar";
import formatLabel from "../../utils/handlers/formatLabel";
import { default as DashboardInterface } from "../../utils/interfaces/dashboard";
import dashboardRequests from "../../utils/requests/dashboard";
import {
  Cards,
  Container,
  Description,
  Header,
  ReloadButton,
  Title,
} from "./styles";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardInterface>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getDashboardData();
  }, []);

  async function getDashboardData() {
    setIsLoading(true);
    const data = await dashboardRequests.get();

    if (data === "error") {
      toast.error("Erro ao carregar dashboard.");
      return;
    }

    setDashboardData(data);
    setIsLoading(false);
    toast.success("Dashboard carregada com sucesso!");
  }

  return (
    <>
      <Sidebar />

      <Toaster />

      <Container>
        <Header>
          <ReloadButton onClick={() => getDashboardData()}>
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
              chartInformation={dashboardData?.top10MostMembers.reduce(
                (prev: any, curr: any) => {
                  return [
                    ...prev,
                    {
                      name: curr.name,
                      total: curr.memberNumber ?? 0,
                    },
                  ];
                },
                []
              )}
            />

            <Card
              gridArea="partnersPerStatus"
              title="Parcerias por status"
              chartInformation={dashboardData?.partnersPerStatus.reduce(
                (prev: any, curr: any) => {
                  return [
                    ...prev,
                    {
                      name: formatLabel(curr.status),
                      total: curr._count,
                    },
                  ];
                },
                []
              )}
            />

            <Card
              gridArea="partnersPerState"
              title="Parcerias por estado"
              chartInformation={dashboardData?.partnersPerState.reduce(
                (prev: any, curr: any) => {
                  return [
                    ...prev,
                    {
                      name: curr.state,
                      total: curr._count,
                    },
                  ];
                },
                []
              )}
            />

            <Card
              gridArea="partnerPerClassification"
              title="Parcerias por classificação"
              chartInformation={dashboardData?.partnerPerClassification.reduce(
                (prev: any, curr: any) => {
                  return [
                    ...prev,
                    {
                      name: formatLabel(curr.classification),
                      total: curr._count,
                    },
                  ];
                },
                []
              )}
            />

            <Card
              gridArea="nextMeeting"
              title="Próxima reunião agendada"
              textInformation={{
                label: dashboardData
                  ? `${moment(
                      new Date(dashboardData.nextMeeting.meetingDateTime)
                    ).format("DD/MM/YYYY, HH:mm")}`
                  : "Informação não identificada",
                data: dashboardData
                  ? `${dashboardData.nextMeeting.title}`
                  : "---",
                description: dashboardData
                  ? `Parceria: ${dashboardData.nextMeeting.Partner.name}`
                  : "---",
              }}
            />
          </Cards>
        )}
      </Container>
    </>
  );
}
