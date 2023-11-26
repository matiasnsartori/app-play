import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableHighlightBase,
    TouchableOpacity,
    View
} from 'react-native';
import React from 'react';
import Background from '../../components/background';
import { Avatar, Title } from 'react-native-paper';
import child from '../../../assets/nino.png';
import adult from '../../../assets/adulto.png';

const incriptionSelect = () => {
    return (
        <Background>
            <View>
                <Title>Selecciona tu tipo de inscripción</Title>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        gap: 10
                    }}
                >
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <Text>Niños</Text>
                        <TouchableOpacity
                            onPress={() => alert('Elegiste Niños')}
                        >
                            <Avatar.Image size={150} source={child} />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <Text>Adultos</Text>
                        <TouchableOpacity
                            onPress={() => alert('Elegiste Adultos')}
                        >
                            <Avatar.Image size={150} source={adult} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
};

export default incriptionSelect;

const styles = StyleSheet.create({});
