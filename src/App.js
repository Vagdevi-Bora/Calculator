import { Provider } from "react-redux";
import Device from "./components/device";
import store from "./redux/store";

function App() {
  return (
    <>
      <div className="device">
        <Provider store={store}>
          <Device />
        </Provider>
      </div>
    </>
  );
}

export default App;
