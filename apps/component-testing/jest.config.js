module.exports = {
  name: "component-testing",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/component-testing/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
