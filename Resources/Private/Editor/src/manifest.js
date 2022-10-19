import manifest from "@neos-project/neos-ui-extensibility";

import TailwindColors from "./TailwindColorsEditor";

manifest(
  "Carbon.TailwindColors:Editor",
  {},
  (globalRegistry, { frontendConfiguration }) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");
    const config = frontendConfiguration["Carbon.TailwindColors"];

    editorsRegistry.set("Carbon.TailwindColors/Editor", {
      component: class extends TailwindColors {
        getConfig() {
          return config;
        }
      },
    });
  }
);
