import { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native'

const MealDetailsScreen = ({ route, navigation }) => {
    const [isImageLoading, setIsImageLoading] = useState(true)
    const {
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

    console.log(route.params)

    useLayoutEffect(() => {
        navigation.setOptions({ title: mealTitle })
    }, [navigation, mealTitle])

    useEffect(() => {
        const loadImage = async () => {
            try {
                await Image.prefetch(mealImage)
                setIsImageLoading(false)
            } catch (error) {
                console.error('Error prefetching image:', error)
                setIsImageLoading(false)
            }
        }

        loadImage()
    }, [mealImage])

    return (
        <ScrollView style={styles.mealContainer}>
            <Text style={styles.title}>{mealTitle}</Text>
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
            <View style={styles.mealDetails}>
                <Text style={styles.detailItem}>{duration} m</Text>
                <Text style={styles.detailItem}>
                    {complexity.toUpperCase()}
                </Text>
                <Text style={styles.detailItem}>
                    {affordability.toUpperCase()}
                </Text>
            </View>

            <Text style={styles.sectionTitle}>Ingredients</Text>
            <View style={styles.listContainer}>
                {mealIngredients.map((ingredient, index) => (
                    <Text key={ingredient} style={styles.listItem}>
                        • {ingredient}
                    </Text>
                ))}
            </View>

            <Text style={styles.sectionTitle}>Steps</Text>
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
                    {isLactoseFree ? '✓ Lactose Free' : '✗ Contains Lactose'}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mealContainer: {
        padding: 16,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 16,
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
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 8,
        color: 'white',
    },
    listContainer: {
        marginBottom: 16,
    },
    listItem: {
        color: 'white',
        fontSize: 16,
        marginVertical: 4,
        paddingLeft: 8,
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
