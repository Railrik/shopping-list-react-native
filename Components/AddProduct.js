import { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button
} from 'react-native';

const AddProduct = ({ submitHandler }) => {
    const [product, setProduct] = useState('');
    const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(true);

    useEffect(() => {
        //vérification si caractères autre que vide, espace, retour... et supérieur à 1
        (product.trim() !== '' && product.length > 1) ? setIsSubmitBtnDisabled(false) : setIsSubmitBtnDisabled(true);
    }, [product])

    const inputHandler = (val) => {
        setProduct(val)
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Ajouter un produit"
                onChangeText={inputHandler}
                value={product}
            />
            <Button
                title="Valider"
                onPress={handleClick}
                disabled={isSubmitBtnDisabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        marginBottom: 15,
    },
    textInput: {
        borderColor: "grey",
        borderWidth: 1,
        padding: 5,
        paddingLeft: 9,
        fontSize: 18,
        flexGrow: 1,
    }
})

export default AddProduct;