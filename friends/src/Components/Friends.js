import React from 'react';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class Friends extends React.Component {

    render(){
        return(
    <div>
        <img src="./public/asset/lambda-2.png" alt="Lambda Logo" />
        <h1>Lambda Student List</h1><br/>
        <Form 
            friends={this.props.friends}
            submitToList={this.props.submitToList}
            addNameToList={this.props.addNameToList}
            addAgeToList={this.props.addAgeToList}
            addEmailToList={this.props.addEmailToList}
            /><br/>
    {this.props.friends.map(friend => {
        return(
            <div key={friend.toString()}>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">First</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    <button type="submit" className="btn btn-info">Update</button>
                    <button type="submit" className="btn btn-danger">Remove</button>  
                    </tr>
                </thead>
            <tbody>
                    <tr>
                    <td>{friend.name}</td>
                    <td>{friend.age}</td>
                    <td>{friend.email}</td>
                    </tr>
            </tbody>
            </table>  
            </div>    
        )
    })}
    </div>
        )
    }
}


export default Friends;