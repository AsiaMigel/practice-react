import "../App.css";
import Form from "./Form/Form";

function App() {
  const submit = (e) => {
    console.log(e);
  };
  return <Form submit={submit} />;
}

export default App;
 