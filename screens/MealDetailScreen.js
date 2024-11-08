import { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'
import {
    ActivityIndicator,
    Button,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { useDispatch } from 'react-redux'

import IconButton from '../components/IconButton'
import { addToFavorites } from '../store/slices/favoritesSlice'

const MealDetailsScreen = ({ route, navigation }) => {
    const dispatch = useDispatch()
    const [isImageLoading, setIsImageLoading] = useState(true)
    const {
        mealID,
        mealTitle,
        mealImage,
        mealIngredients,
        mealSteps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree,
        affordability,
        complexity,
        duration,
    } = route.params

    const headerButtonPressHandler = () => {
        dispatch(addToFavorites(mealID))
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: mealTitle,
            // title: 'Meal detail',
        })
    }, [navigation, mealTitle])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        onPress={headerButtonPressHandler}
                        icon="star"
                        color="#e2b497"
                    />
                )
            },
        })
    }, [navigation, headerButtonPressHandler])

    useEffect(() => {
        const loadImage = async () => {
            try {
                await Image.prefetch(mealImage)
                setIsImageLoading(false)
            } catch (error) {
                setIsImageLoading(false)
            }
        }
        loadImage()
    }, [mealImage])

    return (
        <ScrollView style={styles.mealContainer}>
            <View style={styles.imageContainer}>
                {isImageLoading && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                )}
                <Image
                    style={styles.image}
                    source={{ uri: mealImage }}
                    onError={() => setIsImageLoading(false)}
                />
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{mealTitle}</Text>
                <View style={styles.mealDetails}>
                    <Text style={styles.detailItem}>{duration} m</Text>
                    <Text style={styles.detailItem}>
                        {complexity.toUpperCase()}
                    </Text>
                    <Text style={styles.detailItem}>
                        {affordability.toUpperCase()}
                    </Text>
                </View>

                <View style={styles.subtitleContainer}>
                    <Text style={styles.sectionTitle}>Ingredients</Text>
                </View>
                <View style={styles.listContainer}>
                    {mealIngredients.map((ingredient, index) => (
                        <Text key={ingredient} style={styles.listItem}>
                            • {ingredient}
                        </Text>
                    ))}
                </View>

                <View style={styles.subtitleContainer}>
                    <Text style={styles.sectionTitle}>Steps</Text>
                </View>
                <View style={styles.listContainer}>
                    {mealSteps.map((step, index) => (
                        <Text key={index} style={styles.listItem}>
                            {index + 1}. {step}
                        </Text>
                    ))}
                </View>

                <View style={styles.dietInfo}>
                    <Text style={styles.dietItem}>
                        {isGlutenFree ? '✓ Gluten Free' : '✗ Contains Gluten'}
                    </Text>
                    <Text style={styles.dietItem}>
                        {isVegan ? '✓ Vegan' : '✗ Non-Vegan'}
                    </Text>
                    <Text style={styles.dietItem}>
                        {isVegetarian ? '✓ Vegetarian' : '✗ Non-Vegetarian'}
                    </Text>
                    <Text style={styles.dietItem}>
                        {isLactoseFree
                            ? '✓ Lactose Free'
                            : '✗ Contains Lactose'}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mealContainer: {},
    imageContainer: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    loaderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    detailContainer: {
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    mealDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 14,
        color: 'white',
    },
    subtitleContainer: {
        borderBottomWidth: 2,
        borderColor: '#e2b497',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 8,
        textAlign: 'center',
        color: '#e2b497',
        paddingBottom: 8,
    },
    listContainer: {
        marginVertical: 12,
    },
    listItem: {
        color: '#3f2f25',
        fontSize: 18,
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#e2b497',
        borderWidth: 2,
        borderRadius: 8,
        overflow: 'hidden',
    },
    dietInfo: {
        marginTop: 16,
        marginBottom: 32, // Додав відступ знизу для кращого скролінгу
        padding: 8,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 8,
    },
    dietItem: {
        color: 'white',
        fontSize: 14,
        marginVertical: 4,
    },
})

export default MealDetailsScreen
