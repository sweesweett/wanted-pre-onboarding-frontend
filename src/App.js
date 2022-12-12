import "./scss/index.scss";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
export default function App() {
  const el = useRoutes(routes);
  return <div className="App">{el}</div>;
}
