import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, SafeAreaView } from "react-native";

import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import SanityClient from "../sanity";

const HomeScreen = () => {
  const [featured, setFeatured] = useState();
  useEffect(() => {
    SanityClient.fetch(
      `
          *[_type == "featured"]{
            ...,
            restaurants[]=>{
              ...,
              dishes[]=>{

              }
            }
          }
      `
    )
      .then((data) => setFeatured(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <SafeAreaView className="bg-white">
      <View className="flex-row items-center mx-4 space-x-2 mb-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1 ">
          <Text>Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={24} color={`#00CCBB`} />
          </Text>
        </View>

        <UserIcon size={35} color={`#00CCBB`} />
      </View>

      {/* Search */}

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 items-center bg-gray-200 p-3">
          <MagnifyingGlassIcon color={`gray`} size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100 "
        showsHorizontalScrollIndicator={false}
      >
        <Categories />

        {featured?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
        <View className="pb-36"></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
