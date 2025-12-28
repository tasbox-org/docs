import { Type } from "./type";

export interface Property {
  name: string | number;
  type: Type;
  optional?: boolean;
  description?: string;
}
