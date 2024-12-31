import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

export class ModelCompetetionActivityTypesDB extends Realm.Object<ModelCompetetionActivityTypesDB> {
  number!: string;
  code!: string;
  competitionActivityTypeName!: string;
  startDate!: string;
  endDate!: string;
  status!: boolean;

  static schema: ObjectSchema = {
    name: "competetionactivitytypes",  
    primaryKey: "number",     
    properties: {
      number: "string",    
      code: "string",         
      competitionActivityTypeName: "string", 
      startDate: "string", 
      endDate: "string", 
      status: { default: true, type: "bool"},
    },
  };
}

