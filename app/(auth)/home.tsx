import { View, Text } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import { Button, useTheme } from 'react-native-paper';

const Home = () => {
    const { user } = useUser();
    const theme = useTheme();

    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Welcome, {user?.emailAddresses[0].emailAddress} 🎉</Text>
            <Button
                mode="outlined"
                icon="camera"
                onPress={() => alert('Pressed')}
            >
                Press me
            </Button>
        </View>
    );
};

export default Home;
