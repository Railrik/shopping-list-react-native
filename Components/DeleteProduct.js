import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';

const DeleteProduct = ({ deleteProductModal, idString }) => {

    const handleDeleteConfirmModal = () => {
        deleteProductModal(idString)
    };

    return (
        <Pressable onPress={handleDeleteConfirmModal} style={styles.container}>
            <View style={styles.deleteButtonContainer}>
                <Text style={styles.deleteButton}>X</Text>
            </View>
        </Pressable>
    );
};

export default DeleteProduct;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: "100%",
    },
    deleteButtonContainer: {
        flex: 1,
        width: 50,
        backgroundColor: 'crimson',
        // borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButton: {
        color: 'white',
        fontSize: 15,
    },
});









