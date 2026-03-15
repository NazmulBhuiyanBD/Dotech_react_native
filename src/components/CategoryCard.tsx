import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
const { width } = Dimensions.get('window');

export const CategoryCard = ({ name, image }: any) => (
  <LinearGradient colors={['#EA0E2E', '#1E3A8A']} style={styles.border}>
    <View style={styles.inner}>
      <View style={styles.circle}><Image source={image} style={styles.img} /></View>
      <Text style={styles.txt}>{name}</Text>
    </View>
  </LinearGradient>
);
const styles = StyleSheet.create({
  border: { width: width * 0.22, height: 135, borderRadius: 16, padding: 1.5 },
  inner: { flex: 1, backgroundColor: 'white', borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  circle: { width: 60, height: 60, backgroundColor: '#EAF5FF', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  img: { width: 50, height: 50, resizeMode: 'contain' },
  txt: { fontSize: 10, fontWeight: 'bold', color: '#004AAD', textAlign: 'center' ,lineHeight: 12   }
});