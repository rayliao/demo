'use strict';

import React, {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var MovieScreen = React.createClass({
  render() {
    var content = <ListView />;
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <Image
            style={styles.detailsImage}
          />
          <View style={styles.rightPane}>
            <Text style={styles.movieTitle}>the movie title</Text>
            <Text>1989.09.03</Text>
            <View style={styles.mpaaWrapper}>
              <Text style={styles.mpaaText}>
                rating
              </Text>
            </View>
            <Ratings />
          </View>
        </View>
        <View style={styles.separator} />
        <Text>
          synopsis
        </Text>
        <View style={styles.separator} />
        <Cast />
      </ScrollView>
    )
  }
});

var Ratings = React.createClass({
  render: function() {
    return (
      <View>
        <View style={styles.rating}>
          <Text style={styles.ratingTitle}>Critics:</Text>
          <Text>
          </Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingTitle}>Audience:</Text>
          <Text>
          </Text>
        </View>
      </View>
    );
  },
});

var Cast = React.createClass({
  render: function() {
    return (
      <View>
        <Text style={styles.castTitle}>Actors</Text>
        <Text style={styles.castActor}>
          movie actor
        </Text>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  rightPane: {
    justifyContent: 'space-between',
    flex: 1,
  },
  movieTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  rating: {
    marginTop: 10,
  },
  ratingTitle: {
    fontSize: 14,
  },
  ratingValue: {
    fontSize: 28,
    fontWeight: '500',
  },
  mpaaWrapper: {
    alignSelf: 'flex-start',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 3,
    marginVertical: 5,
  },
  mpaaText: {
    fontFamily: 'Palatino',
    fontSize: 13,
    fontWeight: '500',
  },
  mainSection: {
    flexDirection: 'row',
  },
  detailsImage: {
    width: 134,
    height: 200,
    backgroundColor: '#eaeaea',
    marginRight: 10,
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1 / PixelRatio.get(),
    marginVertical: 10,
  },
  castTitle: {
    fontWeight: '500',
    marginBottom: 3,
  },
  castActor: {
    marginLeft: 2,
  },
});

module.exports = MovieScreen;
