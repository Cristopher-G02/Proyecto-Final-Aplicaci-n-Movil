import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import TitleComponent from '../../Components/TitleComponent';
import BodyComponents from '../../Components/BodyComponents';
import CardProducts from '../Components/CardProducts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SECUNDARY_COLOR, TERCIARY_COLOR } from '../../commons/constant';
import { styles } from '../../Theme/AppTheme';
import ModalCar from '../Components/ModalCar';

//interface - producto
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}

//interface - arreglo del carrito de compras
export interface Car {
  id: number;
  name: string;
  price: number;
  totalQuantity: number;
}

export const HomeScreen = () => {
  //arreglo de productos
  const products: Product[] = [
    { id: 1, name: 'Iphone 13', price: 299.0, stock: 15, pathImage: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone13-color-lineup-220308_big_carousel.jpg.small_2x.jpg' },
    { id: 2, name: 'Iphone 14', price: 399.0, stock: 14, pathImage: 'https://www.bluemagic.ec/wp-content/uploads/2023/08/IPHONE-14-COLORES-3.jpeg' },
    { id: 3, name: 'Iphone 15', price: 499.0, stock: 16, pathImage: 'https://mundomac.com.ec/wp-content/uploads/2024/03/iphone15_green_pdp_image_position-5__coes.webp'},
    { id: 4, name: 'AppleWatch', price: 199.0, stock: 27, pathImage: 'https://www.apple.com/es/watch/home/images/meta/watch-gps-lte__f3xmp4zpdka6_og.png'},
    { id: 5, name: 'Reloj Inteligente', price: 149.0, stock: 25, pathImage: 'https://cdn.shopify.com/s/files/1/0414/9982/0194/files/IMG_7902_bc932d5b-5e81-4ce5-9546-644c7fc92e66_600x600.jpg?v=1638710744'},
    { id: 6, name: 'Televisor Samsung', price: 3999.0, stock: 10, pathImage: 'https://www.systemboard.com.ec/wp-content/uploads/2020/06/1-77.jpg'},
    { id: 7, name: 'Televisor Sony', price: 2999.0, stock: 10, pathImage: 'https://www.sony.com.ec/image/f161a88d5921dbaa007f98e46074bc1b?fmt=png-alpha&wid=960'},
    { id: 8, name: 'Televisor LG', price: 1999.0, stock: 5, pathImage: 'https://http2.mlstatic.com/D_NQ_NP_732276-MLU77654429451_072024-O.webp'}
  ];

  //hook useState: manipular el estado del arreglo de productos
  const [productsState, setProductsState] = useState(products);

  //hook useState: manipular el estado del arreglo del carrito de compras
  const [car, setCar] = useState<Car[]>([]);

  //hook useState: manipular la visualización del modal
  const [showModal, setShowModal] = useState<boolean>(false);

  //función para actualizar el stock de productos
  const changeStockProduct = (idProduct: number, quantity: number) => {
    //Generar un nuevo arreglo con las actualizaciones del stock
    const updateStock = productsState.map(product => product.id === idProduct
      ? { ...product, stock: product.stock - quantity }
      : product);
    //Actualizar el productsState
    setProductsState(updateStock);
    //llamar la funcion para arreglar el carrito
    addProduct(idProduct, quantity);
  }

  //función para agregar los productos al carrito
  const addProduct = (idProduct: number, quantity: number) => {
    //Buscar el producto que se agregará en el carrito
    const product = productsState.find(product => product.id === idProduct);

    //Controlar si el producto no ha sido encontrado
    if (!product) {
      return;
    }

    //Verificar si el producto ya está en el carrito
    const productInCar = car.find(item => item.id === idProduct);

    if (productInCar) {
      //Si el producto ya está en el carrito, actualizar la cantidad
      const updatedCar = car.map(item =>
        item.id === idProduct
          ? { ...item, totalQuantity: item.totalQuantity + quantity }
          : item
      );
      setCar(updatedCar);
    } else {
      //Si el producto no está en el carrito, agregarlo
      const newProductCar: Car = {
        id: product.id,
        name: product.name,
        price: product.price,
        totalQuantity: quantity
      };
      setCar([...car, newProductCar]);
    }
  }

  const handlePurchase = () => {
    setCar([]); // Vaciar el carrito
    setShowModal(false); // Cerrar el modal
  }

  const handleOpenCart = () => {
    if (car.length > 0 ) {
      setShowModal(true);
    } else {
    }
  }

  return (
    <View>
      <View style={styles.contentHeaderHome}>
        <TitleComponent title='Productos' />
        <View style={styles.iconCardHome}>
          <Text style={styles.textIconCard}>{car.length}</Text>
          <TouchableOpacity 
            onPress={handleOpenCart} 
            disabled={car.length === 0}>
            <Icon 
              name='shopping-cart' 
              size={33} 
              color={car.length > 0 ? TERCIARY_COLOR: 'gray'}/>
          </TouchableOpacity>
        </View>
      </View>
      <BodyComponents>
        <FlatList
          data={productsState}
          renderItem={({ item }) => <CardProducts product={item} changeStockProduct={changeStockProduct} />}
          keyExtractor={item => item.id.toString()} />
      </BodyComponents>
      <ModalCar
        isVisible={showModal}
        car={car}
        setShowModal={() => setShowModal(!showModal)}
        onPurchase={handlePurchase}
      />
    </View>
  );
}

export default HomeScreen;
