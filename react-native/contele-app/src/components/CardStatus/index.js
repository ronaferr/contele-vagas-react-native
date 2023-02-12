import React from "react";
import { Text, View } from 'react-native';
import styles from './styles';


export default function CardStatus({id, status, hora}){
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardId}>
          Pacote ID: {id}
        </Text>
        <Text>
          {status}
        </Text>
      </View>
      <View>
        <Text style={styles.cardDate}>
          {hora}
        </Text>
      </View>
    </View>
  )
};
