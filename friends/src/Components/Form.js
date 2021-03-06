import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends React.Component {
    
    render() {
        return(
<form className="form-inline">
    <label className="sr-only">First Name</label>
      <input type="text" onChange={this.props.addNameToList} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="First Name"/>

    <label className="sr-only">Age</label>
      <input type="text" onChange={this.props.addAgeToList} className="form-control mb-2 sm-sm-2" id="inlineFormInputName2" placeholder="Age"/>
    <label className="sr-only">Email</label>
    <div className="input-group mb-2 mr-sm-2">
    <div className="input-group-prepend">
    <div className="input-group-text">@</div>
    </div>
      <input type="text" onChange={this.props.addEmailToList} className="form-control" id="inlineFormInputGroupUsername2" placeholder="Email"/>
    </div>

    <button type="submit" onClick={this.props.submitToList} className="btn btn-primary mb-2">Submit</button>
</form>
        )
    }
}

export default Form;