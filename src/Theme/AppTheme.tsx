import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../commons/constant";


//Gestionar los estilos
export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 40,
        fontWeight: 'bold',
        paddingHorizontal: 25,
        paddingVertical: 15
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40,
    },
    titleHeaderBody: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'black'
    },
    textBody: {
        fontSize: 15
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    contentInput: {
        marginTop: 20,
        gap: 10
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 20,
        borderRadius: 15,
        marginTop: 30
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 11
    },
    textRedirection: {
        marginTop: 30,
        fontSize: 15,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    cardContainer: {
        backgroundColor: '#333', // Fondo oscuro para la tarjeta
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden',
        elevation: 5,
      },
      contentCard: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
      },
      imageCard: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 10,
      },
      productInfo: {
        flex: 1,
      },
      titleCard: {
        color: '#fff', // Texto blanco
        fontSize: 18,
        fontWeight: 'bold',
      },
      priceText: {
        color: '#ddd', // Texto gris claro
      },
      iconCard: {
        padding: 10,
      },

      modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro semi-transparente
      },
      contentModal: {
        backgroundColor: '#444', // Fondo oscuro para el modal
        borderRadius: 10,
        padding: 20,
      },
      headModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      titleModal: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff', // Texto blanco
    
      },
      headerTable: {
        flexDirection: 'row',
        borderBottomColor: '#555',
        borderBottomWidth: 1,
        paddingVertical: 10,
      },
      textInformation: {
        color: '#ddd', // Texto gris claro
        fontWeight: 'bold',
      },
      headerInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
      },
      productRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
      },
      productName: {
        color: '#fff', // Texto blanco
      },
      productDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
      },
      productDetail: {
        color: '#ddd', // Texto gris claro
        marginHorizontal: 10,
      },
      totalContainer: {
        alignItems: 'flex-end',
        marginVertical: 10,
      },
      textTotalPay: {
        color: '#fff', // Texto blanco
        fontSize: 18,
        fontWeight: 'bold',
      },
      buttonAddCar: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
      },
      textButtonAddCar: {
        color: '#fff',
        fontSize: 16,
      },
      imageContainer: {
        alignItems: 'center',
        marginVertical: 10,
      },
      imageModal: {
        width: 150,
        height: 150,
        borderRadius: 8,
      },
      messageStock: {
        color: '#ff6f6f',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      contentQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
      },
      buttonQuantity: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 5,
      },
      textButtonQuantity: {
        color: '#fff',
        fontSize: 18,
      },
      textQuantity: {
        color: '#fff', 
        fontSize: 18,
        marginHorizontal: 10,
      },
    contentHeaderHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCardHome: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 33
    },
    textIconCard: {
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 20,
        paddingHorizontal: 5,
        fontSize: 13,
        fontWeight: 'bold'
    },
    profileContainer: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#212121',
    },
    profileCoverImage: {
        width: '85%',
        height: 200
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: -60,
        borderWidth: 4,
        borderColor: '#fff',
        marginBottom: 20,
    },
    profileInfoContainer: {
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    profileUsername: {
        fontSize: 18,
        color: '#bbb',
        marginBottom: 10,

    },
    profileBio: {
        fontSize: 16,
        textAlign: 'center',
        color: '#ddd',
        marginHorizontal: 20,
    },
    profileStatsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
        
    },
    profileStat: {
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2 
            },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3, 
        width: 110, 
    },
    profileStatNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff'
    },
    profileStatLabel: {
        fontSize: 14,
        color: '#aaa',
    },
    profileSection: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    profileSectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },
    profileSectionText: {
        fontSize: 16,
        color: '#ccc',
        lineHeight: 24,
    }
})