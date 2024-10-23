import { StyleSheet, View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import CategoriesScreen from './screens/CategoriesScreen'

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <CategoriesScreen />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
})
