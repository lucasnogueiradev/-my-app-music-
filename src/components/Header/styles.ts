import styled from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-top: 50px;
`;

export const ContentLogo = styled.View`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px; /* Para imagem circular */
`;

export const SearchBar = styled(TextInput)`
  flex: 1;
  height: 40px;
  border-radius: 20px;
  padding: 0 15px;
  background-color: ${(props) => props.theme.colors.gray};
  margin-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 17px;
  background-color: ${(props) => props.theme.colors.button};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.white};
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
`;
