import Login from "./Login";
import Signup from "./Signup";

const Auth = ({ tab, setTab }) => {
  switch (tab) {
    case "login":
      return <Login />;
    default:
      return <Signup setTab={setTab} />;
  }
};
export default Auth;
