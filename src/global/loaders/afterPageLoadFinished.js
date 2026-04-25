import { renderIsland } from "@utils/island";

window.addEventListener("load", async () => {
  for (const el of document.querySelectorAll("cs-react-island")) {
    await renderIsland(el);
  }
});
