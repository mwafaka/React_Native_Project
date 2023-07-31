import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Linking } from 'react-native';

const MovieDisplay = ({ id }) => {
    const [state, setState] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.omdbapi.com/?i=${id}&apikey=?`
                );
                const data = await response.json();
                setState(data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchData();
    }, [id]);

    console.log(state);
    const handleLinkPress = () => {
        const url = state.Poster; // Replace with your desired link URL
        Linking.openURL(url).catch((err) => console.error('An error occurred', err));
    };


    return (
        <View style={styles.container}>
            <View style={styles.movie}>
                <View style={styles.card}>
                    <Image source={{ uri: state.Poster }} style={styles.cardImage} />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>{state.Title}</Text>
                        <Text style={styles.cardText}>BoxOffice: {state.BoxOffice}</Text>
                        <Text style={styles.cardText}>Country: {state.Country}</Text>
                        {/* You can use TouchableOpacity instead of <a> tag in React Native */}
                        <Pressable style={styles.button} onPress={handleLinkPress}>
                            <Text style={styles.buttonText}>Go somewhere</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
    movie: {
        padding: 10,
    },
    card: {
        width: '18rem',

        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 5,
        padding: 10,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    cardBody: {
        marginTop: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardText: {
        fontSize: 16,
    },
    // button: {
    //   backgroundColor: '#dc3545',
    //   paddingHorizontal: 20,
    //   paddingVertical: 10,
    //   borderRadius: 5,
    // },
    // buttonText: {
    //   color: 'white',
    //   fontWeight: 'bold',
    // },
});

export default MovieDisplay;
