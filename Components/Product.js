import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import DeleteProduct from './DeleteProduct';

const Product = ({ name, deleteProduct, idString }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <DeleteProduct deleteProduct={deleteProduct} idString={idString} />
        </View>
    );
};

export default Product;

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
    }
})
