import React, { useContext, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import demoContext from '../demoContext';

const Search = () => {
  const { fetchData } = useContext(demoContext);
  const [searchText, setSearchText] = useState('');

  const onSubmit = () => {
    fetchData(searchText);
    setSearchText('');
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        placeholder="Enter movie name"
      />
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Search;
