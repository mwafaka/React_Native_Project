// TodoItem.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TodoItem = ({ item, onPress, onDelete }) => {
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onDelete}>
      <View style={styles.item}>
        <Text style={item.completed ? styles.completedText : styles.text}>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "lightgrey",
    padding: 15,
    marginVertical: 8,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  },
  completedText: {
    fontSize: 18,
    textDecorationLine: "line-through",
    color: "#888",
  },
});

export default TodoItem;
