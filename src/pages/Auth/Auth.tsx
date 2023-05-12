import { FormEvent, useRef, useState } from "react";

export default function Auth() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  async function authenticate(event: FormEvent) {
    event.preventDefault();

    const payload = {
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    };

    console.log(payload);
  }

  return (
    <main>
      <section className="login-welcome">
        <h2>Bem-vindo(a) ao</h2>
        <h1>
          OLW<span>PARTNERS</span>
        </h1>
      </section>
      <form className="login-form" onSubmit={authenticate}>
        <section className="login-data">
          <label htmlFor="email">E-mail</label>
          <input
            ref={emailRef}
            placeholder="Seu e-mail de acesso"
            name="email"
            type="email"
            required
          />
          <label htmlFor="password">Senha</label>
          <input
            ref={passwordRef}
            placeholder="Informe sua senha"
            name="password"
            type="password"
            required
          />
        </section>
        {/* <span id="recover-password" onClick={() => alertForgotPassword()}>
          Esqueceu a senha?
        </span> */}
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}
