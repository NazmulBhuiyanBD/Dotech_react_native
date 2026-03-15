import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const ProductCard = ({ title, image }: any) => (
  <TouchableOpacity style={styles.card}>
    <View style={styles.imgBox}><Image source={image} style={styles.img} /></View>
    <View style={styles.footer}>
      <Text numberOfLines={2} style={styles.ttl}>{title}</Text>
      <View style={styles.btn}><MaterialCommunityIcons name="chevron-right" size={14} color="#004AAD" /></View>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  card: { width: '31%', backgroundColor: '#F1F7FF', borderRadius: 12, padding: 8, marginBottom: 10 },
  imgBox: { backgroundColor: 'white', borderRadius: 8, height: 75, justifyContent: 'center', alignItems: 'center', marginBottom: 5 },
  img: { width: '80%', height: '80%', resizeMode: 'contain' },
  footer: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' },
  ttl: { fontSize: 9, fontWeight: '600', color: '#1E293B', flex: 1 },
  btn: { width: 18, height: 18, backgroundColor: 'white', borderRadius: 9, justifyContent: 'center', alignItems: 'center' }
});