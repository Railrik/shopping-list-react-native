import { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import BtnComponent from './BtnComponent';
import InputComponent from './InputComponent';

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
            <InputComponent
                style={styles.textInput}
                inputPlaceholder="Ajouter un produit"
                onChangeHandler={inputHandler}
                inputValue={product}
                multiline
                maxLength={255}
            />

            <BtnComponent
                onPressHandler={handleClick}
                disabledBtn={isSubmitBtnDisabled}
            >
                Valider
            </BtnComponent>
        </View>
    );
};

export default AddProduct;

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 15,
    },
    textInput: {
        borderRadius: 5
    }
})