import { Button, StyleSheet, Text, View } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

import CategoriesScreen from './screens/CategoriesScreen'
import FavoritesMeals from './screens/FavoritesMeals'
import MealDetailScreen from './screens/MealDetailScreen'
import MealDetailsScreen from './screens/MealDetailScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#351401',
                },
                headerTintColor: '#e2b497',
                sceneContainerStyle: { backgroundColor: '#3f2f25' },
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{ title: 'All categories' }}
            />
            <Drawer.Screen name="Favorites" component={FavoritesMeals} />
        </Drawer.Navigator>
    )
}

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
                        name="DrawerScreen"
                        component={DrawerNavigator}
                        options={{
                            title: 'All categories',
                            headerShown: false,
                        }}
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
