import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import Nav from "./Nav";
import { LinearGradient } from "expo-linear-gradient";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  const image = {
    uri: `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`,
  };
  console.log(image);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      // const randomNumber =
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie.title);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Nav />
      <Text style={styles.text}>
        {movie?.title || movie?.name || movie?.original_name}
      </Text>
      <LinearGradient
        colors={["transparent", "black"]}
        style={styles.linearGradient}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    height: "70%",
  },
  text: {
    color: "white",
  },
  linearGradient: {
    marginTop: "67%",
    height: 70,
  },
});
