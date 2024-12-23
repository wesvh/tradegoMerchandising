import { useState, useContext, useEffect, useCallback } from "react";
import { ContextApp } from "context";
import { useToast } from "react-native-toast-notifications";
import { GetItemUseCase } from "getItem/GetItem";



export default function AnunciosViewModel(navigation: any) {
  const [zone, setZone] = useState("");
  const [loadSuccess, setLoadSuccess] = useState(true);
  const [uri, setUri] = useState(
    `https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${zone}%22%7D`
  );
  const {state, getLocation }: any = useContext(ContextApp);

  useEffect(() => {
    getZone();
  }, []);

  const getZone = async () => {
    const { salesZoneId } = await GetItemUseCase("saleZone");
    setUri(
      `https://datastudio.google.com/u/0/reporting/1d9180f4-7ca1-4f7c-8066-2b45b767024b/page/ZBm3C?params=%7B%22ds0.zona_de_ventas%22%3A%22${salesZoneId}%22%7D`
    );
    setZone(salesZoneId);
  };

  useEffect(() => {
    if (state?.internet) {
      setLoadSuccess(true);
    }
  }, [state?.internet]);


  return {
    saleZone: zone,
    loadSuccess,
    uri,
    setUri,
    setLoadSuccess
  };
}
