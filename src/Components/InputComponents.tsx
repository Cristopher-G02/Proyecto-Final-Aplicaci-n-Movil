import React from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PRIMARY_COLOR } from '../commons/constant';
import { styles } from '../Theme/AppTheme';

//interface - props
interface Props{
    placeholder: string;
    handleSetValues: (name: string, value: string) => void; //props función
    name: string;
    isPassword?: boolean;  //prop opcional
    hasIcon?: boolean;
    setHiddenPassword?: () => void ;  //prop de función
}

export const InputComponents = ( {placeholder, handleSetValues, name, isPassword = false, hasIcon = false, setHiddenPassword } : Props) => {
  return (
    <View>
      {
        (hasIcon)
          ?<Icon style={styles.iconPassword} 
          name='visibility' size={25} color={PRIMARY_COLOR} 
          onPress={setHiddenPassword} />
          : null 
      }
      <TextInput
        placeholder= {placeholder}
        keyboardType='default'
        onChangeText={(value) => handleSetValues(name, value)}
        secureTextEntry={isPassword}
        style={styles.inputText}
      />
    </View>
  )
}

export default InputComponents
