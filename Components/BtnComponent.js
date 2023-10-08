import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

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
        backgroundColor: 'dodgerblue',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 10,
    },
    btnText: {
        color: "white",
    },
    disabledBtn: {
        backgroundColor: "grey"
    }
})