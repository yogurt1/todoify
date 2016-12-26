import * as counter from "./counter"
import * as locale from "./locale"
import * as todos from "./todos"

export default {
    ...counter,
    ...locale,
    ...todos
}
