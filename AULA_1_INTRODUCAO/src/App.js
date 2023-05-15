// import HelloWorld from "./components/HelloWorld";
// import "./styles.css";
import React from "react";


//  function App() {
//   return (
//     <div className="PrimeiraAula">  
//       < HelloWorld />
      
   
//    </div>
//   );
// }

 
// // arrow function v1 
// const HelloWorld = () => {
//   return (
//     <div>
//        <h1> Jefferson </h1>
//        <h2> Sistemas de Informação</h2>
//     </div>

//   );

// }

// arrow function v2 (só uma estrução)
// const HelloWorld = () => 
//   <div>
//     <h1> Jefferson </h1>
//     <h2> Sistemas de Informação</h2>
//   </div>

// a v3 com classes 

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1> Jefferson </h1>
        <h2> Sistemas de Informação</h2>
      </div>
    );
  }
}





export default HelloWorld;
