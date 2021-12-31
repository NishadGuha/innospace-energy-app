import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import cors from 'cors';

import Input from './input';
import Button from './button';

export default function Form({ navigation }) {

  const { handleSubmit, control, formState: { errors } } = useForm();

  const handleRedirect = () => {
      navigation.navigate('Home');
  }

  var consumptionCalc = 0;

  const calculateConsumption = (data) => {
    axios.get(`http://localhost:8080/api/device/${data.device}`)
    .then(function (response) {
        const wattage = parseFloat(response.data.wattage);
        console.log("Wattage", wattage);

        consumptionCalc = (wattage * (parseInt(data.duration)/60)) / 1000;

        console.log("Consumption: " + consumptionCalc);
    })
    .catch(function (error) {
        console.log(error);
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(consumptionCalc);
        }, 2000);
    });
  }

  const onSubmit = async (data) => {
    let consumption = await calculateConsumption(data);

    axios.post('http://localhost:8080/api/usage/create', {
        "consumption": (consumption.toFixed(2)).toString(),
        "duration": data.duration,
        "house": parseInt(data.house),
        "device": parseInt(data.device)
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
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
            rules={{
                required: { value: true, message: 'House is required' }
            }}
            render={({ field: { onChange, value } }) => (
                <Input
                    error={errors.house}
                    errorText={errors?.house?.message}
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
            rules={{
                required: { value: true, message: 'Device is required' }
            }}
            render={({ field: { onChange, value } }) => ( 
                <Input
                    error={errors.device}
                    errorText={errors?.device?.message}
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
            rules={{
                required: { value: true, message: 'Duration is required' }
            }}
            render={({ field: { onChange, value } }) => (
                <Input
                    error={errors.duration}
                    errorText={errors?.duration?.message}
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
