import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import Products from './Components/Products';
import AddProduct from './Components/AddProduct';

const App = () => {
  const [productList, setProductList] = useState([]);

  const submitHandler = (product) => {
    //vérification si aucun produit vide
    if (product.trim() !== '') {
      const idString = Date.now().toString();
      //spread operator
      setProductList(currentProductList => [{ key: idString, name: product }, ...currentProductList]);
    }
  }

  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler} />
      <View style={styles.items}>
        <FlatList
          data={productList}
          renderItem={({ item }) => <Products name={item.name} />}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
    backgroundColor: "wheat",
    height: '100%',
  },
  items: {
    marginTop: 10,
    marginBottom: 60
  },
});

export default App;
