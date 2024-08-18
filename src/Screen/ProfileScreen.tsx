import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { styles } from '../Theme/AppTheme';

export const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.profileContainer}>
      <Image
        source={{ uri: 'https://marketplace.canva.com/EAFEhUK_WdY/1/0/1600w/canva-banner-para-mercado-shops-tienda-de-celulares-moderno-negro-AWRKN423ZV0.jpg' }}
        style={styles.profileCoverImage}
      />
      
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtytkvuVS30jSyIjTIe-PIj61QxWfYotzqw&s' }}
        style={styles.profileImage}
      />
      

      <View style={styles.profileInfoContainer}>
        <Text style={styles.profileName}>HandPhone Store</Text>
        <Text style={styles.profileBio}>
          Aqui podras encontrar Celulares, Relojes y Televisores etc, todo de ultima generación aqui solo en HandPhone
        </Text>
      </View>

      <View style={styles.profileStatsContainer}>
        <View style={styles.profileStat}>
          <Text style={styles.profileStatNumber}>120</Text>
          <Text style={styles.profileStatLabel}>Seguidores</Text>
        </View>
        <View style={styles.profileStat}>
          <Text style={styles.profileStatNumber}>85</Text>
          <Text style={styles.profileStatLabel}>Seguidos</Text>
        </View>
        <View style={styles.profileStat}>
          <Text style={styles.profileStatNumber}>45</Text>
          <Text style={styles.profileStatLabel}>Publicaciones</Text>
        </View>
      </View>
      
      <View style={styles.profileSection}>
        <Text style={styles.profileSectionTitle}>Misión</Text>
        <Text style={styles.profileSectionText}>
          Nuestra misión es proporcionar una buena comunicación con todo el mundo mediantes las redes sociales.
          Conectate!!!
        </Text>
      </View>
      
      <View style={styles.profileSection}>
        <Text style={styles.profileSectionTitle}>Visión</Text>
        <Text style={styles.profileSectionText}>
          Aspiramos a ser una empresa Mundialmente Famosa, reconocidos por nuestra capacidad para transformar y
          contribuir al avance de la industria global.
        </Text>
      </View>
      
      <View style={styles.profileSection}>
        <Text style={styles.profileSectionTitle}>Quiénes somos</Text>
        <Text style={styles.profileSectionText}>
          Somos un equipo apasionado de emprendedores dispuestos a darlo todo por sus cientes
          Nuestro objetivo es poder conectar al mundo mediante la venta de telefonos y relojes y que no se pierdan ninguna noticia gracias a los televisores.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
