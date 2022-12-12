import { postSignup, postSignin } from "../../apis/apis";

const login = async (datas, navigate) => {
  let dd = await postSignin(datas);
  if (dd < 300) {
    navigate("/todo");
  } else {
    alert("로그인에 실패했습니다");
  }
};
const signup = async (datas, setTab) => {
  let { status } = await postSignup(datas);
  if (status < 300) {
    alert("회원가입에 성공했습니다.");
    setTab("login");
  } else {
    alert("회원가입에 실패했습니다");
  }
};
export { login, signup };
