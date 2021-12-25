import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import ReactDOM from "react-dom"
import { useForm, Controller } from "react-hook-form";
import { LinearGradient } from 'expo-linear-gradient'

export default function form() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    });
      
    const onSubmit = data => console.log(data);

    return (
        <LinearGradient
            colors={['#ff4b1f', '#1fddff']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 1}}
            style={styles.gradient}
        >
        <View style={styles.container}> 
            <Controller
                control={control}
                rules={{
                required: true,
            }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}  
                name="firstName"
            />
            {errors.firstName && <Text>This is required.</Text>}
            <Controller
                control={control}
                rules={{
                maxLength: 100,
            }}
             render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
            )}
            name="lastName"
            />
            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
})
