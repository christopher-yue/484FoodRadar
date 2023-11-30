import { LoginFooter } from "../../components/footer/loginFooter";
import { Navbar } from "../../components/navbar/navbar";

export const NoPage = () => {
  return (
    <div className="page">
      <Navbar />
      <h1>404 Page Not Found</h1>
      <LoginFooter />
    </div>
  );
};
