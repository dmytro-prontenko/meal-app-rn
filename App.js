import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'

import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'

// Імпортуємо store
import CategoriesScreen from './screens/CategoriesScreen'
import FavoritesMeals from './screens/FavoritesMeals'
import MealDetailsScreen from './screens/MealDetailScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
// Додаємо Provider
import { store } from './store'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: '#e2b497',
                sceneContainerStyle: { backgroundColor: '#3f2f25' },
                drawerContentStyle: { backgroundColor: '#351401' },
                drawerInactiveTintColor: '#e2b497',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#e2b497',
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    title: 'All categories',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="menu" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesMeals}
                options={{
                    title: 'Favorites',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="star" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar style="light" />
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: '#351401' },
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
                        />
                        <Stack.Screen
                            name="MealDetails"
                            component={MealDetailsScreen}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
