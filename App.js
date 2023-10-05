import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert
} from 'react-native';

import Product from './Components/Product';
import AddProduct from './Components/AddProduct';

const App = () => {
  const [productList, setProductList] = useState([]);

  const submitHandler = (product) => {
    //vérification si aucun produit vide
    if (product.trim() !== '' && product.length > 1) {
      const idString = Date.now().toString();
      //spread operator
      setProductList(currentProductList => [{ key: idString, name: product }, ...currentProductList]);
    } else {
      Alert.alert('Erreur', `Vous devez entrer deux caractères minimum`, [
        {
          text: 'Retour',
        }
      ],
        {
          //permet de cliquer en dehors de la fenetre Alert
          cancelable: true,
        }
      )
    }
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
  },

});

export default App;
