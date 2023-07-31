import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Search from './components/Search';


import DemoContext from './demoContext';
import MovieDisplay from './components/MovieDisplay';

const App = () => {
  const [state, setState] = useState();

  const fetchData = async (input) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${input}&apikey=?`
    );
    const data = await response.json();
    setState(data);
  };

  return (
    <View style={styles.container}>
      <DemoContext.Provider value={{ fetchData, setState }}>
        <Header />
        <Search />
        <View style={styles.movies}>
          {state &&
            state.Search.map((item) => {
              return <MovieDisplay key={item.imdbID} id={item.imdbID} />;
            })}
        </View>
      </DemoContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  movies: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', flexWrap: 'wrap'

  },
});

export default App;
