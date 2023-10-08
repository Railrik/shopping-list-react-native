import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
  ImageBackground,
} from 'react-native';

import Product from './Components/Product';
import AddProduct from './Components/AddProduct';
import DeleteModal from './Components/DeleteModal';
import DismissKeyboard from './Components/DismissKeyboard';
import Header from './Components/Header';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [keyTodelete, setKeyToDelete] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const submitHandler = (product) => {
    const idString = Date.now().toString();
    //spread operator
    setProductList(currentProductList => [{ key: idString, name: product }, ...currentProductList]);
  }

  const deleteProduct = (key) => {
    setProductList(currentProductList => {
      return currentProductList.filter(product => product.key !== key)
    })
    setShowDeleteModal(false)
    setKeyToDelete('')
  }

  const cancelDelete = () => {
    setShowDeleteModal(false)
    setKeyToDelete('')
  }

  const deleteProductModal = (key) => {
    setKeyToDelete(key)
    setShowDeleteModal(true)
  }

  const onRefreshing = () => {
    setRefreshing(true);
  }

  return (
    <DismissKeyboard>
      <ImageBackground
        style={styles.bgImage}
        source={require('./assets/shopping-bg.jpg')}
        resizeMode="cover"
      >
        <Header />
        <View style={styles.container}>
          <DeleteModal
            visible={showDeleteModal}
            onRequestClose={() => setShowDeleteModal(false)}
            onCancel={cancelDelete}
            onConfirm={() => deleteProduct(keyTodelete)}
          />
          <AddProduct submitHandler={submitHandler} />
          <View style={styles.items}>
            <FlatList
              data={productList}
              renderItem={({ item }) => (
                <Product
                  name={item.name}
                  idString={item.key}
                  deleteProductModal={deleteProductModal}
                />
              )
              }
              refreshControl={
                <RefreshControl refreshing={false} onRefresh={onRefreshing} />
              }

            />
          </View>
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
};

export default App;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  container: {
    padding: 10,
    flex: 1,
  },
  items: {
    marginBottom: 50,
    flex: 1
  }
});
