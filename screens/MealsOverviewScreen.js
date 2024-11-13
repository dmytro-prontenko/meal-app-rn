import { useLayoutEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import { useRoute } from '@react-navigation/native'

import MealsList from '../components/MealList/MealList'
import { MEALS } from '../data/dummy-data'

const MealsOverviewScreen = ({ navigation }) => {
    const route = useRoute()
    const catId = route.params.categoryID
    const catTitle = route.params.categoryTitle
    const displayedMeals = MEALS.filter((meal) =>
        meal.categoryIds.includes(catId)
    )

    // Встановлення title для роуту зсередини, а не з App.js
    useLayoutEffect(() => {
        navigation.setOptions({ title: catTitle })
    }, [navigation, catTitle])

    return (
        <View style={styles.container}>
            <View>
                <MealsList items={displayedMeals} />
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
