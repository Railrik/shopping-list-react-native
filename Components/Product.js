import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import DeleteProduct from './DeleteProduct';

const Product = ({ name, deleteProductModal, idString }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <DeleteProduct deleteProductModal={deleteProductModal} idString={idString} />
        </View>
    );
};

export default Product;

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'aliceblue',
        marginTop: 30,
        marginVertical: 1,
    },
    name: {
        color: 'black',
        fontSize: 17,
        padding: 15,
    }
});
