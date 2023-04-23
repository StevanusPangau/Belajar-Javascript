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

export const tittle = 'Belajar Javascript Module';

const content = 'Content Belajar Javascript Module';

const author = 'Stevanus Evan Pangau';

export { content };

// export default hanya bisa satu
export default author;
