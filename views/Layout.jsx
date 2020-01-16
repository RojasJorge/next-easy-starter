import { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Spin } from "antd";
import Login from "../components/user/Login";
import MainMenu from "../components/structure/MainMenu";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "antd/dist/antd.css";
import "../assets/css/global.scss";

const Layout = ({ children }) => {
  /** Page loaders */
  const [loading, switchLoader] = useState(true);

  /** Get auth global state */
  const auth = useStoreState(state => state.auth);

  /** Get global actions */
  const keepAuth = useStoreActions(actions => actions.auth.grantAccess);
  const refresh = useStoreActions(actions => actions.auth.refreshToken);

  useEffect(() => {
    if (localStorage.getItem("uToken") && localStorage.getItem("uCandidate")) {
      let renew = JSON.parse(localStorage.getItem("uCandidate"));
      renew.token = localStorage.getItem("uToken");
      keepAuth(renew);
    }

    /** Reset loader */
    switchLoader(false);

    /** Refresh token on window focused */
    window.addEventListener("focus", refresh);
  }, []);

  return auth.token && auth.user ? (
    <div className="app">
      <MainMenu />
      <div className="app--contents">
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  ) : loading ? (
    <div className="app--spinner animated zoomIn">
      <Spin size="large" />
    </div>
  ) : (
    <Login />
  );
};

export default Layout;
