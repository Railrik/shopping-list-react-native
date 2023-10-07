import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

const DeleteModal = ({ visible, onRequestClose, onCancel, onConfirm }) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onRequestClose}
      transparent
      animationType="fade"
      hardwareAccelerated //seulement pour Android
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>Hey !</Text>
          </View>
          <View style={styles.modalBody}>
            <Text style={styles.modalBodyText}>Êtes-vous sûr de vouloir supprimer ce produit ?</Text>
          </View>
          <View style={styles.modalFooter}>
            <Pressable onPress={onCancel} style={styles.pressableBtnModal}>
              <Text style={styles.modalFooterBtnCancel}>Annuler</Text>
            </Pressable>
            <Pressable onPress={onConfirm} style={styles.pressableBtnModal}>
              <Text style={styles.modalFooterBtnValid}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    width: "90%",
    height: 250,
  },
  modalHeader: {
    borderBottomWidth: 1,
    borderColor: "gainsboro",
    width: "100%",
    padding: 10,
    alignItems: "center",
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  modalHeaderText: {
    color: "crimson",
  },
  modalBody: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 12,
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pressableBtnModal: {
    borderTopWidth: 1,
    borderColor: "gainsboro",
    flexDirection: "row",
    flex: 1,
  },
  modalFooterBtnCancel: {
    padding: 10,
    borderBottomLeftRadius: 10,
    fontSize: 17,
    textAlign: "center",
    width: "100%",
  },
  modalFooterBtnValid: {
    padding: 10,
    fontSize: 17,
    textAlign: "center",
    width: "100%",
  },
});
