import { FlatList, Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const GuidedAffirmationsGallery = ({ key, title, preview }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <FlatList
                data={preview}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Link href={`/affirmations/${item.id}`} asChild>
                        <Pressable style={styles.itemContainer}>
                            <Image
                                source={item.image}
                                resizeMode="cover"
                                style={styles.image}
                            />
                        </Pressable>
                    </Link>
                )}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

export default GuidedAffirmationsGallery;

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    titleContainer: {
        marginBottom: 10,
    },
    title: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    flatListContent: {
        paddingVertical: 10,
    },
    itemContainer: {
        height: 150,
        width: 120,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
