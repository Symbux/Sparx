# Adding new lerna package

* Run `lerna create <package-name>` to create a new package (set `lib/index.js`).
* Add `tsconfig.json` file to the package.
* Remove the tests folder, and line in scripts of the `package.json`.
* Add any shared scripts (`build`, and `clean`) to the `package.json`.
* Add new `src` folder with `index.ts` inside with basic return function.
* Then add package to the `integration` like so `lerna add @sparx/<package-name> --scope=integration`.
