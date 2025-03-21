import Button from "./components/Button/Button";
import { MouseEvent, useState } from "react";
import Input from "./components/Input/Input";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };
  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
      <Button appearence="big" onClick={addCounter}>
        Кнопка
      </Button>
      <Input placeholder="email" />
    </>
  );
}

export default App;
