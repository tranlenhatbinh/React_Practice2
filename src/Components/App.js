import React, { Component } from 'react';
import './../App.css';
import Header from './Header'
import Search from './Search'
import TableData from './TableData'
import AddUser from './AddUser'
import DataUser from './Data.json'

// Use uuid to create unique Id
const uuidv1 = require('uuid/v1')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      searchText: '',
      editUserStatus: false,
      userEditObject: {}
    }
  }

  componentWillMount() {
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(DataUser))
    }else {
      var temp = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        data: temp
      })
    }
  }

  changeEditUserStatus = () => {
    this.setState ({
      editUserStatus: !this.state.editUserStatus
    })
  }

  doiTrangThai = () => {
    this.setState ({
      hienThiForm: !this.state.hienThiForm
    })
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    })
  }

  getUserData = (name, tel, Permission) => {
    var item ={}
    item.id = uuidv1()
    item.name= name
    item.tel= tel
    item.Permission= Permission
    var items = this.state.data
    items.push(item)
    this.setState({
      data: items
    })
    localStorage.setItem('userData', JSON.stringify(items))
  }

  editUser = (user) => {
    this.setState({
      userEditObject: user
    })
  }
  
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id) {
        value.name= info.name
        value.tel = info.tel
        value.Permission = info.Permission
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data))
  }

  deleteUser = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser)
    this.setState({
      data: tempData
    })
    localStorage.setItem('userData', JSON.stringify(tempData))
  }

  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item)
      }
    })
    return (
      <div className="App">
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                userEditObject= {this.state.userEditObject}
                checkConnectProps= {(dl) => this.getTextSearch(dl)}
                ketNoi = {() => this.doiTrangThai()}
                hienThiForm={this.state.hienThiForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus = {() => this.changeEditUserStatus()}
              />
              <TableData
                changeEditUserStatus = {() => this.changeEditUserStatus()}
                editFun= {(user) => {this.editUser(user)}}
                dataUserProps ={ketqua}
                deleteUser={(idUser) => this.deleteUser(idUser)}
              />
              <AddUser add={(name, tel, Permission) => this.getUserData(name, tel, Permission)}hienThiForm={this.state.hienThiForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
