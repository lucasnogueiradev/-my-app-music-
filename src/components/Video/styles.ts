import styled from "styled-components/native";

// Container
export const Container = styled.View`
  margin: 10px;
  padding: 24px;
  border-radius: 5px;
  z-index: 2;
  margin: 10px;
  padding: 16px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.secondary};

  elevation: 3;
`;

// Title
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.font};
  margin-bottom: 8px;
`;

// Description
export const Description = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.font};
  margin-bottom: 12px;
`;

// WebView (ou iframe)
export const WebView = styled.View`
  width: 100%;
  height: 200px; /* Ajuste conforme necessário */
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
`;

// Iframe (para uso em WebView)
export const WebViewContainer = styled.View`
  width: 100%;
  height: 200px;
`;
