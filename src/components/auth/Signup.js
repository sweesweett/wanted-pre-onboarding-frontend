import React from "react";
import { signup, validation } from "./func";

const Signup = ({ setTab }) => {
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
  const onSignup = (e) => {
    e.preventDefault();
    signup(input, setTab);
  };
  return (
    <div className="auth">
      <h2>회원가입</h2>
      <form onSubmit={onSignup}>
        <label htmlFor="email">ID</label>
        <input
          type="email"
          onChange={(e) => onInput(e, "email")}
          name="email"
          placeholder="example@email.com"
        />
        <label htmlFor="password">PW</label>
        <input
          type="password"
          onChange={(e) => onInput(e, "password")}
          name="password"
          placeholder="8자 이상"
        />
        <div className="alert">{alert}</div>
        <button className="signup__btn" disabled={isConfirmed}>
          회원가입
        </button>
      </form>
    </div>
  );
};
export default Signup;
