import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ResultsPage = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <Text style={styles.header}>Results</Text>

      {/* Main Shoe Info Section */}
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Bred-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358" }}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.shoeName}>Air Jordan 1 Retro High</Text>
        <Text style={styles.shoeDetail}>Year: 2020</Text>
        <Text style={styles.shoeDetail}>Colorway: Bred Toe</Text>
      </View>

      {/* Buy It Section */}
      <Text style={styles.sectionTitle}>Buy It</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
        {Array.from({ length: 4 }).map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => {}}
          >
            <Image
              source={{ uri: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Bred-Toe-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358" }}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>StockX</Text>
              <Text style={styles.cardPrice}>$450</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1f2937',
  },
  imageWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  mainImage: {
    width: '100%',
    height: 280,
    borderRadius: 16,
    backgroundColor: '#fff',
  },
  infoContainer: {
    marginBottom: 24,
    paddingHorizontal: 8,
  },
  shoeName: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    color: '#111827',
    textAlign: 'center',
  },
  shoeDetail: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 4,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1f2937',
  },
  slider: {
    marginBottom: 32,
  },
  card: {
    width: 176,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 112,
  },
  cardContent: {
    padding: 8,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#111827',
  },
  cardPrice: {
    fontSize: 14,
    color: 'green',
  },
});

export default ResultsPage;
