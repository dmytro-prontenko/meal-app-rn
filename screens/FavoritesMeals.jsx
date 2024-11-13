import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import MealsList from '../components/MealList/MealList'
import { MEALS } from '../data/dummy-data'
import { selectFavorites } from '../store/slices/favoritesSlice'

const FavoritesMeals = () => {
    const favoriteMeals = useSelector(selectFavorites)
    const favoritesList = favoriteMeals.map((favMeal) => {
        return MEALS.find((meal) => meal.id === favMeal)
    })

    useEffect(() => {}, [favoriteMeals])
    return (
        <View style={styles.container}>
            <MealsList items={favoritesList} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingVertical: 16,
    },
})

export default FavoritesMeals
