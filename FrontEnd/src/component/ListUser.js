import React, { Component } from 'react';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import firebase from '../firebase/index';

const database = firebase.firestore;
const users = database.collection('User');

class ListUser extends Component {
  state = {
    searchText: '',
    searchedColumn: '',
    userlist: []
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  query = users.get().then(snapshot => {
    snapshot.forEach(doc => {
      // console.log('user', doc.id, doc.data());
      let userlist = [...this.state.userlist];
      userlist.push({
        id: doc.id,
        email: doc.data().email,
        password: doc.data().password,
        nickname: doc.data().nickname,
        phone: doc.data().phone,
        role: doc.data().role
      });
      this.setState({ userlist });
    });
  });
  render() {
    const userlist = this.state.userlist;
    const columns = [
      {
        title: 'Nickname',
        dataIndex: 'nickname',
        key: 'nickname',
        // width: '20%',
        ...this.getColumnSearchProps('nickname')
      },
      {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'email',
        ...this.getColumnSearchProps('email')
      },
      {
        title: 'Password',
        dataIndex: 'password',
        key: 'password',
        // width: '20%',
        ...this.getColumnSearchProps('password')
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        ...this.getColumnSearchProps('phone')
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
        ...this.getColumnSearchProps('role')
      }
    ];
    return <Table columns={columns} dataSource={userlist} />;
  }
}

export default ListUser;
