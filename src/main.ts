import { Firebot } from "@crowbartools/firebot-custom-scripts-types";

interface Params {
  token: string;
}

const script: Firebot.CustomScript<Params> = {
  getScriptManifest: () => {
    return {
      name: "Govee",
      description: "Govee script",
      author: "DennisOnTheInternet",
      version: "1.0",
      firebotVersion: "5",
    };
  },
  getDefaultParameters: () => {
    return {
      token: {
        type: "string",
        default: "",
        description: "API Token",
        secondaryDescription: "Enter your Govee API Token here",
      },
    };
  },
  run: (runRequest) => {
    const effects = require.context('./effects', true, /\.ts$/);
    for (const key of effects.keys()) {
      debugger;
      runRequest.modules.effectManager.registerEffect(effects(key).default);
    }
  },
  parametersUpdated(parameters: Params) {
    params = parameters;
  }
};

export let params: Params = null;

export default script;
