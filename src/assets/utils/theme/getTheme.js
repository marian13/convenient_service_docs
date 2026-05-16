const getDefaultTheme = () => "flexoki-inspired";
const getStoredTheme = () => sessionStorage.getItem("cs:theme");

const getTheme = () => getStoredTheme() || getDefaultTheme();

export default getTheme;
