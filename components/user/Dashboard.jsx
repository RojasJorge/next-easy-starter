import { Card, Statistic } from "antd";

const Dashboard = () => {
  return (
    <>
      <h1>Tablero</h1>
      <div className="row">
        <div className="col">
          <Card>
            <Statistic title="Active Users" value={5} />
          </Card>
        </div>
        <div className="col">
          <Card>
            <p>Custom block.</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
