import React, { useState } from 'react';
import { Image, Modal, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { Product } from '../HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../commons/constant';
import { styles } from '../../Theme/AppTheme';

// interface - props
interface Props {
  product: Product;
  isVisible: boolean;
  setShowModal: () => void;
  // función para actualizar stock
  changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const ModalProduct = ({ isVisible, setShowModal, product, changeStockProduct }: Props) => {
  // hook useWindowDimension(): tomar el tamaño de la pantalla
  const { width } = useWindowDimensions();

  // hook useState: manipular la cantidad de productos
  const [quantity, setQuantity] = useState<number>(1);

  // función actualizar el valor de la cantidad de producto
  const handleChangeQuantity = (value: number) => {
    setQuantity(quantity + value);
  };

  // función agregar producto al carrito
  const handleAddProduct = () => {
    // Actualizando el stock
    changeStockProduct(product.id, quantity);
    // inicializar la cantidad
    setQuantity(1);
    // Cerrar el modal
    setShowModal();
  };

  return (
    <Modal visible={isVisible} animationType='fade' transparent={true}>
      <View style={styles.modalBackground}>
        <View style={{ ...styles.contentModal, width: width * 0.80 }}>
          <View style={styles.headModal}>
            <Text style={styles.titleModal}>{product.name} - ${product.price.toFixed(2)}</Text>
            <View style={styles.iconCard}>
              <Icon name='close' size={30} color={PRIMARY_COLOR} onPress={setShowModal} />
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: product.pathImage }} style={styles.imageModal} />
          </View>
          {product.stock === 0 ? (
            <Text style={styles.messageStock}>Producto Agotado</Text>
          ) : (
            <View>
              <View style={styles.contentQuantity}>
                <TouchableOpacity
                  onPress={() => handleChangeQuantity(1)}
                  disabled={quantity === product.stock}
                  style={styles.buttonQuantity}
                >
                  <Text style={styles.textButtonQuantity}>+</Text>
                </TouchableOpacity>
                <Text style={styles.textQuantity}>{quantity}</Text>
                <TouchableOpacity
                  onPress={() => handleChangeQuantity(-1)}
                  disabled={quantity === 1}
                  style={styles.buttonQuantity}
                >
                  <Text style={styles.textButtonQuantity}>-</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.textQuantity}>
                Total: ${(product.price * quantity).toFixed(2)}
              </Text>
              <TouchableOpacity onPress={handleAddProduct} style={styles.buttonAddCar}>
                <Text style={styles.textButtonAddCar}>Agregar a Carrito</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalProduct;
