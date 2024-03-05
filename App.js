import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const colors = ['red', 'orange', 'yellow', 'green'];

  const addGoalHandler = () => {
    if (goal.trim() === '') {
      return; 
    }

    const color = colors[currentColorIndex % colors.length];
    setCurrentColorIndex(currentColorIndex + 1);

    setGoals((prevGoals) => [...prevGoals, { id: Math.random().toString(), text: goal, color }]);
    setGoal('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.input}
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <Button title="My goal" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <View style={[styles.listItem, { backgroundColor: itemData.item.color }]}>
            <Text>{itemData.item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default App;