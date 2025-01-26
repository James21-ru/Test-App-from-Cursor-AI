import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MedicationCard } from '../components';
import { getMedications } from '../services/medicationService';

const PillboxScreen = () => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    loadMedications();
  }, []);

  const loadMedications = async () => {
    try {
      const data = await getMedications();
      setMedications(data);
    } catch (error) {
      console.error('Error loading medications:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Medications</Text>
      <FlatList
        data={medications}
        renderItem={({ item }) => <MedicationCard medication={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default PillboxScreen; 