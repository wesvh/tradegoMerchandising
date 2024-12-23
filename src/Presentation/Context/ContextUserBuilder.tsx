//make a context on react native for global state management
import React, { createContext, useMemo } from "react";

export const userBuilderContext = createContext({}); //create context

const initialByid = {
  accountNum: "",
  additionalDays: "",
  baseDays: "",
  chainId: "",
  deliveryAddress: "",
  district: "",
  docuType: "",
  email: "",
  emailFE: "",
  firstName: "",
  firstLastName: "",
  flag: "",
  identificationNum: "",
  latitude: "",
  length: "",
  logisticAddres: {
    codCity: "",
    codCountryRegion: "",
    codCountry: "",
    codDistrict: "",
    codState: "",
    id: "",
    nameCity: "",
    nameCountryRegios: "",
    nameCountry: "",
    nameDistrict: "",
    nameState: ""
  },
  middleName: "",
  mobilePhone: "",
  nameAlias: "",
  overdueBills: "",
  paymMode: "",
  paymTerm: "",
  phone: "",
  secondLastName: "",
  status: "",
  taxGroup: ""
};

const newUserInitialstate = {
  currentCustomer: {
    structureRequest: {
      custAccount: "",
      docuType: "",
      identificationNum: "",
      nameAlias: "",
      salesAreaCode: "",
      advisorCode: "",
      routedVisit: "",
      hour: "",
      documentType: "",
      ciiuCode: "",
      companyName: "",
      firstName: "",
      secondName: "",
      firstLastName: "",
      secondLastName: "",
      establishment: "",
      checkDigit: "",
      fiscalResponsibilities: "",
      businessType: "",
      neighborhood: "",
      street: "",
      length: "",
      latitude: "",
      phoneNumber: "",
      mobilePhoneNumber: "",
      phonenumber2: "",
      email: "",
      logisticZone: "",
      postalCode: "",
      paymMode: "",
      birthDate: "",
      site: ""
    },
    structureUserRedux: {
      AccountNum: "",
      AdditionalDays: 0, // 0
      BaseDays: 10, // 10
      BusinessTypeGroupId: "", // necesito que me envie la información el cliente
      ChainId: {
        CompanyChainDescription: "",
        CompanyChainId: "",
        Id: "",
        MinimumAmount: "",
        SegmentCombinedId: "",
        SegmentDescription: "",
        SegmentId: "",
        SubsegmentDescription: "",
        SubsegmentId: ""
      },
      CiiuCode: {
        CIIUCodeId: "",
        Id: "",
        Name: ""
      },
      DeliveryAddress: "", // Dirección
      District: "", // CodDistrict
      DocuType: {
        Code: "",
        CodeDIAN: "",
        Id: "",
        Name: ""
      },

      Email: "",
      EmailFE: "", //mismo correo
      FirstName: "",
      Firstlastname: "",
      Flag: null, //  null
      Id: 0, // cero quemado
      IdentificationNum: "",
      Latitude: "",
      Length: "",
      LineDisc: "", // necesito que me envie la información el cliente
      LogisticAddres: {
        CodCity: "",
        CodCountryRegion: "",
        CodCounty: "",
        CodDistrict: "",
        CodState: "",
        Id: "",
        NameCity: "",
        NameCountryRegios: "",
        NameCounty: "",
        NameDistrict: "",
        NameState: ""
      },
      MiddleName: "",
      MobilePhone: "",
      MultilineDisc: "", // necesito que me envie la información el cliente
      Name: "",
      NameAlias: "",
      OverdueBills: 0, // quemado 0
      PaymMode: {
        Id: "",
        Name: "",
        PaymModeId: ""
      },
      PaymTerm: {
        Description: "Contado",
        Id: "22",
        NumOfDays: "0",
        PaymTermId: "022"
      },
      Phone: "",
      PositiveBalance: 0, // 0
      PriceGroup: "", // necesito que me envie la información el cliente
      Secondlastname: "",
      Status: "No", // "No"
      TaxGroup: "011" // Me lo retorna cliente
    },
    routeToComprobe: ""
  },
  costumerById: [initialByid],
  selectedCustomerById: {},
  locationAdress: {
    latitud: "",
    longitud: "",
    codePostal: "",
    direccion: ""
  },
  zonesCustomers: []
};

export const ContextUserBuilder = ({ children }: any) => {
  const ClientBuild = React.useRef(newUserInitialstate);

  return (
    <userBuilderContext.Provider
      value={useMemo(
        () => ({
          ClientBuilder: ClientBuild.current
        }),
        []
      )}>
      {children}
    </userBuilderContext.Provider>
  );
};
