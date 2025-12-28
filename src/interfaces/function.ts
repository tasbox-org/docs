import { Property } from "./property";
import { Realm } from "./realm";

export interface FunctionParameter extends Property {
  defaultValue?: string | number | boolean;
}

export interface FunctionProperty {
  name: string;
  realms?: Realm[];
  section?: string;
  parameters: FunctionParameter[];
  returns: Property[];
  description?: string | string[];
}
