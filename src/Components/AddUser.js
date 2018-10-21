import React, { Component } from 'react';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      tel: '',
      Permission: ''
    }
  }
  
  isChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
    // package to item
    var item = {}
    item.id = this.state.id
    item.name = this.state.name
    item.tel = this.state.tel
    item.Permission = this.state.Permission
  }

  kiemTraTrangThai = () => {
    if(this.props.hienThiForm === true) {
      return (
        <div className="col-12">
          <form>
          <div className="card border-primary mb-3 mt-2">
            <div className="card-header">Them moi user vao he thong</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input name='name' onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Ten user" />
              </div>
              <div className="form-group">
                <input name='tel' onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="Dien thoai" />
              </div>
              <div className="form-group">
                <select className="custom-select" name='Permission' onChange={(event) => this.isChange(event)} >
                  <option value>Chon quyen mac dinh</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modetator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="form-group">
                <input type ='reset' className="btn btn-block btn-primary" onClick={() => this.props.add(this.state.name, this.state.tel, this.state.Permission)} value='Them moi'/>
              </div>
            </div>
          </div>
          </form>
      </div>
      )
    }
  }
  render() {

    return (
      <div>
        {
          this.kiemTraTrangThai()
        }
      </div>
    );
  }
}

export default AddUser;