const getDefaultColorScheme = () => "light";
const getUserPreferredColorScheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const getStoredColorScheme = () => sessionStorage.getItem("cs:colorScheme");
const setStoredColorScheme = (colorScheme) => sessionStorage.setItem("cs:colorScheme", colorScheme);

export const getColorScheme = () => getStoredColorScheme() || getUserPreferredColorScheme() || getDefaultColorScheme();

export const setColorScheme = (colorScheme) => {
  setStoredColorScheme(colorScheme);

  document.documentElement.setAttribute("data-color-scheme", colorScheme);
};

export const toggleColorScheme = () => {
  const colorScheme = getColorScheme();
  const nextColorScheme = colorScheme === "light" ? "dark" : "light";

  setColorScheme(nextColorScheme);
};

export const toggleColorSchemeAsync = () => Promise.resolve().then(toggleColorScheme);

export const isLightColorScheme = () => getColorScheme() === "light";
export const isDarkColorScheme = () => getColorScheme() === "dark";
