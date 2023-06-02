import styled from "styled-components";

interface Props {
  height?: string;
  width?: string;
}

export const LoadingContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;

  :before {
    content: "";
    display: block;
    height: ${(props) => props.height ?? "20px"};
    width: ${(props) => props.width ?? "20px"};
    -webkit-animation: spin 0.9s infinite linear;
    animation: spin 0.9s infinite linear;
    border: 4px #fcfcfc solid;
    border-left-color: #ef4444;
    border-radius: 100%;
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
