import { Image, StyleSheet, Text, View } from 'react-native'

const MealItem = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text>{item.title}</Text>
            <Text>{item.ingredients}</Text>
            <Text>{item.steps}</Text>
            <Text>{item.duration}</Text>
            <Text>{item.complexity}</Text>
            <Text>{item.affordability}</Text>
            <Text>{item.isGlutenFree}</Text>
            <Text>{item.isVegan}</Text>
            <Text>{item.isVegetarian}</Text>
            <Text>{item.isLactoseFree}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {},
    image: {
        width: 100,
        height: 100,
    },
})

export default MealItem
