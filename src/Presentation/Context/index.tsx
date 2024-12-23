//make a context on react native for global state management
import React, { createContext, useReducer, useMemo, useRef } from "react";
import NetInfo from "@react-native-community/netinfo";
import { urlBasePing } from "constant";

NetInfo.configure({
  reachabilityUrl: urlBasePing,
  reachabilityMethod: "GET",
  reachabilityTest: async (response: any) => response.status === 200
});

export const ContextApp = createContext({}); //create context

export const ContextProvider = ({ children }: any) => {
  const alerted2 = useRef(false);

  const initialState = {
    internet: false,
    reloadTrans: 0,
    boolReload: true,
 
    isProcesing: false,
    precautionInfo: {
      id: null,
      route: null,
      nav: null
    },
    precaution: [],
    precautionTotal: [],
    precautionId: 0,
    usuario: {},
  };

  const reducer = (state: any, action: any) => {
    if (action.type === "reset") return initialState;
    return { ...state, [action.type]: action.payload };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * @param type : string , related with initialState
   * @param payload : any , data to update
   */
  const _SetDispatch = (type: string, payload: any) => {
    dispatch({
      type,
      payload
    });
  };

  const ResetReducer = () => {
    dispatch({
      type: "reset"
    });
    getInternet();
  };


  const getInternet = () => {
    NetInfo.fetch().then((state) => {
      _SetDispatch("internet", state.isInternetReachable && state.isConnected);
    });
  };


  return (
    <ContextApp.Provider
      value={useMemo(
        () => ({
          state,
          saveContext: _SetDispatch,
          getInternet,
          ResetReducer,
          alerted: alerted2.current
        }),
        [state]
      )}>
      {children}
    </ContextApp.Provider>
  );
};
