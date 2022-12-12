import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const doLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("access_token");
      navigate("/");
    } else {
      return;
    }
  };
  return (
    <header>
      <div className="headerContainer">
        <h2>투 두 리스트!</h2>
        {localStorage.getItem("access_token") !== null && (
          <span onClick={doLogout}>Logout</span>
        )}
      </div>
    </header>
  );
};
export default Header;
