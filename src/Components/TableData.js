import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

  deleteButtonClick = (idUser) => {
    this.props.deleteUser(idUser)
  }

  mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
    <TableDataRow
      changeEditUserStatus = {() => this.props.changeEditUserStatus()}
      editFunClick= {() => this.props.editFun(value)}
      stt={key}
      key={key}
      userName={value.name}
      tel={value.tel}
      permission={value.Permission}
      id={value.id}
      deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
    />
  ))
  render() {
    return (
      <div className="col">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ten</th>
              <th>DT</th>
              <th>Quyen</th>
              <th>Thao tac</th>
            </tr>
          </thead>
          <tbody>
            {this.mappingDataUser()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableData;