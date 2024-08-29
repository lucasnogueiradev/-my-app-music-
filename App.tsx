import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Button,
  TextInput,
  Alert,
} from "react-native";
import VideoItem from "./components/VideoItem";
import { apiRest } from "./services/Api"; // Certifique-se de que o caminho está correto

interface IVideo {
  id: string;
  title: string;
  description: string;
  url?: string; // URL opcional do vídeo
}

export default function App() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  // Função para buscar dados
  const fetchVideos = async () => {
    setLoading(true);
    try {
      const response = await apiRest.get("/videos", {
        params: {
          title: title,
          description: description,
          url: url,
        },
      });
      console.log("Data fetched:", response.data);
      setVideos(response.data);
    } catch (error: any) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Função para registrar dados
  async function registrerDados() {
    setLoading(true);
    try {
      const data = {
        title: title,
        description: description,
        url: url,
      };
      const response = await apiRest.post("/videos", data);
      console.log("Data posted:", response.data);
      setVideos(response.data);
    } catch (error: any) {
      console.error("Error posting data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView style={styles.container}>
      {videos?.length === 0 ? (
        <View style={styles.noVideosContainer}>
          <Text>No videos available</Text>
        </View>
      ) : (
        videos?.map((video) => (
          <View key={video.id} style={styles.videoItemContainer}>
            <VideoItem
              title={video.title}
              description={video.description}
              url={video.url} // Passando a URL do vídeo
              id={video.id}
            />
          </View>
        ))
      )}
      <View style={styles.buttonContainer}>
        <Button title="Reload" onPress={fetchVideos} />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite algo..."
          value={title}
          onChangeText={setTitle}
          onBlur={() => Alert.alert("Campo perdido o foco")}
          onFocus={() => Alert.alert("Campo recebeu o foco")}
          onSubmitEditing={() => Alert.alert("Texto enviado", title)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a descrição..."
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a URL..."
          value={url}
          onChangeText={setUrl}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={registrerDados} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  noVideosContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoItemContainer: {
    marginBottom: 10,
  },
  buttonContainer: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    width: "100%",
    paddingHorizontal: 8,
  },
});
