import AlertContext from "./alertContext";
import { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import AlertReducer from "./alertReducer";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // show alert
  const showAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });
    setTimeout(function () {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, showAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
