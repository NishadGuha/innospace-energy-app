import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { t, color } from 'react-native-tailwindcss';
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";

import Input from './input';
import Button from './button';

export default function ReportForm({ navigation }) {

  const { handleSubmit, control, formState: { errors } } = useForm();

  const handleRedirect = () => {
      navigation.navigate('Home');
  }

  const onSubmit = (data) => {
      console.log(data);
      showMessage({
        message: "Feedback successfully sent!",
        description: `The problem that you detected or your ideas have been sent to the development team successfully!`,
        type: "success",
    });
  }

  return (
    <LinearGradient
        colors={['#ff4b1f', '#1fddff']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 1}}
        style={styles.gradient}
    >
    <View style={styles.container}> 
        <Controller
            name="type"
            defaultValue=""
            control={control}
            render={({ field: { onChange, value } }) => (
                <Input
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    placeholder="Bug, Issue or Request"
                />
            )}
        />
        <Controller
            name="feedback"
            defaultValue=""
            control={control}
            rules={{
                required: { value: true, message: 'Feedback is required' }
            }}
            render={({ field: { onChange, value } }) => ( 
                <Input
                    error={errors.feedback}
                    errorText={errors?.feedback?.message}
                    onChangeText={(text) => onChange(text)}
                    value={value}
                    placeholder="Give us your thoughts..."
                />
            )}
        />
        <Button onPress={handleSubmit(onSubmit)} label="Submit" />
        <FlashMessage position="top" />
    </View>
    </LinearGradient>
  );
}

const styles = {
  container: [t.flex1, t.justifyCenter, t.itemsCenter, t.p6, t.bgGray200],
  switch: [t.mB4, t.selfStart, t.flexRow, t.itemsCenter],
  switchText: [t.textBase, t.mR3, t.textGray800]
};
