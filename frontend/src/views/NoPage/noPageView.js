import { Navbar } from "../../components/navbar/navbar";
import style from "./noPageStyle.css";

export const NoPage = () => {
  return (
    <div className={style.full__Page}>
    <div className="page">
      <Navbar />
      <h1 className="error"><span className="erNo">404</span> Page <span className="noT">Not</span> Found</h1>
    </div>
    </div>
  );
};
