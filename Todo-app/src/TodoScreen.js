// TodoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoScreen = () => {
  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: todoText, completed: false }]);
      setTodoText('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={todoText}
        onChangeText={(text) => setTodoText(text)}
        placeholder="Enter Todo"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onPress={() => handleToggleTodo(item.id)}
            onDelete={() => handleDeleteTodo(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
});

export default TodoScreen;
