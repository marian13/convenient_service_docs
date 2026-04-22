import { renderIsland } from "@utils/island";

window.addEventListener("load", async () => {
  for (const el of document.querySelectorAll("cs-island")) {
    await renderIsland(el);
  }
});
