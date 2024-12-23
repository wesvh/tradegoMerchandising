import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { NotificationsScreenStyles as styles } from "./NotificationsScreenStyles";

export default function NotificationsScreen(props: any) {
  const { responseSubscribe, getResponseSubscribe, navigation, route } = props;

  return (
    <Modal visible={responseSubscribe} transparent={true} animationType={"fade"}>
      <View style={styles.modalContainer}>
        <View style={styles.modalStyle}>
          <View style={styles.tittle}>
            <Text style={styles.textTitle}>ALTIPAL</Text>
          </View>
          <Text style={styles.text}>Tiene un mensaje pendiente por leer</Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => {
                getResponseSubscribe();
              }}
              style={styles.Cancelar}>
              <Text style={styles.colorTextButtonNo}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("MessagesScreen", {
                  DrawerWay: true,
                  route: route
                });
                getResponseSubscribe();
              }}
              style={styles.Mensajes}>
              <Text style={styles.colorTextButtonNo}>Mensajes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
