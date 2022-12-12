import React from "react";
import Auth from "../components/auth/Auth";
import { Navigate } from "react-router-dom";
const Main = () => {
  const [tab, setTab] = React.useState("login");
  if (localStorage.getItem("access_token") !== null) {
    return <Navigate to="/todo" />;
  }
  return (
    <div className="main">
      <div className="main__btns">
        <button
          className={tab === "login" ? "active" : undefined}
          onClick={() => setTab("login")}
        >
          로그인
        </button>
        <button
          className={tab === "signup" ? "active" : undefined}
          onClick={() => setTab("signup")}
        >
          회원가입
        </button>
      </div>
      <Auth tab={tab} setTab={setTab} />
    </div>
  );
};
export default Main;
