import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import Database from './Database';
import {TextInput, FlatList} from 'react-native-gesture-handler';

const Critical = () => {
  const [input, setInput] = useState('');
  const [listData, setListData] = useState(Database);

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight style={{...styles.rowFront}}>
        <>
          <View style={styles.titleContainer}>
            <Text style={{...styles.title, fontSize: 16}}>{item.title}</Text>
          </View>
          <View style={styles.dateTimeContainer}>
            <Text style={{...styles.date, fontSize: 12}}>{item.date}</Text>
            <Text style={{...styles.date, fontSize: 12, alignSelf: 'flex-end'}}>
              {item.time}
            </Text>
          </View>
        </>
      </TouchableHighlight>
    );
  };

  const filteredData = listData.filter(item =>
    item.title.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#999"
      />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default Critical;

const styles = StyleSheet.create({
  searchBar: {
    padding: 5,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    fontSize: 14,
  },
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    marginHorizontal: 15,
    height: 70,
    marginBottom: 15,
    elevation: 5,
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateTimeContainer: {
    justifyContent: 'center',
  },
  rowBack: {
    flex: 1,
    margin: 5,
    marginBottom: 15,
  },
  backLeftBtn: {
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingLeft: 25,
  },
  backLeftBtnLeft: {
    backgroundColor: 'orange',
    left: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#454545',
  },
  date: {
    fontSize: 12,
    color: '#565051',
  },
});
