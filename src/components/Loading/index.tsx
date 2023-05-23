import { LoadingContainer } from "./styles";

interface Props {
  height?: string;
  width?: string;
}

export default function Loading({ height, width }: Props) {
  return <LoadingContainer height={height} width={width} />;
}
