import styled from "styled-components";

interface Props {
  gridArea: string;
}

export const Container = styled.article<Props>`
  grid-area: ${(props) => props.gridArea};
  width: 100%;
  height: 22rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 8px;
  background-color: transparent;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 4px;
  gap: 0.25rem;
`;

export const Title = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 100;
  font-size: 18px;
  color: #333333;
`;

export const Data = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: #333333;
`;

export const Label = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #666666;
`;
