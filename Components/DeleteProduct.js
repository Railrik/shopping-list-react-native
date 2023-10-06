import {
    StyleSheet,
    Text,
    Pressable
} from 'react-native';

const DeleteProduct = ({ deleteProductModal, idString }) => {

    const handleDeleteConfirmModal = () => {
        deleteProductModal(idString)
    };

    return (
        <Pressable onPress={handleDeleteConfirmModal}>
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
