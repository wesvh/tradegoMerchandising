import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

export class ModelCompetetionExhibidoresDB extends Realm.Object<ModelCompetetionExhibidoresDB> {
  number!: string;
  code!: string;
  competitionSupplier!: string;
  startDate!: string;
  endDate!: string;
  status!: boolean;

  static schema: ObjectSchema = {
    name: "competetionexhibidores",  
    primaryKey: "number",     
    properties: {
      number: "string",    
      code: "string",         
      competitionSupplier: "competetionsuppliers", 
      startDate: "string", 
      endDate: "string", 
      status: { default: true, type: "bool"}
    },
  };
}

