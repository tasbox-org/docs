import { Property } from "./property";

export interface ArrayType {
  type: "array";
  items: Type;
}

export interface FunctionType {
  type: "function";
  parameters: Property[];
  returns: Property[];
}

export type PrimitiveType = string | ArrayType | FunctionType;

export type Type = PrimitiveType | PrimitiveType[];
