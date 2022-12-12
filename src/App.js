import "./scss/index.scss";
import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import { routes } from "./routes";
export default function App() {
  const el = useRoutes(routes);
  return (
    <div className="App">
      <Header />
      <div className="container">{el}</div>
    </div>
  );
}
