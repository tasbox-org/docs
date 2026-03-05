import { Property } from "./property";
import { Realm } from "./realm";

export interface ClassProperty extends Property {
  defaultValue?: string | number | boolean;
}

export interface Class {
  name: string;
  realms?: Realm[];
  description?: string | string[];
  properties: ClassProperty[];
}
