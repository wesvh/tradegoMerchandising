import { createRealmContext } from "@realm/react";
import {
  ModelExhibidorTypesDB  
} from "./schema";


export const GeneralConfigContext = createRealmContext({
  schema: [
    ModelExhibidorTypesDB   
  ],
  path: "business.realm",
  schemaVersion: 36,
  deleteRealmIfMigrationNeeded: true
});

