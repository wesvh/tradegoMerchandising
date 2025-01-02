import { Realm } from "@realm/react";
import { ModelExhibidorTypesDB } from "./ModelExhibidorTypesDB";
import { ObjectSchema } from "realm";

export class ModelExhibidoresDB extends Realm.Object<ModelExhibidoresDB> {
  number!: string;
  nit!: string;
  name!: string;
  exhibidorType!: object;
  startDate!: string;
  endDate!: string;
  status!: boolean;

  static schema: ObjectSchema = {
    name: "exhibidores",
    primaryKey: "number",  
    properties: {
      number: "string",
      nit: "string",
      name: "string",
      exhibidorType: "exhibidortypes?", 
      startDate: "string",
      endDate: "string",
      status: { type: "bool", default: true }
    }
  };
}
