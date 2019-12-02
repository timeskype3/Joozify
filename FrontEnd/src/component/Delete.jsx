import React, { Component } from 'react';
import firebase from '../firebase/index';
import { Table, Button, Input, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

const database = firebase.firestore;
const Music = database.collection('Music');

export default class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      Musiclist: [],
      searchText: '',
      searchedColumn: ''
    };
  }
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
  query = Music.get().then(snapshot => {
    snapshot.forEach(doc => {
      let Musiclist = [...this.state.Musiclist];
      const shortUrlImage = doc.data().UrlImage.substring(0, 40) + '...';
      const shortUrlMusic = doc.data().UrlMusic.substring(0, 40) + '...';
      Musiclist.push({
        key: doc.id,
        Artist: doc.data().Artist,
        Album: doc.data().Album,
        Genre: doc.data().Genre,
        Title: doc.data().Title,
        UrlImage: shortUrlImage,
        UrlMusic: shortUrlMusic,
        Date: doc.data().Date
      });
      this.setState({ Musiclist });
    });
  });

  onBtnDelete = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false
      });
    }, 1000);

    const task = this.state.selectedRowKeys;

    const deletedTask = task.map(e => {
      return Music.doc(e).delete();
    });

    Promise.all(deletedTask).then(() => {
      return this.setState(prevState => {
        return {
          Musiclist: prevState.Musiclist.filter(
            e => !prevState.selectedRowKeys.includes(e.key)
          )
        };
      });
    });
  };

  onSelectChange = selectedRowKeys => {
    // console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    // console.log('cur states', this.state);
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    const Musiclist = this.state.Musiclist;
    const columns = [
      {
        title: 'Title',
        dataIndex: 'Title',
        ...this.getColumnSearchProps('Title')
      },
      {
        title: 'Artist',
        dataIndex: 'Artist',
        ...this.getColumnSearchProps('Artist')
      },
      {
        title: 'Album',
        dataIndex: 'Album',
        ...this.getColumnSearchProps('Album')
      },
      {
        title: 'Genre',
        dataIndex: 'Genre',
        ...this.getColumnSearchProps('Genre')
      },
      {
        title: 'UrlImage',
        dataIndex: 'UrlImage',
        ...this.getColumnSearchProps('UrlImage')
      },
      {
        title: 'UrlMusic',
        dataIndex: 'UrlMusic',
        ...this.getColumnSearchProps('UrlMusic')
      },
      {
        title: 'Date',
        dataIndex: 'Date',
        ...this.getColumnSearchProps('Date')
      }
    ];
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.onBtnDelete}
            disabled={!hasSelected}
            loading={loading}
            className="button is-danger"
          >
            Delete
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={Musiclist}
        />
      </div>
    );
  }
}
