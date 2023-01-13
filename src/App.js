import { useReducer } from "react";
import { Context, initialState, reducer } from "./App.Reducer";
import "./App.css";
import Main from "./Main/Main";
import Head from "./Head/Head";
import Empty from "./Empty/Empty";
import Drop from "./Drop/Drop";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ dispatch, state }}>
      <div className="main_app">
        <Drop isShowDrop={state.isShowDrop} />
        <Head />
        {state.cityColl.length > 0 ? <Main /> : <Empty />}
      </div>
    </Context.Provider>
  );
}

export default App;
