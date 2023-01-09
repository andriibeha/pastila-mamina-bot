import Button from "../Button";
import { useTegegram } from "../../hooks/useTelegram";

const Header = () => {
  const { onClose, user } = useTegegram;

  return (
    <div className={"header"}>
      <Button onClick={onClose}>Закрити</Button>
      <span className={"username"}> {user?.username} </span>
    </div>
  );
};

export default Header;
