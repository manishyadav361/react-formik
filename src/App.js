import "./App.css";
import Form3 from "./components/FormikWithContext/Form3";
import YupForm from "./components/FormValidationWithYup/YupForm";
import Form from "./components/FormWithErrorHandling/Form";
import FormComponents from "./components/FormikComponents/FormComponents";
function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <YupForm /> */}
      {/* <Form3 /> */}
      <FormComponents />
    </div>
  );
}

export default App;
