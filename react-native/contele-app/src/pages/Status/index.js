import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CardStatus from '../../components/CardStatus';
import PackContext from '../../context/packsContext';
import { getPacks, getPackId } from '../../helpers/Fetch';
import styles from './styles';

export default function Status({ navigation }) {
  const [sincListaPacksKeys, setSincListaPacksKeys] = useState([]);
  const [newListPacks, setNewListPacks] = useState([]);
  const listPacks = useContext(PackContext);

  function gotoHome() {
    navigation.navigate('Home');
  }

  function sortPacks( a, b ) {
    if ( a.time < b.time ){
      return 1;
    }
    if ( a.time > b.time ){
      return -1;
    }
    return 0;
  };

  function makeNewListPacks(arrayKeys) {
    const currentList = newListPacks;
    arrayKeys.map((keyId) => {
      getPackId(keyId).then(response => {
        currentList.push(response.points[0]);
        setNewListPacks([...newListPacks, currentList])
      })
    });
  };

  useEffect(() => {
    if (listPacks.packs.length > 0) {
      setNewListPacks(listPacks.packs);
    };

    getPacks().then(response => {
      setSincListaPacksKeys(response.keys);
      makeNewListPacks(response.keys)
    });
    
  }, []);

  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={gotoHome}
        >
          <Text style={styles.headerText}>
            Voltar
          </Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Status
        </Text>

      </View>

      <ScrollView style={styles.scroll}>
        {newListPacks.sort(sortPacks).map((item) => {
          let statusPack = 'Pendente Sincronizar';
          for (var i = 0; i < sincListaPacksKeys.length; i++) {
            if (item.id === sincListaPacksKeys[i]) {
              statusPack = 'Sincronizado'
            }
          }
          if (item.id && item.id !== "undefined") {
            return (<CardStatus
              key={item.id}
              id={item.id}
              status={statusPack}
              hora={item.time}
            />)
          }
        })}
      </ScrollView>
    </View>
  );
};
