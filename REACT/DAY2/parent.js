import circle from "./test.js";
import box from "./app.js";

var parent = ()=>{
    return React.createElement('div',{id:'parent'},[box(),circle()])
}
export default parent