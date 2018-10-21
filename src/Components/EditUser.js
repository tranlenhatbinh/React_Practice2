import React, { Component } from 'react';

class EditUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      Permission: this.props.userEditObject.Permission
    }
  }

  isChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
  }

  saveButton = () => {
    var info = {}
    info.id = this.state.id
    info.name = this.state.name
    info.tel = this.state.tel
    info.Permission = this.state.Permission
    this.props.getUserEditInfo(info)
    this.props.changeEditUserStatus()
  }
  
  render() {

    return (
      <div className="row">
        <div className="col-12">
          <form>
            <div className="card text-white bg-warning mb-3 mt-2">
              <div className="card-header text-center">Sua thong tin User</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} name='name' type="text" className="form-control" placeholder="Ten user" />
                </div>
                <div className="form-group">
                  <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} name='tel' type="text" className="form-control" placeholder="Dien thoai" />
                </div>
                <div className="form-group"></div>
                  <select onChange={(event) => this.isChange(event)} className="custom-select" name='Permission' defaultValue={this.props.userEditObject.Permission} required >
                    <option value>Chon quyen mac dinh</option>
                    <option value={1}>Admin</option>
                    <option value={2}>Modetator</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <input type ='reset' className="btn btn-block btn-danger" onClick= {() => this.saveButton()} value='Sua'/>
                </div>
              </div>
            </form>
        </div>
      </div>
    );
  }
}

export default EditUser