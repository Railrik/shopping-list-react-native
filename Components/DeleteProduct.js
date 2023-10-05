import {
    StyleSheet,
    Text,
    Pressable
} from 'react-native';

const DeleteProduct = ({ deleteProduct, idString }) => {

    const handleDelete = () => {
        deleteProduct(idString);
    };

    return (
        <Pressable onPress={handleDelete}>
            <Text style={styles.deleteButton}>X</Text>
        </Pressable>
    );
};

export default DeleteProduct;

const styles = StyleSheet.create({
    deleteButton: {
        color: 'maroon',
        fontSize: 20,
        fontWeight: "bold",
    }
})
