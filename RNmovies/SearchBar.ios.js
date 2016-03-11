/**
 * @providesModule SearchBar
 */

'use strict';

import React, {
  ActivityIndicatorIOS,
  TextInput,
  StyleSheet,
  View,
} from 'react-native';

var SearchBar = React.createClass({
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search a movie..."
          style={styles.searchBarInput}
        />
        <ActivityIndicatorIOS
          style={styles.spinner}
        />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 64,
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30,
  },
  spinner: {
    width: 30,
  },
});

module.exports = SearchBar;
