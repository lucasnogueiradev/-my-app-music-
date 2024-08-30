import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import * as S from "./styles";
import logoImg from "../../../assets/logo.png";

import { Registrer } from "../../Registrer/Registrer";
// import { PlusSquare } from "phosphor-react-native";
export const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <S.Container>
      <S.ContentLogo>
        <S.Logo source={logoImg} />
      </S.ContentLogo>
      <S.SearchBar
        placeholder="Pesquisar..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <S.Button onPress={toggleModal}>
        <S.ButtonText>
          {/* <PlusSquare size={32} weight="fill" /> */}+
        </S.ButtonText>
      </S.Button>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View style={{ flex: 1, padding: 20 }}>
          <TouchableOpacity
            onPress={toggleModal}
            style={{ marginTop: 120, padding: 10 }}
          >
            <Text style={{ color: "#fff", padding: 10 }}>Voltar</Text>
          </TouchableOpacity>
          <Registrer />
        </View>
      </Modal>
    </S.Container>
  );
};
