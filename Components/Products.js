import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Products = ({ name }) => {
    return (
        <Text style={styles.element}>{name}</Text>
    );
};

const styles = StyleSheet.create({

    element: {
        backgroundColor: "peru",
        color: "lavender",
        padding: 20,
        fontSize: 17,
        //group margin top and bottom
        marginVertical: 6,
    }
});

export default Products;
