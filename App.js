import {
  StyleSheet,
  View
} from 'react-native';
import Products from './Components/Products';

const App = () => {
  return (
    <View style={styles.container}>
      <Products />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 40,
    paddingTop: 60,
    marginBottom: 60,
    backgroundColor: "wheat",
    height: '100%'
  }
});

export default App;
