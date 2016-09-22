import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {

  },
  text: {

  }
});

const Row = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {`${props.title} (Released ${props.releaseYear})`}
    </Text>
  </View>
);

export default Row;
