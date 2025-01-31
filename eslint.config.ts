import { core } from "@phanect/lint";
import type { Linter } from "eslint";

const configs: Linter.Config[] = [
  {
    ignores: [
      "./node_modules",
    ],
  },

  ...core,

  {
    // Do not add `files: [ "*" ],` here.

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

export default configs;
