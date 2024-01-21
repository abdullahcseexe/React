// The Main -> App.js

const heading = React.createElement("h1" , { id: "heading" /*Html attribute*/} , "Hello World from react"); // This will create element in react
// just an object



// <div id="parent">
// <div id="child">
// <h1>I am H1</h1>
// <h2>I am H2</h2>
// </div>
// </div>

const parent = React.createElement("div" , {id : "parent"} , 
React.createElement("div" , {id : "child"}, [
React.createElement("h1" , {} , "I am H1" ), React.createElement("h2" , {} , "I am H2" )]
)
)
const root = ReactDOM.createRoot(document.getElementById("root")); // This thing will put the element in the browser

root.render(parent); //root including heading
// creates h1 tag and gives the heading in browser

// console.log(parent);//object