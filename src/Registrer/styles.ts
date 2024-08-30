import styled from "styled-components/native";

// Componente Container principal
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 20px;
`;

export const RegistrerContainer = styled.View`
  width: 100%;
  /* max-width: 400px;  */
  padding: 20px;
  /* background-color: ${(props) => props.theme.colors.tertiary}; */
  border-radius: 10px;
  /* elevation: 3; // Sombra no Android */
  /* shadow-color: #000; // Cor da sombra no iOS
  shadow-offset: { width: 0, height: 2 }; // Offset da sombra no iOS
  shadow-opacity: 0.2; // Opacidade da sombra no iOS
  shadow-radius: 3; // Raio da sombra no iOS */
`;

export const Input = styled.TextInput`
  height: 40px;
  border-color: ${(props) => props.theme.colors.secondary};
  border-width: 1px;
  margin-bottom: 12px;
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  padding-left: 13px;
  color: ${(props) => props.theme.colors.font};
  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.button};
  border-radius: 10px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
