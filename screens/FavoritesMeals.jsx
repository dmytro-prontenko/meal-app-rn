import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import { selectFavorites } from '../store/slices/favoritesSlice'

const FavoritesMeals = () => {
    const favoriteMeals = useSelector(selectFavorites)
    useEffect(() => {
        console.log(favoriteMeals)
    }, [favoriteMeals])
    return (
        <View>
            {favoriteMeals.map((mealId) => (
                <View key={mealId}>
                    <Text>{mealId}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({})

export default FavoritesMeals
