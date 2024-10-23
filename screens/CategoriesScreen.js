import { FlatList, StyleSheet, View } from 'react-native'

import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = () => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <CategoryGridTile title={item.title} color={item.color} />
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
