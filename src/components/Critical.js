import { View, Text, StyleSheet, Animated, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import Database from './Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-gesture-handler';

const Critical = ({ navigation }) => {

  const [listData, setListData] = useState(
    Database.map((DatabaseItem, index) => ({
      key: `${index}`,
      title: DatabaseItem.title,
      info: DatabaseItem.info,
      date: DatabaseItem.date,
      time: DatabaseItem.time,
      country: DatabaseItem.country,
      customer: DatabaseItem.customer,
      site: DatabaseItem.site,
      device: DatabaseItem.device,
      image: DatabaseItem.image,
    })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key == rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  }

  const handlePress = (item) => {
    // Navigate to the 'MessageDetail' screen and pass the item data as a parameter
    navigation.navigate('Details', { item });
  };

  const VisibleItem = props => {
    const { data } = props;

    return (
      <View style={styles.rowFront}>
        <TouchableHighlight>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ ...styles.date, fontSize: 12 }}>
              {data.item.date}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => handlePress(data)}>
          <View>
            <Text style={{ ...styles.title, fontSize: 16 }}>
              {data.item.title}
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ ...styles.date, fontSize: 12 }}>
              {data.item.time}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  const renderItem = (data, rowMap) => {
    return <VisibleItem data={data} />
  };

  const HiddenItemWithActions = props => {
    const { onDelete } = props;

    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backLeftBtn, styles.backLeftBtnLeft]} onPress={onDelete}>
          <MaterialCommunityIcons name="alert" size={25} color="white" />
        </TouchableOpacity>
      </View>
    )
  }

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onDelete={() => deleteRow(rowMap, data.item.key)}
      />
    );
  };

  const [input, setInput] = useState('');

  const filteredData = listData.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={input}
        onChangeText={(text) => setInput(text)}
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#999"
      />
      <SwipeListView
        data={filteredData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={75}
        disableLeftSwipe
      />
    </View>
  )
}

export default Critical

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
    borderRadius: 5,
    height: 70,
    margin: 5,
    marginBottom: 15,
    elevation: 5,
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