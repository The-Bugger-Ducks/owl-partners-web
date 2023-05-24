import { Container, InnerContainer, Title, Data, Label } from "./styles";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  gridArea:
    | "totalActivePartners"
    | "top10MostMembers"
    | "partnersPerStatus"
    | "partnersPerState"
    | "partnerPerClassification"
    | "nextMeeting";
  title: string;
  textInformation?: { label: string; data: string };
  chartInformation?: { name: string; total: number }[];
}

export default function Card({
  gridArea,
  title,
  textInformation,
  chartInformation,
}: Props) {
  return (
    <Container gridArea={gridArea}>
      <Title>{title}</Title>

      {textInformation && (
        <InnerContainer>
          <Data>{textInformation.data}</Data>
          <Label>{textInformation.label}</Label>
        </InnerContainer>
      )}

      {chartInformation && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={chartInformation}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total" name="Quantidade" fill="#ec7575" />
            <Legend />
          </BarChart>
        </ResponsiveContainer>
      )}
    </Container>
  );
}
