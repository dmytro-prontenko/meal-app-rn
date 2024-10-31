import { Button, StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import CategoriesScreen from './screens/CategoriesScreen'
import MealDetailScreen from './screens/MealDetailScreen'
import MealDetailsScreen from './screens/MealDetailScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#351401',
                        },
                        headerTintColor: '#e2b497',
                        contentStyle: { backgroundColor: '#3f2f25' },
                    }}
                >
                    <Stack.Screen
                        name="MealsCategories"
                        component={CategoriesScreen}
                        options={{ title: 'All categories' }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                        // 1. Динамічне заповнення options через callback
                        // options={({ route, navigation }) => {
                        //     const catTitle = route.params.categoryTitle
                        //     return {
                        //         title: catTitle,
                        //     }
                        // }}
                    />
                    <Stack.Screen
                        name="MealDetails"
                        component={MealDetailsScreen}
                        options={{}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
