/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  future: {
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
  },
  appDirectory: "app",
  watchPaths: ["../../libs/my-shared-lib/src"],
};
