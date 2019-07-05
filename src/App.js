import React, { useReducer, createContext, useContext } from "react";
import "./App.css";

const Avatar = ({ state, dispatch }) => {
  console.log("Avatar");
  return (
    <>
      <div onClick={() => dispatch({ type: "CHANGE_USER", value: "CuiRan" })}>
        {state.user}
      </div>
      <div onClick={() => dispatch({ type: "CHANGE_AGE", value: 17 })}>
        {state.age}
      </div>
    </>
  );
};

const User = () => {
  console.log("User");
  const { state, dispatch } = useContext(UserContext);
  return <Avatar state={state} dispatch={dispatch} />;
};

const NavigationBar = () => {
  console.log("NavigationBar");
  return <User />;
};

const PageLayout = () => {
  console.log("PageLayout");
  return <NavigationBar />;
};

const Page = () => {
  console.log("Page");
  return <PageLayout />;
};

const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_USER":
      return { ...state, user: action.value };
    case "CHANGE_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: "崔然", age: 18 });

  return (
    <UserContext.Provider
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const App = () => (
  <AppProvider>
    <Page />
  </AppProvider>
);

export default App;
