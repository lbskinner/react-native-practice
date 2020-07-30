import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
  // pass the to the useApi hook and the call is made in the useApi hook when the request is called
  // request: loadListings - rename request to loadListings
  // data: listings - rename data to listings
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );

  // when need to make multiple api calls, or don't want to use destructuring, can use signal object
  // const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    // loadListings(1, 2, 3);
    loadListings();
    // getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {/* getListingsApi.error instead of error */}
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      {/* <ActivityIndicator visible={getListingsApi.loading} /> */}
      <ActivityIndicator visible={loading} />
      {/* data={getListingsApi.data} */}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
