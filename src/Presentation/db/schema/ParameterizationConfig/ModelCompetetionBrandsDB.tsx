import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

export class ModelCompetetionBrandsDB extends Realm.Object<ModelCompetetionBrandsDB> {
  number!: string;
  name!: string;
  competitionSupplier!: object;
  status!: boolean;

  static schema: ObjectSchema = {
    name: "competetionbrands",  
    primaryKey: "number",     
    properties: {
      number: "string",    
      name: "string",         
      competitionSupplier: "competetionsuppliers", 
      status: { default: false, type: "bool"},
    },
  };
}

