import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OfertasScreen = () => {
  const ofertas = [
    {
      titulo: 'Desarrollador Frontend',
      sueldo: '$50.000',
      requerimientos: 'React, JavaScript, HTML, CSS',
      boton: 'Postularse'
    },
    {
      titulo: 'Diseñador Gráfico',
      sueldo: '$45.000',
      requerimientos: 'Adobe Photoshop, Illustrator, Figma',
      boton: 'Postularse'
    },
    {
      titulo: 'Analista de Datos',
      sueldo: '$60.000',
      requerimientos: 'Python, SQL, Machine Learning',
      boton: 'Postularse'
    },
  
  ];

  return (
    <View style={styles.container}>
      {ofertas.map((oferta, index) => (
        <View key={index} style={styles.ofertaCard}>
          <Text style={styles.titulo}>{oferta.titulo}</Text>
          <Text style={styles.sueldo}>Sueldo: {oferta.sueldo}</Text>
          <Text style={styles.requerimientos}>Requerimientos: {oferta.requerimientos}</Text>
          <Button
            title={oferta.boton}
            onPress={() => console.log('Postulación aún no implementada')}
            style={styles.boton}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  ofertaCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sueldo: {
    marginBottom: 5,
  },
  requerimientos: {
    marginBottom: 10,
  },
  boton: {
    borderRadius: 5,
  },
});

export default OfertasScreen;