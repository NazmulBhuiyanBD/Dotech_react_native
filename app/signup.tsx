import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../src/controllers/AuthController';

export default function SignupScreen() {
  const router = useRouter();
  const signup = useAuthStore(state => state.signup);
  const [u, setU] = useState('');
  const [p, setP] = useState('');

  const handleSignup = () => { if (signup(u, p)) router.back(); };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#444" onChangeText={setU} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#444" onChangeText={setP} />
        <TouchableOpacity style={styles.btn} onPress={handleSignup}><Text style={styles.btnText}>Sign Up</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1424' },
  inner: { flex: 1, justifyContent: 'center', padding: 30 },
  title: { color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  input: { backgroundColor: '#1A2235', borderRadius: 8, height: 55, color: 'white', paddingHorizontal: 15, marginBottom: 15 },
  btn: { backgroundColor: '#004AAD', height: 55, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  btnText: { color: 'white', fontWeight: 'bold' }
});