import { View, Text, StyleSheet, Animated, TouchableHighlight, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import Notifications from './Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { FlatList, TextInput } from 'react-native-gesture-handler';


const SensorX_Warning = ({ navigation }) => {

  const [listData, setListData] = useState(
    Notifications.map((NotificationItem, index) => ({
      key: `${index}`,
      title: NotificationItem.title,
      date: NotificationItem.date,
      time: NotificationItem.time,
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
        <TouchableHighlight>
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
    const { swipeAnimatedValue, onDelete } = props;

    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={onDelete}>
          <MaterialCommunityIcons name="alarm-light" size={25} color="white" />
        </TouchableOpacity>
      </View>
    )
  }

  const renderHiddenItem = (data, rowMap) => {
    return (
      <HiddenItemWithActions
        data={data}
        rowMap={rowMap}
        onClose={() => closeRow(rowMap, data.item.key)}
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
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <SwipeListView
            data={[item]}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            leftOpenValue={75}
            rightOpenValue={-75}
            disableLeftSwipe
            useNativeDriver={false} // Set to true if there are performance issues
          />
        )}
      />
    </View>
  );
}

export default SensorX_Warning

const styles = StyleSheet.create({
  searchBar: {
    padding: 5,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    fontSize: 14,
  },
  //container: {
  //  backgroundColor: '#f4f4f4',
  //  flex: 1,
  //},
  //backTextWhite: {
  //  color: '#FFF',
  //},
  rowFront: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 70,
    margin: 5,
    marginBottom: 15,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
  rowBack: {
    flex: 1,
    margin: 5.1,
    marginBottom: 15,
  },
  backRightBtn: {
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
    paddingLeft: 25,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 7,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
});