import React, { useEffect } from 'react';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { Slot } from 'expo-router';

const tokenCache = {
    async getToken(key: string) {
        try {
            return SecureStore.getItemAsync(key);
        } catch (err) {
            return null;
        }
    },
    async saveToken(key: string, value: string) {
        try {
            return SecureStore.setItemAsync(key, value);
        } catch (err) {
            return;
        }
    }
};

const InitialLayout = () => {
    const { isSignedIn } = useAuth();
    useEffect(() => {
        console.log('clerk key', process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY);
        console.log('isSignedIn', isSignedIn);
    }, [isSignedIn]);

    return <Slot />;
};

const AppLayout = () => {
    return (
        <ClerkProvider
            tokenCache={tokenCache}
            publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
        >
            <InitialLayout />
        </ClerkProvider>
    );
};

export default AppLayout;
