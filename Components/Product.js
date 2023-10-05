import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

const Product = ({ name, deleteProduct, idString }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Pressable onLongPress={() => deleteProduct(idString)}>
                <Text style={styles.deleteButton}>X</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'peru',
        padding: 15,
        borderRadius: 10,
        marginVertical: 6,
    },
    name: {
        color: 'lavender',
        fontSize: 17,

    },
    deleteButton: {
        color: 'indianred',
        fontSize: 30,
        fontWeight: "bold",
    },
});

export default Product;
