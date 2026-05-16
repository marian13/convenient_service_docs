import { getColorScheme } from "./getColorScheme.js";
import { setColorScheme } from "./setColorScheme.js";

export const toggleColorScheme = () => {
  const colorScheme = getColorScheme();
  const nextColorScheme = colorScheme === "light" ? "dark" : "light";

  setColorScheme(nextColorScheme);
};
