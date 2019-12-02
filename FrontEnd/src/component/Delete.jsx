import React, { Component } from 'react';
import firebase from '../firebase/index';
import { Table, Button } from 'antd';

const database = firebase.firestore;
const Music = database.collection('Music');

const columns = [
  {
    title: 'Title',
    dataIndex: 'Title'
  },
  {
    title: 'Artist',
    dataIndex: 'Artist'
  },
  {
    title: 'Album',
    dataIndex: 'Album'
  },
  {
    title: 'Genre',
    dataIndex: 'Genre'
  },
  {
    title: 'UrlImage',
    dataIndex: 'UrlImage'
  },
  {
    title: 'UrlMusic',
    dataIndex: 'UrlMusic'
  },
  {
    title: 'Date',
    dataIndex: 'Date'
  }
];

export default class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      Musiclist: [
        // {
        //   Artist: '',
        //   Album: '',
        //   Genre: '',
        //   Title: '',
        //   UrlImage: '',
        //   UrlMusic: '',
        //   Date: ''
        // }
      ]
    };
  }

  query = Music.get().then(snapshot => {
    snapshot.forEach(doc => {
      let Musiclist = [...this.state.Musiclist];
      const shortUrlImage = doc.data().UrlImage.substring(0, 40) + '...';
      const shortUrlMusic = doc.data().UrlMusic.substring(0, 40) + '...';
      Musiclist.push({
        // docId: doc.id,
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
      // console.log('Musiclist:::', Musiclist);
      // console.log('doc id: ',doc.id, 'doc email: ',doc.data().email);
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

    console.log('delete lists');
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
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    console.log('cur states', this.state);
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    const hasSelected = selectedRowKeys.length > 0;
    const Musiclist = this.state.Musiclist;
    // console.log('MusicKey: ', Musiclist.keys);
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
