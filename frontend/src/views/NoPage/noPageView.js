import { LoginFooter } from "../../components/footer/loginFooter";
import { Navbar } from "../../components/navbar/navbar";
import "./noPageStyle.css";

export const NoPage = () => {
  return (
    <div className="page">
      <Navbar />
      <h1 className="error"><span className="erNo">404</span> Page <span className="noT">Not</span> Found</h1>
      <LoginFooter />
    </div>
  );
};
