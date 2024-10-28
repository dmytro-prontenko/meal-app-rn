import { FlatList, StyleSheet, View } from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = ({ navigation }) => {
    const pressHandler = (item) => {
        navigation.navigate('Meals Overview', {
            categoryID: item.id,
            categoryTitle: item.title,
        })
    }
    return (
        <View style={styles.screen}>
            <FlatList
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <CategoryGridTile
                        title={item.title}
                        color={item.color}
                        onPress={() => pressHandler(item)}
                    />
                )}
                keyExtractor={(item) => item.id}
                numColumns="2"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {},
})

export default CategoriesScreen
