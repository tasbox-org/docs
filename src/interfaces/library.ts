import { FunctionProperty } from "./function";
import { Class } from "./class";
import { Enum } from "./enum";
import { Realm } from "./realm";
import { Constant } from "./constant";

export interface Library {
  $schema: string;

  name: string;

  /**
   * Default realms for all constants, functions, enums, classes and events in this library.
   * If not defined, realm is unknown (i.e. documentation needs updating).
   */
  realms?: Realm[];

  description?: string | string[];
  constants?: Constant[];
  functions?: FunctionProperty[];
  enums?: Enum[];
  classes?: Class[];
  events?: FunctionProperty[];
}
