import React from 'react';
import { FlatList, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Car } from '../HomeScreen/HomeScreen';
import { styles } from '../../Theme/AppTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../commons/constant';

// interface - props
interface Props {
  isVisible: boolean;
  setShowModal: () => void;
  car: Car[];
  onPurchase: () => void;
}

export const ModalCar = ({ isVisible, car, setShowModal, onPurchase }: Props) => {
  const { width } = useWindowDimensions();

  const totalPay = () => {
    let total: number = 0;
    car.forEach(product => {
      total += product.price * product.totalQuantity;
    });
    return total;
  };

  const handleSendInfo = () => {
    // cerrar modal
    setShowModal();
    // Llama la función onPurchase
    onPurchase();
  };

  return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
      <View style={styles.modalBackground}>
        <View style={{ ...styles.contentModal, width: width * 0.80 }}>
          <View style={styles.headModal}>
            <Text style={styles.titleModal}>Mis Productos</Text>
            <View style={styles.iconCard}>
              <Icon name='close' size={30} color={PRIMARY_COLOR} onPress={setShowModal} />
            </View>
          </View>
          <View style={styles.headerTable}>
            <Text style={styles.textInformation}>Producto</Text>
            <View style={styles.headerInformation}>
              <Text style={styles.textInformation}>Precio</Text>
              <Text style={styles.textInformation}>Cantidad</Text>
              <Text style={styles.textInformation}>Total</Text>
            </View>
          </View>
          <FlatList
            data={car}
            renderItem={({ item }) => (
              <View style={styles.productRow}>
                <Text style={styles.productName}>{item.name}</Text>
                <View style={styles.productDetails}>
                  <Text style={styles.productDetail}>{item.price.toFixed(2)}</Text>
                  <Text style={styles.productDetail}>{item.totalQuantity}</Text>
                  <Text style={styles.productDetail}>{(item.price * item.totalQuantity).toFixed(2)}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.textTotalPay}>Total a Pagar: ${totalPay().toFixed(2)}</Text>
          </View>
          <TouchableOpacity onPress={handleSendInfo} style={styles.buttonAddCar}>
            <Text style={styles.textButtonAddCar}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalCar;
