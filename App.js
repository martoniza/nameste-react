/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm anh2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm an h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser understands)
 *      
 */
const heading1 = React.createElement("h1", {}, "I'm an h1 tag");
const heading2 = React.createElement("h2", {}, "I'm an h2 tag");
const child = React.createElement("div", { id: "child" }, [heading1, heading2]);
const child2 = React.createElement("div", { id: "child2" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, [child, child2]);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent); 