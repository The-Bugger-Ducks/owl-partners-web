import styled from "styled-components";

export const LoadingContainer = styled.div`
  :before {
    content: "";
    display: block;
    height: 20px;
    width: 20px;
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
