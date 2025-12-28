import { Realm } from "./realm";

export interface Enum {
  name: string;
  realms?: Realm[];
  description?: string | string[];
  values: string[];
}
