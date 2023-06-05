import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Container,
  Data,
  Description,
  InnerContainer,
  Label,
  Title,
} from "./styles";

interface Props {
  gridArea:
    | "totalActivePartners"
    | "top10MostMembers"
    | "partnersPerStatus"
    | "partnersPerState"
    | "partnerPerClassification"
    | "nextMeeting";
  title: string;
  textInformation?: { label: string; data: string; description?: string };
  chartInformation?: { name: string; total: number }[];
}

export default function Card({
  gridArea,
  title,
  textInformation,
  chartInformation,
}: Props) {
  const tickFormatter = (value: string, index: number) => {
    const windowWidth = window.innerWidth;
    const limit = windowWidth <= 1440 ? 3 : 7;
    if (value.length <= 5) return value;
    return `${value.substring(0, limit)}...`;
  };

  return (
    <Container gridArea={gridArea}>
      <Title>{title}</Title>

      {textInformation && (
        <InnerContainer>
          <Data>{textInformation.data}</Data>
          <Label>{textInformation.label}</Label>
          <Description>{textInformation.description}</Description>
        </InnerContainer>
      )}

      {chartInformation && (
        <InnerContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={chartInformation}
              margin={{ top: 32, right: 16, left: 0, bottom: 16 }}
            >
              <CartesianGrid strokeDasharray="3" />
              <XAxis dataKey="name" tickFormatter={tickFormatter} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total" name="Quantidade" fill="#ec7575" />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
        </InnerContainer>
      )}
    </Container>
  );
}
