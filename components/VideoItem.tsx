import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Audio } from "expo-av";

interface IVideoItemProps {
  id: string;
  title: string;
  description: string;
  url?: string;
}

const VideoItem = ({ title, description, url }: IVideoItemProps) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playSound = async () => {
    if (!url) {
      Alert.alert("No URL", "No audio URL provided");
      return;
    }

    const { sound } = await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: true }
    );
    setSound(sound);
    setIsPlaying(true);

    sound.setOnPlaybackStatusUpdate((status: { didJustFinish: any }) => {
      if (status.didJustFinish) {
        setIsPlaying(false);
      }
    });
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <Button
        title={isPlaying ? "Stop" : "Play"}
        onPress={isPlaying ? stopSound : playSound}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
  },
});

export default VideoItem;
