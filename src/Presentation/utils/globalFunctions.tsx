import moment from "moment";

export const formatToCurrency = (amount: any) => {
  let result = "0.0";
  if (amount != null && amount != "" && amount != undefined) {
    result = "$ " + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
  return result;
};
export const formatToNumber = (amount: any) => {
  let result = "0.0";
  if (amount != null && amount != "" && amount != undefined) {
    result = amount.toLocaleString("en-US");
  }
  return result;
};

export const removeWhiteSpaceString = (input: any) => {
  if (typeof input === "string") {
    return input.replace(/\s/g, "");
  }
  return input;
};

export const getFullDate = () => {
  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  const mes = fechaActual.getMonth() + 1;
  const dia = fechaActual.getDate();

  const fechaFormateada =
    anio + "-" + (mes < 10 ? "0" : "") + mes + "-" + (dia < 10 ? "0" : "") + dia;

  return fechaFormateada;
};

export const getFullDateDDMMYYYY = () => {
  const fechaActual = new Date();
  const anio = fechaActual.getFullYear();
  const mes = fechaActual.getMonth() + 1;
  const dia = fechaActual.getDate();

  const fechaFormateada =
    (dia < 10 ? "0" : "") + dia + "-" + (mes < 10 ? "0" : "") + mes + "-" + anio;

  return fechaFormateada;
};

export const getFullDateDDMMYYYY2 = () => {
  const fechaMoment = moment();
  const fechaFormateada = fechaMoment.format("DD-MM-YYYY");
  return fechaFormateada;
};

export const getFullFormattedDate = (inputDate: Date | string, middleDash = false) => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateFormated = middleDash
    ? year + "-" + (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day
    : year + "/" + (month < 10 ? "0" : "") + month + "/" + (day < 10 ? "0" : "") + day;
  return dateFormated;
};

export const formattedDate = (inputDate: Date | string, middleDash = false) => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateFormated = middleDash ? day + "-" + month + "-" + year : day + "/" + month + "/" + year;
  return dateFormated;
};

export const formatAmount = (amount: any) => {
  const separador = ".";
  amount += "";
  let splitLeft = amount;
  const regx = /(\d+)(\d{3})/;

  while (regx.test(splitLeft)) {
    splitLeft = splitLeft.replace(regx, "$1" + separador + "$2");
  }
  return `$ ${splitLeft}`;
};

export const getDateFormatISO = (): any => {
  const currentDate = new Date();
  return currentDate.toISOString();
};

export const formatNumberWithCommas = (value: any) => {
  if (!value) return value;
  const parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

export const removeNumberFormatting = (value: any) => {
  if (!value) return value;
  return value.toString().replace(/,/g, "").replace(/\$/g, "");
};
