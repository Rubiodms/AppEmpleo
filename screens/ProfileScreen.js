import React from 'react';
import { View, Text,  Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hola, usuario!</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Este es tu perfil. Aquí podrás ver y gestionar tu información personal.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Acerca de" onPress={() => navigation.navigate('About')} />
        <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        <Button title="Ofertas" onPress={() => navigation.navigate('Ofertas')} />
        <Button title="Salir" onPress={() => navigation.navigate('Home')} />
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoContainer: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  infoText: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ProfileScreen;