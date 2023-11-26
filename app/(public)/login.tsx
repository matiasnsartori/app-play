import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSignIn } from '@clerk/clerk-expo';
import { router } from 'expo-router';
import { Avatar, Button } from 'react-native-paper';
import PlayLogo from '../../assets/logoWhite.png';
import Background from '../../app/components/background';
import TextInput from '../../app/components/textInput';

export default function SignInScreen() {
    const { signIn, setActive, isLoaded } = useSignIn();

    const [emailAddress, setEmailAddress] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSignInPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignIn = await signIn.create({
                identifier: emailAddress,
                password
            });
            // This is an important step,
            // This indicates the user is signed in
            await setActive({ session: completeSignIn.createdSessionId });
        } catch (err: any) {
            console.log(err);
        }
    };
    return (
        <Background>
            <View style={{ width: '100%', height: '100%' }}>
                <View style={{ alignItems: 'center' }}>
                    <Avatar.Image size={150} source={PlayLogo} />
                    <TextInput
                        autoCapitalize="none"
                        value={emailAddress}
                        placeholder="Email..."
                        onChangeText={(emailAddress) =>
                            setEmailAddress(emailAddress)
                        }
                    />
                </View>

                <View>
                    <TextInput
                        value={password}
                        placeholder="Password..."
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <View
                    style={{
                        gap: 5,
                        flexDirection: 'row'
                    }}
                >
                    <Button mode="contained-tonal" onPress={onSignInPress}>
                        <Text>Iniciar Session</Text>
                    </Button>
                    <Button
                        mode="contained-tonal"
                        onPress={() =>
                            router.push('/(inscription)/inscriptionSelect')
                        }
                    >
                        Crear Cuenta
                    </Button>
                </View>
            </View>
        </Background>
    );
}
