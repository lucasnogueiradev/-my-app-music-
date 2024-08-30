import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
// import WebView from "react-native-webview";
import YoutubePlayer from "react-native-youtube-iframe";
import * as S from "./styles";

type IVideoItemProps = {
  id?: string;
  title?: string;
  description?: string;
  url?: string;
  onVideoPress?: (url: string) => void; // Callback opcional
};

export const VideoItem = ({
  title,
  description,
  url,
  onVideoPress,
}: IVideoItemProps) => {
  // Função para formatar a URL de incorporação
  const formatEmbedUrl = (url: string) => {
    const urlParts = url.split("/");
    const videoId = urlParts[urlParts.length - 1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Formata a URL se estiver disponível
  const embedUrl = url ? formatEmbedUrl(url) : "";

  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      {Platform.OS === "web" ? (
        embedUrl ? (
          <S.WebViewContainer>
            <iframe
              src={embedUrl}
              title="COMO ESCREVER NO PDF"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </S.WebViewContainer>
        ) : null
      ) : (
        embedUrl && (
          // <WebView source={{ uri: embedUrl }} style={styles.webview} />
          <S.WebViewContainer>
            {/* <iframe
              src={embedUrl}
              title="COMO ESCREVER NO PDF"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe> */}
            <YoutubePlayer videoId="0GOUF8vNqzE" height={180} />
          </S.WebViewContainer>
          // <Text>teste</Text>
        )
      )}
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};
