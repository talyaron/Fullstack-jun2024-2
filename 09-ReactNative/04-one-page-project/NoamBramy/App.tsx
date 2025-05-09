import {SafeAreaView,ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#87B8C9" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <View style={styles.logoOuterCircle}>
                <View style={styles.logoInnerCircle} />
              </View>
              <Text style={styles.logoText}>xefag</Text>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="account-circle-outline" size={28} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="cart-outline" size={28} color="#FFFFFF" />
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>3</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.navButtonsContainer}>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
              <Text style={styles.navButtonText}>Contact</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.heroSection}>
            <Text style={styles.subHeadline}>Flexible solution</Text>
            <Text style={styles.subHeadlineSmall}>for all kind of people</Text>
            <Text style={styles.mainHeadline}>Powerful</Text>
            <Text style={styles.mainHeadline}>Boost</Text>
          </View>

          <View style={styles.productsContainer}>
            <View style={[styles.productCardBase, styles.relaxProductTransform]}>
              <View style={[styles.bottleShape, styles.relaxBottleColor]} />
              <View style={styles.productInfoContainer}>
                <View style={styles.productLogoContainer}>
                  <View style={styles.productLogoOuterCircle} />
                  <View style={styles.productLogoInnerCircle} />
                </View>
                <Text style={styles.productNameText}>Relax</Text>
                <Text style={styles.productSubText}>by Xefag</Text>
              </View>
            </View>

            <View style={[styles.productCardBase, styles.sleepProductTransform]}>
              <View style={[styles.bottleShape, styles.sleepBottleColor]} />
              <View style={styles.productInfoContainer}>
                <View style={styles.productLogoContainer}>
                  <View style={styles.productLogoOuterCircle} />
                  <View style={styles.productLogoInnerCircle} />
                </View>
                <Text style={styles.productNameText}>Sleep</Text>
                <Text style={styles.productSubText}>by Xefag</Text>
              </View>
            </View>
          </View>

          <View style={styles.footerSection}>
            <Text style={styles.aboutText}>About Xefag</Text>
            <Text style={styles.footerHeadline}>Helping humans</Text>
            <Text style={styles.footerHeadline}>become happier &</Text>
            <Text style={styles.footerHeadline}>healthier!</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#87B8C9',
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoOuterCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoInnerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  logoText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 18,
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    right: -6,
    top: -6,
    backgroundColor: '#F44336',
    borderRadius: 9,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  navButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },
  navButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginHorizontal: 7,
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 35,
  },
  subHeadline: {
    fontSize: 17,
    color: '#E0F7FA',
    opacity: 0.95,
  },
  subHeadlineSmall: {
    fontSize: 15,
    color: '#E0F7FA',
    opacity: 0.95,
    marginBottom: 10,
  },
  mainHeadline: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 55,
    textAlign: 'center',
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 50,
    minHeight: 280,
  },
  productCardBase: {
    width: '42%',
    alignItems: 'center',
  },
  relaxProductTransform: {
    transform: [{ rotate: '-8deg' }],
    marginRight: -15,
    zIndex: 1,
  },
  sleepProductTransform: {
    transform: [{ rotate: '8deg' }],
    marginLeft: -15,
  },
  bottleShape: {
    width: '80%',
    height: 160,
    borderRadius: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: 12,
  },
  relaxBottleColor: {
    backgroundColor: '#FFD700',
  },
  sleepBottleColor: {
    backgroundColor: '#DC143C',
  },
  productInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  productLogoContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  productLogoOuterCircle: {},
  productLogoInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  productNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#263238',
    textAlign: 'center',
  },
  productSubText: {
    fontSize: 11,
    color: '#455A64',
    textAlign: 'center',
  },
  footerSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  aboutText: {
    fontSize: 15,
    color: '#E0F2F7',
    opacity: 0.95,
    marginBottom: 8,
  },
  footerHeadline: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 30,
  },
});