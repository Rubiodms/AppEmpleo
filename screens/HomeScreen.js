import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trabajo Aplicación</Text>
      <View style={styles.buttonContainer}>
        <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20, // Ajusta este valor para cambiar el espacio entre botones
  },
});

export default HomeScreen;