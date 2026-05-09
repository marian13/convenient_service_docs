const getDefaultColorScheme = () => "light";
const getUserPreferredColorScheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const getStoredColorScheme = () => sessionStorage.getItem("cs:colorScheme");

export const getColorScheme = () => getStoredColorScheme() || getUserPreferredColorScheme() || getDefaultColorScheme();
