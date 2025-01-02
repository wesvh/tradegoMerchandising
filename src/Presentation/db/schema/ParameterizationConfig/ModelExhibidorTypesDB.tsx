import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

export class ModelExhibidorTypesDB extends Realm.Object<ModelExhibidorTypesDB> {
  number!: string;
  name!: string;
  startDate!: string; 
  endDate!: string;   
  status!: boolean;

  static schema: ObjectSchema = {
    name: "exhibidortypes",  
    primaryKey: "number",     
    properties: {
      number: "string",    
      name: "string",         
      startDate: "string",  
      endDate: "string",    
      status: { default: true, type: "bool"},
    },
  };
}

