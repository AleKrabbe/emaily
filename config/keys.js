const devKeys = require("./dev.js");
const prodKeys = require("./prod.js");

if (process.env.NODE_ENV === "production") {
  export default prodKeys;
} else {
  export default devKeys;
}
