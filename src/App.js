import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import PersonCard from "./componentes/PersonCard/PersonCard";


/* 
Inicializar proyecto: npm sart
Detener proyecto: Ctrl +C
*/

class App extends React.Component {

  render() {
    return(
      <div className="container">
        <PersonCard firstName="Alejandra" lastName="Villa" age={30} hairColor="Grey"/>
        <PersonCard firstName="Ines" lastName="Caro" age={40} hairColor="Black"/>
        <PersonCard firstName="Alan" lastName="David" age={50} hairColor="Brunette"/>
        <PersonCard firstName="Daniel" lastName="Macias" age={50} hairColor="Black"/>
      </div>
    );
  }

}

export default App;
