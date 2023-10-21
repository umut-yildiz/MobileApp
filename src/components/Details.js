import { View, Text, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';

const Details = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> {item.item.title}</Text>
      <View style={styles}>
        <Text style={styles.info}> Description: {item.item.info}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}> - Date: {item.item.date}</Text>
        <Text style={styles.infoText}> - Time: {item.item.time}</Text>
        <Text style={styles.infoText}> - Country: {item.item.country}</Text>
        <Text style={styles.infoText}> - Customer: {item.item.customer}</Text>
        <Text style={styles.infoText}> - Site: {item.item.site}</Text>
        <Text style={styles.infoText}> - Device: {item.item.device}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
  },
  headerButton: {
    marginRight: 10,
  },
});

export default Details;