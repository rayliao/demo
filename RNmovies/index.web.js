/**
 * RNmovies
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Navigator,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import MovieScreen from './MovieScreen';
import SearchScreen from './SearchScreen';

var RouteMapper = function(route, navigationOperations, onComponentR) {
  if (route.name === 'search') {
    return (
      <SearchScreen navigator={navigationOperations} />
    );
  } else if (route.name === 'movie') {
    return (
      <View style={{flex: 1}}>
        <MovieScreen
          style={{flex: 1}}
          navigator={navigationOperations}
          movie={route.movie}
        />
      </View>
    );
  }
};

class RNmovies extends React.Component {
  render() {
    var initialRoute = {name: 'search'};
    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        renderScene={RouteMapper}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('RNmovies', () => RNmovies);

if(Platform.OS == 'web'){
  var app = document.createElement('div');
  document.body.appendChild(app);

  AppRegistry.runApplication('RNmovies', {
    rootTag: app
  })
}

module.exports = RNmovies;
