import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// MVC Imports
import { BottomBar } from '../src/components/BottomBar';
import { CategoryCard } from '../src/components/CategoryCard';
import { ProductCard } from '../src/components/ProductCard';
import { useAuthStore } from '../src/controllers/AuthController';

const { width } = Dimensions.get('window');

const BANNERS = [
  { id: '1', image: require('../assets/images/elf-banner3.png') },
  { id: '2', image: require('../assets/images/elf-banner1.png') },
];

const FEATURED_PRODUCTS = [
  { id: '1', title: 'PIAA Air Filter\nPT108', image: require('../assets/images/product1.png') },
  { id: '2', title: 'PIAA Oil Filter\nZ8M', image: require('../assets/images/product2.png') },
  { id: '3', title: 'PIAA Air Filter\nPT83', image: require('../assets/images/product3.png') },
  { id: '4', title: 'PIAA Air Filter\nPT108', image: require('../assets/images/product1.png') },
  { id: '5', title: 'PIAA Oil Filter\nZ8M', image: require('../assets/images/product2.png') },
  { id: '6', title: 'PIAA Air Filter\nPT83', image: require('../assets/images/product3.png') },
];

export default function Marketplace() {
  const router = useRouter();
  const { currentUser, logout } = useAuthStore();
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 1. HEADER SECTION */}
        <View style={styles.header}>
          <Image source={require('../assets/images/topbg.png')} style={styles.headerBg} />
          <View style={styles.headerContent}>
            <View style={styles.topBar}>
              <View style={styles.userRow}>
                <Image source={require('../assets/images/user.png')} style={styles.avatar} />
                <Text style={styles.userName}>{currentUser}</Text>
              </View>
              <View style={styles.iconRow}>
                <MaterialCommunityIcons name="bell-outline" size={24} color="white" />
                <View>
                  <MaterialCommunityIcons name="cart-outline" size={24} color="white" />
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>1</Text>
                  </View>
                </View>
                <MaterialCommunityIcons name="view-grid-outline" size={24} color="white" />
              </View>
            </View>

            <View style={styles.searchBar}>
              <MaterialCommunityIcons name="magnify" size={20} color="#666" />
              <TextInput 
                placeholder="Search Products" 
                placeholderTextColor="#999" 
                style={styles.searchInput} 
              />
            </View>

            <View style={styles.hero}>
              <Text style={styles.heroText}>Unlock Peak Performance with the perfect Lubricant Oils</Text>
              <Image source={require('../assets/images/GasolineBottle.png')} style={styles.heroBottle} />
            </View>
          </View>
        </View>

        {/* 2. CATEGORIES SECTION */}
        <View style={styles.section}>
          <View style={styles.catRow}>
            <CategoryCard name="Cars" image={require('../assets/images/cars.png')} />
            <CategoryCard name="Bikes" image={require('../assets/images/bikes.png')} />
            <CategoryCard name="CNG" image={require('../assets/images/cng.png')} />
            <CategoryCard name={`Truck &\nBuses`} image={require('../assets/images/truckBus.png')} />
          </View>
        </View>

        {/* 3. WHAT'S NEW SECTION */}
        <View style={styles.whatsNewSection}>
          <Text style={styles.sectionTitle}>What's New</Text>
          <FlatList
            data={BANNERS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContent}
            snapToInterval={width * 0.8 + 15}
            decelerationRate="fast"
            renderItem={({ item }) => (
              <View style={styles.bannerContainer}>
                <Image source={item.image} style={styles.bannerImage} resizeMode="stretch" />
              </View>
            )}
          />
        </View>

        {/* 4. FEATURED PRODUCTS SECTION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <View style={styles.productGrid}>
            {FEATURED_PRODUCTS.map((p) => (
              <ProductCard key={p.id} title={p.title} image={p.image} />
            ))}
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* 5. BOTTOM BAR */}
      <BottomBar onProfilePress={() => setIsLogoutVisible(true)} />

      {/* 6. LOGOUT MODAL */}
      <Modal transparent visible={isLogoutVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.logoutCard}>
            <MaterialCommunityIcons name="logout" size={50} color="#D31D45" />
            <Text style={styles.logoutTitle}>Sign Out</Text>
            <Text style={styles.logoutSub}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setIsLogoutVisible(false)}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.confirmBtn} 
                onPress={() => {
                  setIsLogoutVisible(false);
                  logout();
                  router.replace('/');
                }}
              >
                <Text style={styles.confirmBtnText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: 'white' },
  header: { height: 280, width: '100%' },
  headerBg: { ...StyleSheet.absoluteFillObject, width: '100%', height: '100%' },
  headerContent: { padding: 20, paddingTop: 50 },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  userRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 35, height: 35, borderRadius: 18, borderWidth: 1, borderColor: 'white' },
  userName: { color: 'white', marginLeft: 10, fontWeight: 'bold' },
  iconRow: { flexDirection: 'row', gap: 15 },
  badge: { position: 'absolute', right: -5, top: -5, backgroundColor: 'red', borderRadius: 10, paddingHorizontal: 4 },
  badgeText: { color: 'white', fontSize: 10 },
  searchBar: { flexDirection: 'row', backgroundColor: 'white', borderRadius: 12, padding: 10, marginTop: 25, alignItems: 'center' },
  searchInput: { flex: 1, marginLeft: 10, color: '#333' },
  hero: { flexDirection: 'row', marginTop: 20, alignItems: 'center' },
  heroText: { color: 'white', fontSize: 16, fontWeight: '600', flex: 1, lineHeight: 22 },
  heroBottle: { width: 80, height: 80, resizeMode: 'contain' },
  section: { paddingHorizontal: 20, marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1E293B', marginBottom: 15 },
  catRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  whatsNewSection: { marginVertical: 10 },
  flatListContent: { paddingLeft: 20, paddingRight: 5 },
  bannerContainer: { width: width * 0.8, height: 160, marginRight: 15, borderRadius: 15, overflow: 'hidden', backgroundColor: '#f0f0f0' },
  bannerImage: { width: '100%', height: '100%' },
  bottomSpacer: { height: 120 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  logoutCard: { width: width * 0.8, backgroundColor: 'white', borderRadius: 20, padding: 30, alignItems: 'center' },
  logoutTitle: { fontSize: 20, fontWeight: 'bold', marginTop: 15 },
  logoutSub: { fontSize: 14, color: '#64748B', textAlign: 'center', marginVertical: 15 },
  modalButtons: { flexDirection: 'row', gap: 15 },
  cancelBtn: { flex: 1, paddingVertical: 12, borderRadius: 10, borderWidth: 1, borderColor: '#DDD', alignItems: 'center' },
  cancelBtnText: { color: '#666' },
  confirmBtn: { flex: 1, paddingVertical: 12, borderRadius: 10, backgroundColor: '#D31D45', alignItems: 'center' },
  confirmBtnText: { color: 'white', fontWeight: 'bold' },
});