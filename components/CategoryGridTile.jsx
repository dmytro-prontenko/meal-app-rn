import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'

const CategoryGridTile = ({ title, color, onPress }) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    Platform.OS === 'ios' && pressed && styles.buttonPressed,
                ]}
                android_ripple={{
                    color: '#ccc',
                    foreground: true,
                }}
                onPress={onPress}
            >
                <View
                    style={[styles.innerContainer, { backgroundColor: color }]}
                >
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 2,
            },
            android: {
                elevation: 0.4,
                overflow: 'hidden',
            },
        }),
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.7,
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})

export default CategoryGridTile
