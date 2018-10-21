import React, { Component } from 'react';
import EditUser from './EditUser'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue : '',
      userObj: {}
    }
  }

  getUserEditInfo = (info) => {
    this.setState({
      userObj: info
    })
    console.log('info', info)
    this.props.getUserEditInfoApp(info)
  }

  isShowEditForm = () => {
    if (this.props.editUserStatus === true) {
      return <EditUser
        getUserEditInfo = {(info) => this.getUserEditInfo(info)}
        userEditObject={this.props.userEditObject}
        changeEditUserStatus = {() => this.props.changeEditUserStatus()}
      />
    }
  }

  isChange = (event) => {
    this.setState({
      tempValue: event.target.value
    })
    this.props.checkConnectProps(this.state.tempValue)
  }

  hienThiNut = () => {
    if(this.props.hienThiForm === true) {
      return (
        <div
          className="btn btn-block btn-outline-secondary mt-2"
          onClick={()=> this.props.ketNoi()}
        >
          Dong lai
        </div>
      )
    } else {
      return (
        <div
          className="btn btn-block btn-outline-info mt-2"
          onClick={()=> this.props.ketNoi()}
        >
          Them moi
      </div>
      )
    }
  }

  render() {
    return (
      <div className="col-12">
        {this.isShowEditForm()}
        <div className="form-group">
          <div className="btn-group" style={{width: 600}}>
            <input onChange={(event)=> this.isChange(event)} type="text" className="form-control" placeholder="Nhap tu khoa" />
            <div className="btn btn-info" onClick={() => this.props.checkConnectProps(this.state.tempValue)}>Tim kiem</div>
          </div>
          {this.hienThiNut()}
        </div>
        <hr />
      </div>
    );
  }
}

export default Search;