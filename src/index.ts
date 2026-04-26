import _Asset from "./asset.json" with { type: "json" };
import _Camera from "./camera.json" with { type: "json" };
import _Colour from "./colour.json" with { type: "json" };
import _Engine from "./engine.json" with { type: "json" };
import _Entity from "./entity.json" with { type: "json" };
import _Event from "./event.json" with { type: "json" };
import _EventDispatcherFunctions from "./event-dispatcher-functions.json" with { type: "json" };
import _Filesystem from "./filesystem.json" with { type: "json" };
import _Globals from "./globals.json" with { type: "json" };
import _Input from "./input.json" with { type: "json" };
import _Keyboard from "./keyboard.json" with { type: "json" };
import _Luau from "./luau.json" with { type: "json" };
import _Material from "./material.json" with { type: "json" };
import _Menu from "./menu.json" with { type: "json" };
import _MoonJuice from "./moon-juice.json" with { type: "json" };
import _Physics from "./physics.json" with { type: "json" };
import _Player from "./player.json" with { type: "json" };
import _Quaternion from "./quaternion.json" with { type: "json" };
import _Skeleton from "./skeleton.json" with { type: "json" };
import _State from "./state.json" with { type: "json" };
import _Timer from "./timer.json" with { type: "json" };
import _Ui from "./ui.json" with { type: "json" };
import _Network from "./network.json" with { type: "json" };
import _Serialiser from "./serialiser.json" with { type: "json" };

import { Library } from "./interfaces/library";
import { FunctionProperty } from "./interfaces/function";

export const asset: Library = _Asset as Library;
export const camera: Library = _Camera;
export const colour: Library = _Colour;
export const engine: Library = _Engine as Library;
export const entity: Library = _Entity as Library;
export const event: Library = _Event as Library;
export const eventDispatcherFunctions: FunctionProperty[] = _EventDispatcherFunctions;
export const filesystem: Library = _Filesystem as Library;
export const globals: Library = _Globals;
export const input: Library = _Input as Library;
export const keyboard: Library = _Keyboard as Library;
export const luau: Library = _Luau as Library;
export const material: Library = _Material;
export const menu: Library = _Menu as Library;
export const moonJuice: Library = _MoonJuice as Library;
export const physics: Library = _Physics as Library;
export const player: Library = _Player as Library;
export const quaternion: Library = _Quaternion as Library;
export const skeleton: Library = _Skeleton as Library;
export const state: Library = _State as Library;
export const timer: Library = _Timer as Library;
export const ui: Library = _Ui as Library;
export const network: Library = _Network as Library;
export const serialiser: Library = _Serialiser as Library;

export const allLibraries: Library[] = [
  asset,
  camera,
  colour,
  engine,
  entity,
  event,
  filesystem,
  globals,
  input,
  keyboard,
  luau,
  material,
  menu,
  moonJuice,
  physics,
  player,
  quaternion,
  skeleton,
  state,
  timer,
  ui,
  network,
  serialiser,
];

export type * from "./interfaces/class";
export type * from "./interfaces/constant";
export type * from "./interfaces/enum";
export type * from "./interfaces/function";
export type * from "./interfaces/library";
export type * from "./interfaces/property";
export type * from "./interfaces/realm";
export type * from "./interfaces/type";
