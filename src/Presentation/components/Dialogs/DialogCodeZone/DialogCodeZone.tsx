import React from "react";
import { ActivityIndicator, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Overlay } from "react-native-elements";
import { DialogCodeZoneStyle as styles } from "./DialogCodeZoneStyle";
import { DialogCodeZoneViewModel } from "./DialogCodeZoneViewModel";
import { useFocusEffect } from "@react-navigation/native";

const DialogCodeZone = ({
  visibility,
  setVisible,
  showVersion: cb,
  setLoadingSignIn,
  showDialog
}: any) => {
  const { showVersion, zone, writeZone, loading, validateZone } = DialogCodeZoneViewModel(
    setLoadingSignIn,
    showDialog
  );

  useFocusEffect(
    React.useCallback(() => {
      writeZone("");
      return () => {
        writeZone("");
        showVersion(cb, true);
      };
    }, [])
  );

  return (
    <Overlay isVisible={visibility} overlayStyle={styles.modalView}>
      <TouchableOpacity onPress={() => setVisible(false)}>
        <Text style={styles.textStyleClose}>x</Text>
      </TouchableOpacity>
      <Text style={styles.modalText}>Código de zona</Text>
      <TextInput
        style={styles.InputText}
        value={zone}
        placeholder="#Zona"
        onChangeText={writeZone}
        maxLength={5}
        keyboardType="numeric"
        onFocus={() => showVersion(cb, false)}
        onBlur={() => showVersion(cb, true)}
        onSubmitEditing={validateZone}
      />
      <View style={styles.centerButton}>
        {!loading ? (
          <TouchableOpacity
            style={[styles.button, styles.buttonClose]}
            onPress={validateZone}
            >
            <Text style={styles.textStyle}>Validar</Text>
          </TouchableOpacity>
        ) : (
          <View style={[styles.button, styles.buttonClose]}>
            <ActivityIndicator size={19} color="white" animating={true} />
          </View>
        )}
      </View>
    </Overlay>
  );
};

export default DialogCodeZone;
