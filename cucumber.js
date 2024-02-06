/* eslint-disable @typescript-eslint/naming-convention */
const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const panda_backend = [
  ...common,
  'tests/apps/panda/backend/features/**/*.feature',
  '--require tests/apps/panda/backend/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  panda_backend
};
