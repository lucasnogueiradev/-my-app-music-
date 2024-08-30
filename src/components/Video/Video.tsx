import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";
import { WebView } from "react-native-webview";
import { styles } from "./styles";

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
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {Platform.OS === "web" ? (
        embedUrl ? (
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
          // <WebView source={{ uri: embedUrl }} style={styles.webview} />
          <iframe
            width="914"
            height="514"
            src={embedUrl}
            title="COMO ESCREVER NO PDF"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={styles.iframe}
          ></iframe>
          // <Text>teste</Text>
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
