import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';

import Product from './Components/Product';
import AddProduct from './Components/AddProduct';

const App = () => {
  const [productList, setProductList] = useState([]);

  const submitHandler = (product) => {
    const idString = Date.now().toString();
    //spread operator
    setProductList(currentProductList => [{ key: idString, name: product }, ...currentProductList]);
  }

  const deleteProduct = (key) => {
    setProductList(currentProductList => {
      return currentProductList.filter(product => product.key !== key)
    })
  }

  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler} />
      <View style={styles.items}>
        <FlatList
          data={productList}
          renderItem={({ item }) => (
            <Product
              name={item.name}
              idString={item.key}
              deleteProduct={deleteProduct}
            />
          )
          }
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  items: {
    marginBottom: 50,
    height: "100%"
  },
  container: {
    padding: 40,
    paddingTop: 60,
    backgroundColor: "wheat",
    height: '100%',
  }
});
