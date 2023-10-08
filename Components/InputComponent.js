import {
    StyleSheet,
    TextInput,
} from 'react-native';
import colors from '../Constants/colors';

const InputComponent = (props) => {
    return (
        <TextInput
            {...props}
            style={{ ...styles.textInput, ...props.style }}
            placeholder={props.inputPlaceholder}
            onChangeText={props.onChangeHandler}
            value={props.inputValue}
        />
    )
}

export default InputComponent

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.white,
        textAlign: "center",
        fontSize: 20,
        minHeight: 40,
        marginBottom: 10,
        padding: 10,
    },
})