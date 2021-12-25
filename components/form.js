import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';

import Input from './input';
import Button from './button';

export default function App() {

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data, 'data');
  };

  return (
    <LinearGradient
        colors={['#ff4b1f', '#1fddff']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.gradient}
    >
    <View style={styles.container}> 
        <Controller
            name="house"
            defaultValue=""
            control={control}
            render={({ onChange, value }) => (
                <Input
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    placeholder="House Number"
                />
            )}
        />
        <Controller
            name="device"
            defaultValue=""
            control={control}
            render={({ onChange, value }) => (
                <Input
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    placeholder="Device"
                />
            )}
        />
        <Controller
            name="duration"
            defaultValue=""
            control={control}
            render={({ onChange, value }) => (
                <Input
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    placeholder="Duration (in minutes)"
                />
            )}
        />
        <Button onPress={handleSubmit(onSubmit)} label="Submit" />
    </View>
    </LinearGradient>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800]
};
