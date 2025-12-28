import { Property } from "./property";
import { Realm } from "./realm";

export interface Constant extends Property {
  realms?: Realm[];
}
