import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View } from 'react-native';
import Row from './Row';

class NativeTest extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }
  componentDidMount() {
    this.getMoviesFromApiAsync();
  }
  getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        let items = [];
        responseJson.movies.forEach((child) => {
          items.push({
            title: child.title,
            releaseYear: child.releaseYear
          });
        });
        this.setState({dataSource: this.state.dataSource.cloneWithRows(items)});

      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row {...data} />}
        />
      </View>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('NativeTest', () => NativeTest);
