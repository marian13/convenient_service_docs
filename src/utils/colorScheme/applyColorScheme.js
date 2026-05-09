export const applyColorScheme = (colorScheme) => {
  document.documentElement.setAttribute("data-color-scheme", colorScheme);

  document.querySelector('[data-syntax-highlight-theme="light"]').media = colorScheme === "light" ? "" : "not all";
  document.querySelector('[data-syntax-highlight-theme="dark"]').media = colorScheme === "dark" ? "" : "not all";
};
