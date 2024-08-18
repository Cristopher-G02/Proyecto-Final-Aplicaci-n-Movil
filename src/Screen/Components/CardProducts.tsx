import React, { useState } from 'react';
import { Image, Modal, Text, View } from 'react-native';
import { Product } from '../HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../commons/constant';
import ModalProduct from './ModalProduct';
import { styles } from '../../Theme/AppTheme';

// interface - props
interface Props {
  product: Product;
  // función para actualizar stock
  changeStockProduct: (idProduct: number, quantity: number) => void;
}

export const CardProducts = ({ product, changeStockProduct }: Props) => {
  // hook useState: permitir visualizar o no el modal
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentCard}>
        <Image source={{ uri: product.pathImage }} style={styles.imageCard} />
        <View style={styles.productInfo}>
          <Text style={styles.titleCard}>{product.name}</Text>
          <Text style={styles.priceText}>Precio: $ {product.price.toFixed(2)}</Text>
        </View>
        <View style={styles.iconCard}>
          <Icon
            name='add-shopping-cart'
            size={33}
            color={PRIMARY_COLOR}
            onPress={() => setShowModal(!showModal)}
          />
        </View>
      </View>
      <ModalProduct
        isVisible={showModal}
        setShowModal={() => setShowModal(!showModal)}
        product={product}
        changeStockProduct={changeStockProduct}
      />
    </View>
  );
};

export default CardProducts;
