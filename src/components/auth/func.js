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

const validation = (
  target,
  value,
  setInput,
  setAlert,
  setEmailConfirmed,
  emailConfirmed,
  setIsConfirmed,
  input
) => {
  setInput({ ...input, [target]: value });
  if (target === "email" && value.includes("@")) {
    setAlert("");
    setEmailConfirmed(true);
  } else if (target === "email" && !value.includes("@")) {
    setAlert("이메일 형식에 맞게 입력해 주세요.");
    setEmailConfirmed(false);
  }
  if (target === "password") {
    if (value.length < 8) {
      setAlert("비밀번호는 8자 이상이여야 합니다.");
    } else {
      if (emailConfirmed) {
        setAlert("");
        setIsConfirmed(false);
      }
    }
  }
};
export { login, signup, validation };
