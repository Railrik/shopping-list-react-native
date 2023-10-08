import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import DeleteProduct from './DeleteProduct';
import colors from '../Constants/colors';

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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.white,
        marginTop: 10,
        marginVertical: 1,
    },
    name: {
        color: colors.dark,
        fontSize: 17,
        padding: 15,
    }
});
