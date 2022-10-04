import React from "react";

class PersonCard extends React.Component {

    constructor(props){
        super (props);
        this.state = {
            age: this.props.age
        }

    }

    birthday = () => {
        this.setState({age:this.state.age+1})
    }

    render(){

        const {firstName, lastName, age, hairColor} = this.props;

        return(
            <div className="card">
                <h4>{firstName} {lastName}</h4>
                <p><b>Age:</b>{this.state.age}</p>
                <p><b>Hair Color:</b>{hairColor}</p>
                <button className="btn btn-warning" onClick={this.birthday}> Birthday Button {firstName}</button>
            </div>
        )
    }
}
export default PersonCard;
