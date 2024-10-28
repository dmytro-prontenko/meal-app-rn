import { FlatList, StyleSheet, Text, View } from 'react-native'

import { useRoute } from '@react-navigation/native'

import CategoryGridTile from '../components/CategoryGridTile'
import MealItem from '../components/MealItem'
import { MEALS } from '../data/dummy-data'

const MealsOverviewScreen = () => {
    const route = useRoute()
    const catId = route.params.categoryID
    const displayedMeals = MEALS.filter((meal) =>
        meal.categoryIds.includes(catId)
    )

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={displayedMeals}
                    renderItem={({ item }) => <MealItem item={item} />}
                    keyExtractor={(item) => item.id}
                    style={styles.innerContainer}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingVertical: 16,
    },
    innerContainer: {
        paddingRight: 16,
    },
})

export default MealsOverviewScreen
