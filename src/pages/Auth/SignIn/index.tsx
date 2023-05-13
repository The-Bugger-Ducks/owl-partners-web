import { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import authRequest from "../../../utils/requests/auth";

import StorageController from "../../../utils/controllers/session"

import { Button, Container, ContentForm, Form, IconButton, Input, InputPassword, PasswordInputContainer } from "./styles";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [inputPasswordFocused, setInputPasswordFocused] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    handleUserAuthentication();
  }, []);

  async function authenticate(event: FormEvent) {
    try {
      event.preventDefault();
      setMessage("")

      const payload = {
        email,
        password,
      };

      setLoading(true)
      await authRequest.authenticate(payload)
      goToApp()

    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message.toLocaleLowerCase()

        setMessage(errorMessage);
        emailRef.current!.focus();
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleUserAuthentication() {
    const token = await StorageController.getToken();

    if (token) goToApp();
  }

  function goToApp() {
    navigate("/dashboard");
  }

  return (
    <Container>
      <section className="login-welcome">
        <h4>Bem-vindo(a) ao</h4>
        <h1>
          OLW<span>PARTNERS</span>
        </h1>
      </section>
      <Form onSubmit={authenticate}>
        <ContentForm>
          <label htmlFor="email">E-mail</label>
          <Input
            ref={emailRef}
            placeholder="Seu e-mail de acesso"
            name="email"
            type="email"
            required
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <label htmlFor="password">Senha</label>
          <PasswordInputContainer inFocus={inputPasswordFocused}>
            <InputPassword
              placeholder="Informe sua senha"
              name="password"
              type={!visiblePassword ? "password": "text"}
              autoComplete="off"
              required
              onFocus={() => setInputPasswordFocused(true)}
              onBlur={() => setInputPasswordFocused(false)}
              onChange={e => setPassword(e.target.value)}
            />
            <IconButton
              type="button"
              onClick={() => setVisiblePassword(!visiblePassword)}
            >
              {visiblePassword ? "x" : "y"}
            </IconButton>
          </PasswordInputContainer>
          {message && <p>{message}</p>}
        </ContentForm>
        <Button type="submit" disabled={!email || !password}>Fazer Login</Button>
      </Form>
    </Container>
  );
}
