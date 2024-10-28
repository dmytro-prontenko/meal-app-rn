import {
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native'

const MealItem = ({ item }) => {
    const mealItemPressHandler = () => {}
    return (
        <View style={styles.itemContainer}>
            <Pressable
                onPress={mealItemPressHandler}
                style={({ pressed }) =>
                    Platform.OS === 'ios' && pressed && styles.buttonPressed
                }
                android_ripple={{
                    color: '#ccc',
                    foreground: true,
                }}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            source={{ uri: item.imageUrl }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{item.duration} m</Text>
                        <Text style={styles.detailItem}>
                            {item.complexity.toUpperCase()}
                        </Text>
                        <Text style={styles.detailItem}>
                            {item.affordability.toUpperCase()}
                        </Text>
                        {/*<Text>{item.ingredients}</Text>*/}
                        {/*<Text>{item.steps}</Text>*/}
                        {/*<Text>{item.isGlutenFree}</Text>*/}
                        {/*<Text>{item.isVegan}</Text>*/}
                        {/*<Text>{item.isVegetarian}</Text>*/}
                        {/*<Text>{item.isLactoseFree}</Text>*/}
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: Platform.select({
        ios: {
            margin: 8,
            borderRadius: 12,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            overflow: 'visible',
        },
        android: {
            margin: 8,
            borderRadius: 12,
            backgroundColor: 'white',
            elevation: 4,
            overflow: 'hidden',
        },
    }),
    innerContainer: {
        borderRadius: 12,
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed: {
        opacity: 0.7,
    },
})

export default MealItem
