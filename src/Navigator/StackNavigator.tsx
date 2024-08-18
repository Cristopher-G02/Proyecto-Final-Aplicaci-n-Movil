import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PRIMARY_COLOR } from '../commons/constant';
import LoginScreen from '../Screen/LoginScreen';
import RegisterScreen from '../Screen/RegisterScreen';
import TabNavigator from './TabNavigator';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  phone: string;
}

// Create Stack Navigator
const Stack = createStackNavigator();

export const StackNavigator = () => {
  const users: User[] = [
    { id: 1, email: 'titifeb@gmail.com', password: '123456', name: 'Titi', phone: '0987654321' },
    { id: 2, email: 'CristoG@gmail.com', password: '1234567', name: 'Cristopher', phone: '0987654321' },
  ];

  const [listUsers, setListUsers] = useState(users);

  const handleAddUser = (user: User) => {
    setListUsers([...listUsers, user]);
  };

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#222',
        },
        headerStyle: {
          backgroundColor: '#333', 
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen 
        name="Login" 
        options={{ headerShown: false }} 
        children={() => <LoginScreen users={listUsers} />} 
      />
      <Stack.Screen 
        name="Register" 
        options={{ headerShown: false }} 
        children={() => <RegisterScreen users={listUsers} handleAddUser={handleAddUser} />} 
      />
      <Stack.Screen 
        name="Home" 
        component={TabNavigator} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

