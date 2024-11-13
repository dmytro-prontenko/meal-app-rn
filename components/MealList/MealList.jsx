import { FlatList, StyleSheet, Text, View } from 'react-native'

import MealItem from './MealItem'

const MealsList = ({ items }) => {
    return (
        <View>
            <FlatList
                data={items}
                renderItem={({ item }) => <MealItem item={item} />}
                keyExtractor={(item) => item.id}
                style={styles.innerContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        paddingRight: 16,
    },
})

export default MealsList
