const isBuildEnvironmentFromWindow = () => window.__cs__?.build || false;

export default isBuildEnvironmentFromWindow;
