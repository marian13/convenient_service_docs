const getDefaultTheme = () => "flexoki-inspired";
const getStoredTheme = () => sessionStorage.getItem("cs:theme");

export const getTheme = () => getStoredTheme() || getDefaultTheme();
