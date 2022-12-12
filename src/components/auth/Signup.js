import React from "react";
import { signup } from "./func";

const Signup = ({ setTab }) => {
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
