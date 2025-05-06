import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { useState } from "react";

// Get the width of the device screen
const { width } = Dimensions.get("window");

export default function App() {
  const [searchText, setSearchText] = useState("");

  // Regions data for the horizontal category scroll
  const regions = [
    { id: 1, name: "Asia", selected: false },
    { id: 2, name: "Europe", selected: true },
    { id: 3, name: "America", selected: false },
    { id: 4, name: "Australia", selected: false },
  ];

  // Popular destination data 
  const popularDestinations = [
    {
      id: 1,
      name: "Manarola",
      country: "Italia",
      rating: 4.9,
      image: "https://picsum.photos/id/1039/600/400", 
    },
    {
      id: 2,
      name: "London",
      country: "UK",
      rating: 4.8,
      image: "https://picsum.photos/id/1019/600/400", 
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Header with location */}
      <View style={styles.header}>
        <View>
          <Text style={styles.locationLabel}>Current Location</Text>
          <View style={styles.locationSelector}>
            <Text style={styles.locationText}>Netherlands</Text>
            <Text style={styles.dropdownIcon}>▼</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search destination..."
            placeholderTextColor="#666"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterIcon}>≡</Text>
        </TouchableOpacity>
      </View>

      {/* Region selector */}
      <View style={styles.regionScrollContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.regionContainer}
        >
          {regions.map((region) => (
            <TouchableOpacity
              key={region.id}
              style={[
                styles.regionButton,
                region.selected && styles.selectedRegionButton,
              ]}
            >
              <Text
                style={[
                  styles.regionButtonText,
                  region.selected && styles.selectedRegionButtonText,
                ]}
              >
                {region.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Popular Destinations Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Destination</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Destinations List */}
      <ScrollView
        style={styles.destinationsScrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.destinationsContainer}>
          {popularDestinations.map((destination) => (
            <View key={destination.id} style={styles.destinationCard}>
              <Image
                source={{ uri: destination.image }}
                style={styles.destinationImage}
                resizeMode="cover"
              />

              {/* Rating Badge */}
              <View style={styles.ratingBadge}>
                <Text style={styles.starIcon}>⭐</Text>
                <Text style={styles.ratingText}>{destination.rating}</Text>
              </View>

              {/* Favorite Button */}
              <TouchableOpacity style={styles.favoriteButton}>
                <Text style={styles.favoriteIcon}>🤍</Text>
              </TouchableOpacity>

              {/* Destination Info */}
              <View style={styles.destinationInfo}>
                <View style={styles.locationPin}>
                  <Text style={styles.pinIcon}>📍</Text>
                  <Text style={styles.countryText}>{destination.country}</Text>
                </View>
                <Text style={styles.destinationName}>{destination.name}</Text>
              </View>

              {/* Details Button */}
              <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsIcon}>↗</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navButton, styles.activeNavButton]}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navIcon}>🏷️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navIcon}>📅</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  locationLabel: {
    fontSize: 12,
    color: "#777",
  },
  locationSelector: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginRight: 5,
  },
  dropdownIcon: {
    fontSize: 14,
    color: "#fff",
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationIcon: {
    fontSize: 18,
    color: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  searchInputContainer: {
    flex: 1,
    height: 45,
    backgroundColor: "#222",
    borderRadius: 25,
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
    color: "#777",
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: "#fff",
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  filterIcon: {
    fontSize: 18,
    color: "#fff",
  },
  regionScrollContainer: {
    height: 38,
    marginBottom: 20,
  },
  regionContainer: {
    height: 38,
    alignItems: "center",
  },
  regionButton: {
    paddingHorizontal: 20,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedRegionButton: {
    backgroundColor: "#ffeb3b",
  },
  regionButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 13,
  },
  selectedRegionButtonText: {
    color: "#000",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  viewAllText: {
    fontSize: 14,
    color: "#ffeb3b",
  },
  destinationsScrollView: {
    flex: 1,
  },
  destinationsContainer: {
    marginBottom: 70,
  },
  destinationCard: {
    position: "relative",
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 20,
    height: 250, // Увеличенная высота карточки
  },
  destinationImage: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  ratingBadge: {
    position: "absolute",
    top: 15,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  starIcon: {
    fontSize: 12,
    color: "#ffeb3b",
    marginRight: 4,
  },
  ratingText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  favoriteButton: {
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  favoriteIcon: {
    fontSize: 16,
  },
  destinationInfo: {
    position: "absolute",
    bottom: 15,
    left: 15,
  },
  locationPin: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  pinIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  countryText: {
    color: "#fff",
    fontSize: 14,
  },
  destinationName: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  detailsButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "#ffeb3b",
    borderRadius: 20,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsIcon: {
    fontSize: 16,
    color: "#000",
  },
  bottomNav: {
    position: "absolute",
    bottom: 20,
    left: 30,
    right: 30,
    backgroundColor: "rgba(30,30,30,0.8)",
    borderRadius: 30,
    height: 55,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  navButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  activeNavButton: {
    backgroundColor: "#ffeb3b",
  },
  navIcon: {
    fontSize: 18,
  },
});
