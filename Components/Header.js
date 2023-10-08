import { StyleSheet, Text, View } from 'react-native';
import colors from '../Constants/colors';

const Header = () => {
    return (
        <View style={styles.headerWrapper}>
            <Text style={styles.headerText}>Shopping list</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerWrapper: {
        minHeight: 100,
        paddingTop: 45,
        paddingBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.info
    },
    headerText: {
        fontSize: 20,
        color: colors.white
    }
})