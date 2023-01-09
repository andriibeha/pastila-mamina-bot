import { useEffect } from "react";
import { useTegegram } from "./components/hooks/useTelegram";
import "./App.css";

function App() {
  const { onToggleButton, tg } = useTegegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <button onClick={onToggleButton}>toggle</button>
    </>
  );
}

export default App;
