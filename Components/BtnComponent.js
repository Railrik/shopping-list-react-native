import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import colors from '../Constants/colors';

const BtnComponent = ({ onPressHandler, disabledBtn, style, children }) => {
    return (
        <TouchableOpacity
            onPress={onPressHandler}
            disabled={disabledBtn}
            activeOpacity={0.8}
        >
            <View style={{ ...styles.btn, ...(disabledBtn ? styles.disabledBtn : ''), ...style }}>
                <Text style={styles.btnText}>{children}</Text>
            </View>
        </TouchableOpacity >
    )
}

export default BtnComponent

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 10,
    },
    btnText: {
        color: colors.white,
        fontFamily: "Montserrat-regular",
        fontSize: 18
    },
    disabledBtn: {
        backgroundColor: colors.secondary
    }
})