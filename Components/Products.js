import { StyleSheet, Text, View } from 'react-native'

const Products = () => {
    return (
        <View style={styles.items}>
            <Text style={styles.element}>Product one</Text>
            <Text style={styles.element}>Product two</Text>
            <Text style={styles.element}>Product three</Text>
            <Text style={styles.element}>Product Four</Text>
            <Text style={styles.element}>Product Five</Text>
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    items: {
    },
    element: {
        backgroundColor: "peru",
        color: "lavender",
        padding: 20,
        fontSize: 17,
        //group margin top and bottom
        marginVertical: 6,
    }

})