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
  id: string; // `id` é agora obrigatório
  title: string;
  description: string;
}

export default function App() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  console.log(title, description, url);

  const handleTextChange = (text: string) => {
    console.log("Texto digitado:", text);
    setTitle(title); // Atualiza o estado com o novo texto
  };
  // Função para buscar dados
  const fetchVideos = async () => {
    setLoading(true);

    try {
      const data = {
        title: title,
        description: description,
        url: url, // URL do vídeo
      };
      const response = await apiRest.get("/videos", {
        params: {
          title: title,
          description: description,
          url: url,
        },
      });
      console.log("Data fetched:", response.data);
      setVideos(response.data); // Atualiza o estado com os vídeos recebidos
    } catch (error: any) {
      console.error("Error fetching data:", error);
      // Opcional: Definir um estado de erro aqui
    } finally {
      setLoading(false);
    }
  };

  async function registrerDados() {
    setLoading(true);
    try {
      const data = {
        title: title,
        description: description,
        url: url,
      };
      const response = await apiRest.post("/videos", data); // Passar os dados como o segundo argumento
      console.log("Data posted:", response.data);
      setVideos(response.data); // Atualiza o estado com os vídeos recebidos
    } catch (error: any) {
      console.error("Error posting data:", error);
      // Opcional: Definir um estado de erro aqui
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

  const handleBlur = () => {
    Alert.alert("Campo perdido o foco");
  };

  const handleFocus = () => {
    Alert.alert("Campo recebeu o foco");
  };

  const handleSubmitEditing = () => {
    Alert.alert("Texto enviado", title);
  };
  return (
    <ScrollView style={styles.container}>
      {videos?.length === 0 ? (
        <View style={styles.noVideosContainer}>
          <Text>No videos available</Text>
        </View>
      ) : (
        videos?.map((video) => (
          <View key={video?.id} style={styles.videoItemContainer}>
            <VideoItem
              title={video?.title}
              description={video?.description}
              id={video?.id}
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
          onBlur={handleBlur}
          onFocus={handleFocus}
          onSubmitEditing={handleSubmitEditing}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite algo..."
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite algo..."
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
    marginBottom: 10, // Espaço entre os itens
  },
  buttonContainer: {
    margin: 10, // Margem ao redor do botão
  },
  containerInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
