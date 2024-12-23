//make a context on react native for global state management
import React, { createContext, useReducer, useMemo, useRef } from "react";
import { useToastAlert } from "../hooks";
import { ContextListener } from "./ContextListener";
import * as Location from "expo-location";
import NetInfo from "@react-native-community/netinfo";
import { urlBasePing } from "constant";

NetInfo.configure({
  reachabilityUrl: urlBasePing,
  reachabilityMethod: "GET",
  reachabilityTest: async (response: any) => response.status === 200
});

export const ContextApp = createContext({}); //create context

export const ContextProvider = ({ children }: any) => {
  const { alert } = useToastAlert();
  const alerted2 = useRef(false);

  const initialState = {
    currentCustomer: {},
    currentCreateCustomer: {},
    dataCategory: [],
    coords: {},
    internet: false,
    reloadTrans: 0,
    boolReload: true,
    closeWorkDay: [],
    currentAddress: {
      street: "",
      canEdit: false,
      postalCode: ""
    },
    isProcesing: false,
    precautionInfo: {
      id: null,
      route: null,
      nav: null
    },
    precaution: [],
    precautionTotal: [],
    consignments: [],
    consignmentTotal: [],
    precautionId: 0,
    routeWorkOff: {},
    sendingPendings: false,
    isLoadingCustomers: false,
    isLoadingCloseWorkDay: false,
    salesZone: {},
    usuario: {},
    cuadreCaja: {},
    showSurveysPedidos: false
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

  const getPermissions = async (cb: any) => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Debe permitir el acceso al GPS", "danger");
    } else {
      cb();
    }
  };

  const getLocation = () => {
    getPermissions(() => {
      Location.getCurrentPositionAsync({}).then((data) => {
        _SetDispatch("coords", {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        });
      });
    });
  };

  const GetExactlyOrAproxByTime = async () => {
    const time = 12000;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject("No se pudo obtener la ubicación");
      }, time);
      Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest
      }).then((data) => {
        clearTimeout(timer);
        resolve({
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        });
      });
    });
  };
  const GetCoordsNow = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      const data = await GetExactlyOrAproxByTime();
      _SetDispatch("coords", {
        latitude: data.latitude,
        longitude: data.longitude
      });
      return {
        latitude: data.latitude,
        longitude: data.longitude
      };
    } else {
      return {
        latitude: 1.1,
        longitude: 1.1
      };
    }
  };
 

  const getInternet = () => {
    NetInfo.fetch().then((state) => {
      _SetDispatch("internet", state.isInternetReachable && state.isConnected);
    });
  };

  ContextListener(getLocation, _SetDispatch, state);

  return (
    <ContextApp.Provider
      value={useMemo(
        () => ({
          state,
          saveContext: _SetDispatch,
          getLocation,
          GetCoordsNow,
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
