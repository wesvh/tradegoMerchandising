import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

export class ModelProductSuppliersDB extends Realm.Object<ModelProductSuppliersDB> {
  number!: string;
  variantCode!: string;
  itemName!: string;
  supplierOwnNit!: string;
  competitionProduct!: object;
  competitionSupplier!: object;
  status!: boolean;

  static schema: ObjectSchema = {
    name: "productsuppliers",  
    primaryKey: "number",     
    properties: {
      number: "string",    
      variantCode: "string",         
      itemName: "string", 
      supplierOwnNit: "string", 
      competitionProduct: "competetionproducts?",
      competitionSupplier: "competetionsuppliers?",
      status: { default: true, type: "bool"}
    },
  };
}

