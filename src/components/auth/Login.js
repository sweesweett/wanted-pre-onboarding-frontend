import React from "react";
import { login, validation } from "./func";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = React.useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = React.useState("");
  const [emailConfirmed, setEmailConfirmed] = React.useState(true);
  const [isConfirmed, setIsConfirmed] = React.useState(true);
  const onInput = (e, target) => {
    validation(
      target,
      e.target.value,
      setInput,
      setAlert,
      setEmailConfirmed,
      emailConfirmed,
      setIsConfirmed,
      input
    );
  };
  const onLogin = (e) => {
    e.preventDefault();
    login(input, navigate);
  };
  return (
    <div className="auth">
      <h2>로그인</h2>
      <form onSubmit={onLogin}>
        <label htmlFor="email">ID</label>
        <input
          type="email"
          name="email"
          onChange={(e) => onInput(e, "email")}
          placeholder="example@email.com"
        />
        <label htmlFor="password">PW</label>
        <input
          type="password"
          name="password"
          onChange={(e) => onInput(e, "password")}
          placeholder="8자 이상"
        />
        <div className="alert">{alert}</div>
        <button className="login__btn" disabled={isConfirmed}>
          로그인
        </button>
      </form>
    </div>
  );
};
export default Login;
