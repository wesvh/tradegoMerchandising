import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

export class ModelCompetetionProductsDB extends Realm.Object<ModelCompetetionProductsDB> {
  number!: string;
  code!: string;
  name!: string;
  brand!: string;
  status!: boolean;

  static schema: ObjectSchema = {
    name: "competetionproducts",  
    primaryKey: "number",     
    properties: {
      number: "string",    
      code: "string",         
      name: "string",  
      brand: "string",  
      status: { default: false, type: "bool"},
    },
  };
}

