import { createRealmContext } from "@realm/react";
import {
  ParametrizationConfig,
} from "./schema";

const parametrizacionSchemas = Object.values(ParametrizationConfig).map(model => model);
const mergeSchemas = [...parametrizacionSchemas];

export const GeneralConfigContext = createRealmContext({
  schema: [...mergeSchemas],
  path: "business.realm",
  schemaVersion: 1,
  deleteRealmIfMigrationNeeded: true
});

