import React,{ Component } from 'react';

class AddUser extends Component{

    state = {
        name:null,
        firstname:null,
        adress:null,
        town:null,
        towncode:null,
        phone:null,
        mail:null,
        isEditing:false
    }
    //appel addUser (App.js)
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        e.target.reset();

    }
    // met à jour state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                <div className="input-field col s4">
                        <input name="name" autoComplete="off" placeholder="Nom" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s4">
                        <input name="firstname" autoComplete="off" placeholder="Prénom" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s4">
                        <input name="adress" autoComplete="off" placeholder="Adresse" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s4">
                        <input name="town" autoComplete="off" placeholder="Ville" required type="text" onChange={ this.updateState} />
                    </div>
                    
                    <div className="input-field col s2">
                        <input name="towncode" autoComplete="off" type="number" required placeholder="Code Postal" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input name="phone" autoComplete="off" type="number" required placeholder="téléphone" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s4">
                        <input name="mail" autoComplete="off" placeholder="e-mail" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add +" className="btn blue"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;