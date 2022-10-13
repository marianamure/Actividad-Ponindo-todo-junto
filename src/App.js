import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import PersonCard from "./componentes/PersonCard/PersonCard";


/* 
Inicializar proyecto: npm start
Detener proyecto: Ctrl +C
*/

class App extends React.Component {

  render() {
    return(
      <div className="container">
        <br/>
        <PersonCard firstName="Alejandra" lastName="Villa" age={30} hairColor="Grey"/>
        <br/>
        <PersonCard firstName="Ines" lastName="Caro" age={40} hairColor="Black"/>
        <br/>
        <PersonCard firstName="Alan" lastName="David" age={50} hairColor="Brunette"/>
        <br/>
        <PersonCard firstName="Daniel" lastName="Macias" age={50} hairColor="Black"/>
      </div>
    );
  }

}

export default App;
