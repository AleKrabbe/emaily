import devKeys from "./dev.js";
import prodKeys from "./prod.js";

if (process.env.NODE_ENV === "production") {
  export default prodKeys;
} else {
  export default devKeys;
}
