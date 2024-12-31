import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

export class ModelCompetetionSuppliersDB extends Realm.Object<ModelCompetetionSuppliersDB> {
  number!: string;
  competitionSupplierId!: string;
  competitionSupplierName!: string;
  supplierNit!: string;
  supplierName!: string;
  status!: boolean;

  static schema: ObjectSchema = {
    name: "competetionsuppliers",  
    primaryKey: "number",     
    properties: {
      number: "string",    
      competitionSupplierId: "string",         
      competitionSupplierName: "string",  
      supplierNit: "string",  
      supplierName: "string",  
      status: { default: false, type: "bool"},
    },
  };
}

