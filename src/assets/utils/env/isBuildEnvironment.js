import isBuildEnvironmentFromUrlParams from "./isBuildEnvironmentFromUrlParams.js";
import isBuildEnvironmentFromWindow from "./isBuildEnvironmentFromWindow.js";

const isBuildEnvironment = () => isBuildEnvironmentFromUrlParams() || isBuildEnvironmentFromWindow();

export default isBuildEnvironment;
