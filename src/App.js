import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import AddUser from "./components/AddUser";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddUser />
      </div>
    </Provider>
  );
}

export default App;
