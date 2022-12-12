import React from "react";
import { login } from "./func";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = React.useState({
    email: "",
    password: ""
  });
  const [alert, setAlert] = React.useState("");
  const [EmailConfirmed, setEmailConfirmed] = React.useState(true);
  const [isConfirmed, setIsConfirmed] = React.useState(true);
  const onInput = (e, target) => {
    setInput({ ...input, [target]: e.target.value });
    if (target === "email" && e.target.value.includes("@")) {
      setAlert("");
      setEmailConfirmed(true);
    } else if (target === "email" && !e.target.value.includes("@")) {
      setAlert("이메일 형식에 맞게 입력해 주세요.");
      setEmailConfirmed(false);
    }
    if (target === "password") {
      if (e.target.value.length < 8) {
        setAlert("비밀번호는 8자 이상이여야 합니다.");
      } else {
        if (EmailConfirmed) {
          setAlert("");
          setIsConfirmed(false);
        }
      }
    }
  };
  const onLogin = (e) => {
    e.preventDefault();
    login(input, navigate);
  };
  return (
    <div className="auth">
      <h2>LOGIN</h2>
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
