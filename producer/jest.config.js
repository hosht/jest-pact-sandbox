export default {
  clearMocks: true,
  coverageProvider: "v8",
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
