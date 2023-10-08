import {
  Modal,
  View,
  Text,
  StyleSheet
} from 'react-native';
import BtnComponent from './BtnComponent';
import colors from '../Constants/colors';

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
            <View style={styles.btnW45}>
              <BtnComponent
                onPressHandler={onCancel}
                disabled={false}
              >
                Annuler
              </BtnComponent>
            </View>
            <View style={styles.btnW45}>
              <BtnComponent
                onPressHandler={onConfirm}
                disabled={false}
                style={styles.btnDelete}
              >
                Supprimer
              </BtnComponent>
            </View>
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
    backgroundColor: colors.white,
    width: "90%",
    height: 250,
  },
  modalHeader: {
    borderBottomWidth: 1,
    borderColor: colors.secondary,
    width: "100%",
    padding: 10,
    alignItems: "center",
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  modalHeaderText: {
    color: colors.danger,
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
    borderTopWidth: 1,
    padding: 10,
    width: "100%",
    borderColor: colors.secondary,
  },
  btnW45: {
    width: "45%",
  },
  btnDelete: {
    backgroundColor: colors.danger,
  }
});
