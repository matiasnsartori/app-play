import React from 'react';
import { Stack } from 'expo-router';

const PublicLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#075B9E'
                },
                headerTintColor: '#fff',
                headerBackTitle: 'Back'
            }}
        >
            <Stack.Screen
                name="login"
                options={{
                    headerTitle: 'APP PLAY'
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="register"
                options={{
                    headerTitle: 'Crear Cuenta'
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="reset"
                options={{
                    headerTitle: 'Reestablecer Contraseña'
                }}
            ></Stack.Screen>
            <Stack.Screen
                name="(inscription)/inscriptionSelect"
                options={{
                    headerTitle: 'Seleccionar Inscripción'
                }}
            ></Stack.Screen>
        </Stack>
    );
};

export default PublicLayout;
