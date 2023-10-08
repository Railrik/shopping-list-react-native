import {
    StyleSheet,
    View,
} from 'react-native';

import BtnComponent from './BtnComponent';

const DeleteProduct = ({ deleteProductModal, idString }) => {

    const handleDeleteConfirmModal = () => {
        deleteProductModal(idString)
    };

    return (
        <View style={styles.container}>
            <BtnComponent
                onPressHandler={handleDeleteConfirmModal}
                disabled={false}
                style={styles.deleteButton}
            >
                X
            </BtnComponent>
        </View>
    );
};

export default DeleteProduct;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    deleteButton: {
        flex: 1,
        backgroundColor: "tomato"
    },
});









