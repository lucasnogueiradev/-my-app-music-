import React, { useEffect, useState } from "react";
import { Alert, ActivityIndicator } from "react-native";
import * as S from "./styles";
import { apiRest } from "../services/Api";

interface IVideo {
  id: string;
  title: string;
  description: string;
  url?: string; // URL opcional do vídeo
}

export function Registrer() {
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
      setVideos(response.data);
    } catch (error: any) {
      console.error("API error:", error);
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
      setVideos(response.data);
      Alert.alert("Cadastro realizado com sucesso");
      setTitle("");
      setDescription("");
      setUrl("");
    } catch (error: any) {
      console.error("Error posting data:", error);
      Alert.alert("Erro ao cadastrar", "Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#6a1b9a" />;
  }

  return (
    <S.Container>
      <S.RegistrerContainer>
        <S.Input
          placeholder="Digite o título..."
          value={title}
          onChangeText={setTitle}
          placeholderTextColor="#a8a8a8"
        />
        <S.Input
          placeholder="Digite a descrição..."
          value={description}
          onChangeText={setDescription}
          placeholderTextColor="#a8a8a8"
        />
        <S.Input
          placeholder="Digite a URL..."
          value={url}
          onChangeText={setUrl}
          placeholderTextColor="#a8a8a8"
        />
        <S.Button onPress={registrerDados}>
          <S.ButtonText>Cadastrar</S.ButtonText>
        </S.Button>
      </S.RegistrerContainer>
    </S.Container>
  );
}
