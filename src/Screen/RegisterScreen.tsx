import React, { useState } from 'react'
import { Alert, StatusBar, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../commons/constant'
import TitleComponent from '../Components/TitleComponent'
import BodyComponents from '../Components/BodyComponents'
import { styles } from '../Theme/AppTheme'
import InputComponents from '../Components/InputComponents'
import ButtonComponent from '../Components/ButtonComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { User } from '../Navigator/StackNavigator'

// Interface - Props
interface Props {
  users: User[];
  handleAddUser: (user: User) => void;
}

// Interface - objeto
interface FormRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export const RegisterScreen = ({ users, handleAddUser }: Props) => {
  // Hook useState: manipular el formulario de registro
  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });

  // Hook useState: permitir que se haga visible/no visible el contenido del password
  const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

  const navigation = useNavigation();

  // Función para actualizar el estado del formulario registro
  const handleSetValues = (name: string, value: string) => {
    setFormRegister({ ...formRegister, [name]: value });
  }

  // Función para registrar nuevos usuarios
  const handleSignUp = () => {
    // Validar que todos los campos estén llenos
    if (!formRegister.name || !formRegister.email || !formRegister.password || !formRegister.confirmPassword || !formRegister.phone) {
      Alert.alert(
        'Error',
        'Por favor, ingrese valores en todos los campos'
      );
      return;
    }

    // Validar que las contraseñas coincidan
    if (formRegister.password !== formRegister.confirmPassword) {
      Alert.alert(
        'Error',
        'Las contraseñas no coinciden'
      );
      return;
    }

    // Validar que no se registre un usuario que ya se encuentra en el arreglo
    if (verifyUser() != null) {
      Alert.alert(
        'Error',
        'El usuario ya se encuentra registrado!!'
      );
      return;
    }

    // Registrar nuevo usuario
    // Obtener el id de los usuarios
    const getIdUsers = users.map(user => user.id); //[1,2...]
    // Obtener el id mayor
    const getNewId = Math.max(...getIdUsers) + 1;
    // Generar la información del nuevo usuario - nuevo objeto
    const newUser: User = {
      id: getNewId,
      name: formRegister.name,
      email: formRegister.email,
      password: formRegister.password,
      phone: formRegister.phone
    };
    // Agregar el nuevo usuario al arreglo
    handleAddUser(newUser);
    Alert.alert(
      'Felicitaciones',
      'Registro exitoso'
    );
    // Regreso a la anterior pantalla
    navigation.goBack();
  }

  // Función para verificar si el usuario está registrado
  const verifyUser = () => {
    const existUser = users.filter(user => user.email === formRegister.email)[0];
    return existUser;
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Regístrate' />
      <BodyComponents>
        <View>
          <Text style={styles.titleHeaderBody}>¡Estás muy cerca!</Text>
          <Text style={styles.textBody}>
            Realiza tus compras de manera rápida y segura.
          </Text>
        </View>
        <View style={styles.contentInput}>
          <InputComponents
            placeholder='Nombre'
            handleSetValues={handleSetValues}
            name='name'
          />
          <InputComponents
            placeholder='Correo'
            handleSetValues={handleSetValues}
            name='email'
          />
          <InputComponents
            placeholder='Teléfono'
            handleSetValues={handleSetValues}
            name='phone'
          />
          <InputComponents
            placeholder='Contraseña'
            handleSetValues={handleSetValues}
            name='password'
            isPassword={hiddenPassword}
            hasIcon={true}
            setHiddenPassword={() => setHiddenPassword(!hiddenPassword)}
          />
          <InputComponents
            placeholder='Confirmar Contraseña'
            handleSetValues={handleSetValues}
            name='confirmPassword'
            isPassword={hiddenPassword}
            hasIcon={false}
          />
        </View>
        <ButtonComponent textButton='Registrar' onPress={handleSignUp} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={styles.textRedirection}>¿Ya tienes una cuenta? Inicia sesión ahora</Text>
        </TouchableOpacity>
      </BodyComponents>
    </View>
  );
}

export default RegisterScreen;
