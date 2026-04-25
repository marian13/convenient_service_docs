import { renderIsland } from "@utils/island";

window.addEventListener("load", () => {
  const islands = document.querySelectorAll("cs-react-island");

  Promise.all([...islands].map(renderIsland)).then(() => {
    window.__ready__ = true;
  });
});
