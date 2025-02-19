import type { Linter } from '@nx/linter';

export interface ConfigurationGeneratorSchema {
  project: string;
  /**
   * this is relative to the projectRoot
   **/
  directory: string;
  js: boolean; // default is false
  skipFormat: boolean;
  skipPackageJson: boolean;
  linter: Linter;
  setParserOptionsProject: boolean; // default is false
  /**
   * command to give playwright to run the web server
   * @example: "npx nx serve my-fe-app"
   **/
  webServerCommand?: string;
  /**
   * address
   * @example: "http://localhost:4200"
   **/
  webServerAddress?: string;
}
