import manifest from "@neos-project/neos-ui-extensibility";

import Colors from "./Component/Colors";
import Groups from "./Component/Groups";
import BackgroundAndForeground from "./Component/BackgroundAndForeground";

manifest("Carbon.TailwindColors:Editors", {}, (globalRegistry) => {
    const editorsRegistry = globalRegistry.get("inspector").get("editors");

    editorsRegistry.set("Carbon.TailwindColors/Colors", {
        component: Colors,
    });

    editorsRegistry.set("Carbon.TailwindColors/Groups", {
        component: Groups,
    });

    editorsRegistry.set("Carbon.TailwindColors/BackgroundAndForeground", {
        component: BackgroundAndForeground,
    });
});
