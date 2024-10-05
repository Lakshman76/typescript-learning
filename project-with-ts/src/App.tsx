import "./App.css";
import Button from "./components/Button";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";

function App() {
  return (
    <>
      <Button
        backgroundColor="green"
        fontSize={20}
        textColor="white"
        padding={[5, 10, 5, 10]}
      />
      <br />
      <Button1
        style={{ backgroundColor: "red", fontSize: 20, color: "white" }}
      />
      <br />
      <Button2
        borderRadius={{
          topLeft: 15,
          topRight: 15,
          bottomLeft: 15,
          bottomRight: 15,
        }}
      />
      <br />
      <Button3>Click me!</Button3>
    </>
  );
}

export default App;
