import { style } from "@vanilla-extract/css";
import { sprinkles } from "@my-shared-lib/sprinkles.css";

export const MyStyle = style([
  { display: "flex", fontSize: "26px" },
  sprinkles({
    color: "indigo-900",
  }),
]);
