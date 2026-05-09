export const applyColorScheme = (colorScheme) => {
  document.documentElement.setAttribute("data-color-scheme", colorScheme);

  const lightLink = document.querySelector('[data-syntax-highlight-theme="light"]');
  const darkLink = document.querySelector('[data-syntax-highlight-theme="dark"]');

  if (lightLink) lightLink.disabled = colorScheme !== "light";
  if (darkLink) darkLink.disabled = colorScheme !== "dark";
};
