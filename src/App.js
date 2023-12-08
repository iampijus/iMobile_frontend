import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Routing from "./components/Routing";
import { createContext, useReducer } from "react";
import { initialState,reducer } from "./reducer/UseReducer";
const UserContext = createContext();
function App() {

  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
      <UserContext.Provider value={{state,dispatch}}>
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;
export { UserContext };
 