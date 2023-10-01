import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar,} from 'react-native';

const DATA = [
  {
    title: 'Today',
    data: ['Alarm 1', 'Alarm 2', 'Alarm 1'],
  },
  {
    title: 'Yesterday',
    data: ['Alarm 3', 'Alarm 2'],
  },
  {
    title: 'Two Days Ago',
    data: ['Alarm 2', 'Alarm 1', 'Alarm 1'],
  },
  {
    title: 'Three Days Ago',
    data: ['Alarm 1'],
  },
];

const MOS = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
  },
  title: {
    fontSize: 24,
  },
});

export default MOS;