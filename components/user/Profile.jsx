import { useStoreState } from "easy-peasy";
import { Card } from "antd";

const UserProfile = () => {
  const user = useStoreState(state => state.auth.user);
  return (
    <>
      <h1>Mi perfil</h1>
      <Card>
        Nombre: {user.name} {user.lastname}
      </Card>
    </>
  );
};

export default UserProfile;
