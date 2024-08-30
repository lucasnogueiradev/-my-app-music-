import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Button,
  TextInput,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { VideoItem } from "../components/Video/Video";
import { apiRest } from "../services/Api";
import { styles } from "./styles";

interface IVideo {
  id: string;
  title: string;
  description: string;
  url?: string; // URL opcional do vídeo
}

export function Home() {
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
    <View style={styles.container}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <VideoItem
            title={item.title}
            description={item.description}
            url={item.url}
            id={item.id}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.noVideosContainer}>
            <Text>Nenhum vídeo encontrado</Text>
          </View>
        )}
      />
      <View style={styles.layout}>
        <TextInput
          style={styles.input}
          placeholder="Digite algo..."
          value={title}
          onChangeText={setTitle}
          placeholderTextColor="#a8a8a8"
          onSubmitEditing={() => Alert.alert("Texto enviado", title)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a descrição..."
          value={description}
          onChangeText={setDescription}
          placeholderTextColor="#a8a8a8"
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a URL..."
          value={url}
          onChangeText={setUrl}
          placeholderTextColor="#a8a8a8"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={registrerDados}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
