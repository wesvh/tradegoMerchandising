export const endpoints = {
  customer: {
    getAllExtraRoutes: (query: string) => `/Customer/dinamycquerycustomerextraroute?${query}`,
    getoutstandinginvoice: `/Orders/getoutstandinginvoice`,
    getAllCustomersBySaleZone: (id: string) => `/Customer/${id}`
  },
  order: {
    getAllCancelDocument: `/Orders/getorderstocancel`
  },
  transmissionDocument: {
    getDatesWithQuery: `/Orders/transmisiondocumentconsolidate`,
    getDatesDetailWithQuery: `/Orders/ordersbydate`,
    getDetailSingle: `/Orders/orderdetailbyid`,
    getNoVisit: `/Orders/nosales`,
    getInvoices: `/Invoices`,
    getNewCustomers: `/Customer/customersbydate`,
    cancelOrders: `/Orders/cancelorder`,
    cashreceiptsbydate: `/CashReceipt/cashreceiptsbydate`,
    getPickupRequest: `/PickUpRequest/detail`
  },
  clienteNuevoCliente: {
    transUnion: `/Customer/getcustomer`,
    consultantCustomer: `/Customer`
  },
  precautions: {
    getPendingInvoicesById: (documentID: string) => `/Precautions/getbyid/${documentID}`,
    getCustomerPaymentManagement: (documentID: string) =>
      `/Precautions/getcustomerpaymentmanagement?identificationNumber=${documentID}`,
    getCustomerCashBill: (documentID: string) =>
      `Precautions/getcustomercashbill?identificationNumber=${documentID}`,
    createCashBill: `/Precautions/createcashbill`,
    createCheckcashbill: `/Precautions/createcheckcashbill`
  },
  cashReceipt: {
    getCashreceiptmail: `CashReceipt/cashreceiptMail`
  },
  CloseDayWorks: {
    postCloseDayWorks: `/CloseDayWorks`
  },
  creditNotes: {
    checkOpenInvoices: (accountNum: string, salesZone: number | string) =>
      `/CreditNote/checkopeninvoices?accountNum=${accountNum}&salesZone=${salesZone}`,
    getOpenInvoices: (salesZone: number | string, route: number | string) =>
      `/CreditNote/openinvoices?salesZone=${salesZone}&route=${route}`,
    getCreditNotesConcepts: `/Config/creditnoteconcepts`,
    createCreditNote: `/CreditNote/create`
  },
  PickupRequest: {
    createPickupRequest: `/PickupRequest/create`,
    getdetailPickupRequest: (id: number) => `/PickupRequest/getdetail/${id}`
  },
  Surveys: {
    createSurvey: `/Surveys/PostAnswerQuestions`
  }
};
