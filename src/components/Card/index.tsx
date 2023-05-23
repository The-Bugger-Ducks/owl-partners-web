import { Container, InnerContainer, Title, Data, Label } from "./styles";

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
}

export default function Card({ gridArea, title, textInformation }: Props) {
  return (
    <Container gridArea={gridArea}>
      <Title>{title}</Title>

      {textInformation && (
        <InnerContainer>
          <Data>{textInformation.data}</Data>
          <Label>{textInformation.label}</Label>
        </InnerContainer>
      )}
    </Container>
  );
}
