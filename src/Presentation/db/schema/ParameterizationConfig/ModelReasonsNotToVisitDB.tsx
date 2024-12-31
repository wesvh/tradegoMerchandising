import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

export class ModelReasonsNotToVisitDB extends Realm.Object<ModelReasonsNotToVisitDB> {
  number!: string;
  code!: string;
  name!: string;
  status!: boolean;

  static schema: ObjectSchema = {
    name: "reasonsnottovisit",  
    primaryKey: "number",     
    properties: {
      number: "string",    
      code: "string",         
      reason: "string", 
      status: { default: true, type: "bool"}
    },
  };
}

