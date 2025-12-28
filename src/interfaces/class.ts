import { Property } from "./property";
import { Realm } from "./realm";

export interface Class {
  name: string;
  realms?: Realm[];
  description?: string | string[];
  properties: Property[];
}
