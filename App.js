import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Text style={styles.element}>Product one</Text>
        <Text style={styles.element}>Product two</Text>
        <Text style={styles.element}>Product three</Text>
        <Text style={styles.element}>Product Four</Text>
        <Text style={styles.element}>Product Five</Text>
      </View>
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
  },
  items: {
  },
  element: {
    backgroundColor: "peru",
    color: "lavender",
    padding: 20,
    fontSize: 17,
    //group margin top and bottom
    marginVertical: 6,
  }
});

export default App;
