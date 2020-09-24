import React, { Component } from 'react';

class Users extends Component{

    // appel updateUser (BrasserieClients.js)
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.name.value,this.firstname.value, this.adress.value,this.town.value,this.towncode.value,this.phone.value,this.mail.value);
    }

    render(){

        const {allUsers, pressEditBtn, pressDelete} = this.props;

        const usersList = allUsers.map((user, index) => {

            return user.isEditing === true ? (
                
                <tr  key={index}>
                    <td><input type="text" ref={(val) => {this.name = val}} required defaultValue={user.name}/></td>
                    <td><input type="text" ref={(val) => {this.firstname = val}} required defaultValue={user.firstname}/></td>
                    <td><input type="text" ref={(val) => {this.adress = val}} required defaultValue={user.adress}/></td>
                    <td><input type="text" ref={(val) => {this.town = val}} required defaultValue={user.town}/></td>
                    <td><input type="text" ref={(val) => {this.towncode = val}} required defaultValue={user.towncode}/></td>
                    <td><input type="number" ref={(val) => {this.phone = val}} required defaultValue={user.phone}/></td>
                    <td><input type="text" ref={(val) => {this.mail = val}} required defaultValue={user.mail}/></td>
                    <td>
                    <input type="button" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}} className="btn green"/>
                    </td>
                </tr>  

            ) : (

                <tr  key={index}>
                    <td>{user.name}</td>
                    <td>{user.firstname}</td>
                    <td>{user.adress}</td>
                    <td>{user.town}</td>
                    <td>{user.towncode}</td>
                    <td>{user.phone}</td>
                    <td>{user.mail}</td>
                    <td><button className="btn white black-text" onClick={() => pressEditBtn(index)}>Edit</button>  |  <button className="btn red" onClick={()=>pressDelete(index)}>Delete</button></td>
                </tr>

            );
        });

        return(
            <table className="striped">
                <thead>
                    <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Adresse</th>
                    <th>Ville</th>
                    <th>Code postal</th>
                    <th>Tel</th>
                    <th>Mail</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        );
    }
}

export default Users;