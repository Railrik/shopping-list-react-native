import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Modal,
  Pressable,
  RefreshControl,
  Alert
} from 'react-native';

import Product from './Components/Product';
import AddProduct from './Components/AddProduct';
import DeleteModal from './Components/DeleteModal';

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
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 60,
    backgroundColor: "white",
    flex: 1
  },
  items: {
    marginBottom: 50,
    flex: 1
  }
});
