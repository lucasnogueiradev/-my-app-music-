import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { VideoItem } from "../components/Video/Video";
import { apiRest } from "../services/Api";
import * as S from "./styles";

interface IVideo {
  id: string;
  title: string;
  description: string;
  url?: string; // URL opcional do vídeo
}

export function List() {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  console.log(videos);
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
      console.error("API error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#6a1b9a" />;
  }

  return (
    <S.Container>
      <S.VideoItemContainer>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <VideoItem
              title={item.title}
              description={item.description}
              url="0GOUF8vNqzE"
              id={item.id}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <S.NoVideosContainer>
              <S.TextNoVideo>Nenhum vídeo encontrado</S.TextNoVideo>
            </S.NoVideosContainer>
          )}
        />
      </S.VideoItemContainer>
    </S.Container>
  );
}
