import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

interface BottomBarProps {
  onProfilePress: () => void;
}

export const BottomBar = ({ onProfilePress }: BottomBarProps) => {
  return (
    <View style={styles.container}>
      <NavItem 
        img={require('../../assets/icons/marketplace.png')} 
        label="Marketplace" 
        active={true} 
      />
      
      <NavItem 
        img={require('../../assets/icons/services.png')} 
        label="Services" 
      />
      
      <View style={{ width: 60 }} />

      <NavItem 
        img={require('../../assets/icons/call.png')} 
        label={"Roadside\nassistance"} 
      />

      <NavItem 
        img={require('../../assets/icons/profile.png')} 
        label="Profile" 
        onPress={onProfilePress} 
      />

      <LinearGradient colors={['#D31D45', '#1E3A8A']} style={styles.fab}>
        <MaterialCommunityIcons name="qrcode-scan" size={28} color="white" />
      </LinearGradient>
    </View>
  );
};

const NavItem = ({ img, label, active, onPress }: any) => {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Image 
        source={img} 
        style={[
          styles.iconImg, 
          // Using undefined allows the original image colors to show
          { tintColor: active ? undefined : '#64748B' } 
        ]} 
        resizeMode="contain" 
      />
      <Text style={[
        styles.label, 
        { color: active ? '#004AAD' : '#64748B' }
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { 
    height: 90, 
    flexDirection: 'row', 
    backgroundColor: '#F1F8FF', 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    position: 'absolute', 
    bottom: 0, 
    width: '100%', 
    paddingHorizontal: 10,
    elevation: 20,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    alignItems: 'center'
  },
  navItem: { 
    flex: 1, 
    height: '100%',
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 5
  },
  iconImg: {
    width: 26,
    height: 26,
    marginBottom: 4
  },
  label: { 
    fontSize: 9, 
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 11,
  },
  fab: { 
    position: 'absolute', 
    top: -30, 
    left: width / 2 - 35, 
    width: 70, 
    height: 70, 
    borderRadius: 35, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 6, 
    borderColor: 'white',
    elevation: 5
  },
});