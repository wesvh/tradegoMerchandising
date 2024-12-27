import { Realm } from "@realm/react";

export class ModelExhibidorTypesDB extends Realm.Object {
  id!: number;
  name!: string;
  startAt!: string;
  endAt!: string;
  status!: boolean;

  static schema = {
    name: "exhibidortypes",
    primaryKey: "number",
    properties: {
      id: "int",
      name: "string",
      startDate: "string",
      endDate: "string",
      status: "bool"
    }
  };
}
