import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuthStore } from '../src/controllers/AuthController';

export default function SignupScreen() {
  const router = useRouter();
  const signup = useAuthStore(state => state.signup);
  const [u, setU] = useState('');
  const [p, setP] = useState('');

  const handleSignup = () => {
    if (signup(u, p)) {
      router.back();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Create Account</Text>

        {/* Username */}
        <View style={styles.inputBox}>
          <MaterialCommunityIcons name="account-outline" size={20} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#444"
            value={u}
            onChangeText={setU}
            autoCapitalize="none"
          />
        </View>

        {/* Password */}
        <View style={styles.inputBox}>
          <MaterialCommunityIcons name="lock-outline" size={20} color="#666" />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#444"
            secureTextEntry
            value={p}
            onChangeText={setP}
          />
        </View>

        {/* Signup Button */}
        <TouchableOpacity style={styles.btn} onPress={handleSignup}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Go back to login */}
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.link}>Already have an account? Sign in</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1424'
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 30
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 40,
    opacity: 0.7
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A2235',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    height: 55,
    borderWidth: 1,
    borderColor: '#2A3345'
  },
  input: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
    height: '100%'
  },
  btn: {
    backgroundColor: 'white',
    height: 55,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0D1424'
  },
  link: {
    color: '#666',
    textAlign: 'center',
    marginTop: 20
  }
});