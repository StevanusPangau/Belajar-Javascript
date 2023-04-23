/**
 * # CONTOH EXPORT DEFAULT
 * export default namaFunction;
 * export default function(){ ... }
 * export default namaVariable;
 * export default namaVariable = value;
 * export default NamaClass;
 * export default class { ... }
 *
 * # CARA IMPORT DEFAULT
 * import aliasFunction from “./module-default.js”
 * import {default as aliasVariable} from “./module-default.js”
 * import aliasVariable from “./module-default.js”
 * import {default as aliasVariable} from “./module-default.js”
 * import AliasClass from “./module-default.js”
 * import {default as AliasClass} from “./module-default.js”
 */

// contoh default export class
export default class {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.info(`Hi, My name is ${this.name}`);
  }
}
