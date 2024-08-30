import styled from "styled-components/native";

// Componente Container principal
export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
`;

// Componente para mostrar quando não há vídeos
export const NoVideosContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const TextNoVideo = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.font};
`;

// Componente para cada item de vídeo
export const VideoItemContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`;

// Estilo do item de vídeo
export const VideoItemCard = styled.View`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  /* shadow-color: #000; */
  /* shadow-offset: { width: 0, height: 2px }; */
  /* shadow-opacity: 0.1;
  shadow-radius: 3px; */
  /* elevation: 2; */
`;

// Estilo do título do vídeo
export const VideoTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.font};
`;

// Estilo da descrição do vídeo
export const VideoDescription = styled.Text`
  font-size: 14px;
  padding: 4px;
  color: ${(props) => props.theme.colors.font};
`;

// Componente para os botões
export const ButtonContainer = styled.View`
  margin: 10px;
`;

// Componente para o campo de entrada
export const Input = styled.TextInput`
  height: 40px;
  border-color: ${(props) => props.theme.colors.secondary};
  border-width: 1px;
  margin-bottom: 12px;
  width: 100%;
  padding: 8px;
  border-radius: 13px;
  padding-left: 13px;
  color: ${(props) => props.theme.colors.font};
  background-color: ${(props) => props.theme.colors.tertiary};
`;

// Componente para o botão
export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.button};
  border-radius: 20px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

// Componente para o texto do botão
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
