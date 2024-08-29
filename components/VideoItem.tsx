import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { WebView } from "react-native-webview";

interface IVideoItemProps {
  id: string;
  title: string;
  description: string;
  url?: string; // URL do YouTube
  onVideoPress?: (url: string) => void; // Callback opcional
}

const VideoItem = ({
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
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {Platform.OS === "web" ? (
        embedUrl ? (
          // <iframe
          //   src={embedUrl}
          //   height="315"
          //   width="560"
          //   frameBorder="0"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          //   allowFullScreen

          // />
          <iframe
            width="914"
            height="514"
            src={embedUrl}
            title="COMO ESCREVER NO PDF"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={styles.iframe}
          ></iframe>
        ) : null
      ) : (
        embedUrl && (
          <WebView
            source={{ uri: embedUrl }} // Usa a URL formatada para o WebView
            style={styles.webview}
          />
        )
      )}
      {url && (
        <Button
          title="Show Video URL"
          onPress={() => {
            if (onVideoPress) {
              onVideoPress(url);
            }
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#3b3536",
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
    color: "#fff",
  },
  webview: {
    width: "100%",
    height: 200, // Ajuste conforme necessário
  },
  iframe: {
    width: "100%",
    height: 200, // Ajuste conforme necessário
  },
});

export default VideoItem;
