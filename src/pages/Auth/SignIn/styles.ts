import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  background: #FAFAFA;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2.5rem;

  .login-welcome {
    text-align: center;

    h4 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5rem;
    }

    h1 {
      font-size: 2rem;
      font-weight: 700;
      line-height: 2.4rem;

      span {
        font-weight: 100
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 24rem;
  gap: 2.5rem;

  @media screen and (max-width: 1000px) {
    width: auto;
   }

   p {
    font-size: 0.875rem;
    color: #EF4444;
   }
`;

export const ContentForm = styled.section`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  *:nth-child(3) {
    margin-top: 2rem;
  }

  label {
    font-size: 0.875rem;
  }

  input {
    font-size: 0.875rem;
    color: #666666;
    caret-color: #EF4444;

    background: #FAFAFA;

    ::placeholder, :-ms-input-placeholder, ::-ms-input-placeholder {
      color: #999999;
    }
  }
`;

export const Input = styled.input`
  height: 3.5rem;
  border-radius: 0.5rem;
  padding: 0px 1rem 0px 1rem;

  background: #FAFAFA;
  border: 1px solid #CCCCCC;

  :focus {
    outline: none;
    border:1px solid #666666;
  }
`;

export const PasswordInputContainer = styled.div<{
  inFocus: boolean
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  height: 3.5rem;
  border-radius: 0.5rem;
  padding: 0px 1rem 0px 1rem;

  border: 1px solid;

  border-color: ${({ inFocus }) => inFocus ? "#666666" : "#cccccc"};
`;

export const InputPassword = styled.input`
  height: 100%;

  width: 95%;
  border: none;

  :focus {
    outline: none;
  }
`;

export const IconButton = styled.button`
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
`;

export const Button = styled.button`
  height: 2.75rem;
  width: 100%;
  border-radius: 3rem;

  background: ${props => props.disabled ? "#CCCCCC":"#EF4444"};
  color: #FFFFFF;

  font-weight: 400;
  font-size: 1rem;

  :hover {
    cursor: ${props => props.disabled ? "auto":"pointer"}
  }
`;

