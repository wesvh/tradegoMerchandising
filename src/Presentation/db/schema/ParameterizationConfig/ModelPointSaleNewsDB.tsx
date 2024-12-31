import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

export class ModelPointSaleNewsDB extends Realm.Object<ModelPointSaleNewsDB> {
  number!: string;
  code!: string;
  reason!: string;
  status!: boolean;

  static schema: ObjectSchema = {
    name: "pointsalenews",  
    primaryKey: "number",     
    properties: {
      number: "string",    
      code: "string",         
      reason: "string", 
      status: { default: true, type: "bool"}
    },
  };
}

