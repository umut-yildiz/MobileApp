import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  const criticalSubmit = () => {
    navigation.navigate('SensorX');
  }

  const warningSubmit = () => {
    navigation.navigate('SensorX');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.criticalButton}
        onPress={criticalSubmit}
      >
        <Text style={styles.buttonText}>Critical</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.warningButton}
        onPress={warningSubmit}
      >
        <Text style={styles.buttonText}>Warning</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 20,
  },
  criticalButton: {
    backgroundColor: '#D21404',
    width: 170,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  warningButton: {
    backgroundColor: '#ED820E',
    width: 170,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

export default App;
