import { StoreProvider } from "easy-peasy";
import store from "../store/store";
import Layout from "../views/Layout";
import Dashboard from "../components/user/Dashboard";

const Index = () => {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Dashboard />
      </Layout>
    </StoreProvider>
  );
};

export default Index;
