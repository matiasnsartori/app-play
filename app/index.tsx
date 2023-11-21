import { Link } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { ClerkProvider } from '@clerk/clerk-expo';
import Constants from 'expo-constants';

interface AppProps {}

const App = (props: AppProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello world!</Text>
            <Link href={'./signUp'}>
                <Text>Sign Up</Text>
            </Link>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {}
});
