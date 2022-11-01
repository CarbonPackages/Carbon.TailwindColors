import manifest from "@neos-project/neos-ui-extensibility";

import Colors from "./Colors";
import Groups from "./Groups";

manifest("Carbon.TailwindColors:Editors", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Carbon.TailwindColors/Colors", {
        component: Colors,
    });

    editorsRegistry.set("Carbon.TailwindColors/Groups", {
        component: Groups,
    });
});
