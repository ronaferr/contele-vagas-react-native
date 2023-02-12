import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { Switch, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Location from 'expo-location';
import PackContext from '../../context/packsContext';
import { useNetInfo } from '@react-native-community/netinfo';
import { postPack } from '../../helpers/Fetch';
import RadioButton from '../../components/ButtonInterval';
import styles from './styles';

export default function Home({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [inte, setInt] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [messageConnection, setMessageConnection] = useState('Online');

  const netInfo = useNetInfo();

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const packContext = useContext(PackContext);

  const dataInterval = [
    { value: '10s' },
    { value: '5s' },
    { value: '3s' },
    { value: '1s' },
  ];

  function gotoStatus() {
    navigation.navigate('Status');
  };

  function saveInterval(value) {
    const valuesInterval = {
      '10s': 10000,
      '5s': 5000,
      '3s': 3000,
      '1s': 1000,
    };
    setInt(valuesInterval[value]);
  };

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    };
    const location = await Location.getCurrentPositionAsync({});
    packContext.savePacks(location);
  };

  useEffect(() => {
    const backupListPacks = packContext.packs;
    if (netInfo.isConnected) {
      setMessageConnection('Online');
      if (backupListPacks.length > 0) {
        backupListPacks.map((pack) => {
          postPack(pack)
        });
        packContext.setPacks([]);
      };
    } else {
      setMessageConnection('Offline');
    }
  });

  useEffect(() => {
    let intervalGet;
    if (isEnabled) {
      intervalGet = setInterval(() => {
        getLocation()
      }, inte);
      return () => clearInterval(intervalGet);
    } else {
      clearInterval(intervalGet);
    }
  }, [isEnabled])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.headerText}>
          Olá, bem-vindo
        </Text>
        <TouchableOpacity onPress={gotoStatus}>
          <Text style={styles.headerText}>
            Status
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerMain}>
        <Image
           source={require('../../media/icon.png')} 
           style={styles.imageMain}
        />
        <View>
          <Text style={styles.textMain}>
            My GPS - Tracking
          </Text>
          <Text style={styles.online}>
            {messageConnection}
          </Text>
        </View>
      </View>

      <View style={styles.containerForms}>
        <View>
          <Text style={styles.textForms}>
            Status do serviço
          </Text>
          <Text>
            Serviço {isEnabled ? 'Ativo' : 'Inativo'}
          </Text>
        </View>
        <View style={styles.containerBtn}>
          <Switch
            trackColor={{ false: '#767577', true: '#d3d3d3' }}
            thumbColor={isEnabled ? '#6ac780' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={styles.containerInterval}>
        <Text style={styles.textInterval}>
          Intervalo de comunicação
        </Text>
        <View style={styles.containerBtnInterval}>
          <RadioButton data={dataInterval} onSelect={(value) => saveInterval(value)} />
        </View>
      </View>
    </View>
  );
};
