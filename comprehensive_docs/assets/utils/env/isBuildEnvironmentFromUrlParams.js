const isBuildEnvironmentFromUrlParams = () => new URLSearchParams(location.search).get("build") === "true";

export default isBuildEnvironmentFromUrlParams;
