import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthStore } from '../src/controllers/AuthController';
export default function LoginScreen() {
  const router = useRouter();
  const login = useAuthStore(state => state.login);
  const [u, setU] = useState('');
  const [p, setP] = useState('');

  const handleLogin = () => { 
    if (login(u, p)) {
      router.replace('/marketplace'); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>sign in</Text>
        
        {/* Username Field */}
        <View style={styles.inputBox}>
          <MaterialCommunityIcons name="account-outline" size={20} color="#666" />
          <TextInput 
            style={styles.input} 
            placeholder="shl0145" 
            placeholderTextColor="#444" 
            onChangeText={setU}
            value={u}
            autoCapitalize="none"
          />
        </View>

        {/* Password Field */}
        <View style={styles.inputBox}>
          <MaterialCommunityIcons name="lock-outline" size={20} color="#666" />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry 
            placeholderTextColor="#444" 
            onChangeText={setP}
            value={p}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>

        {/* Navigate to Signup */}
        <TouchableOpacity onPress={() => router.push('/signup')}>
          <Text style={styles.link}>New here? Create an Account</Text>
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
    color: 'white', // Correct place for text color
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