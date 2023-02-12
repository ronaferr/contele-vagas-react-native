import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import styles from './styles';

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View style={styles.containerBtnInterval}>
      {data.map((item) => {
        return (
          <Pressable
            key={item.value}
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => selectHandler(item.value)}>
            <Text style={styles.option}> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
