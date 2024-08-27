import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = () => {
  const statistics = [
    { label: 'Usuarios activos', value: '1000' },
    { label: 'Contratos realizados', value: '5000' },
    { label: 'Registros totales', value: '$100.000' },
  ];

  return (
    <View style={styles.container}>
      {statistics.map((stat, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.label}>{stat.label}</Text>
          <Text style={styles.value}>{stat.value}</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    textAlign: 'right',
  },
});

export default DashboardScreen;