import React from "react";
import { View, Text, Image } from 'react-native';

import styles from "./styles";

import imagem from '../assets/luke.png'

export default function TelaTrilogia2(){
    return (
        <View style={styles.container}>
            <Text>Trilogia 2</Text>

            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história de Luke Skywalker</Text>
                <Image 
                source={imagem}
                style={styles.imagem}
                />

                <Text style={styles.texto}>
                Trilogia original. Episódios IV, V e VI
                </Text>

                <Text style={styles.texto}> Essa foi primeira trilogia a surgir porém sua história se passa após a trilogia prequela.</Text>

                <Text style={styles.texto}>  Nela Luke Skywalker se aventura pela galáxia para atender a um pedido de socorro da princesa Leia e se batalha com o grande vilão Darth Vader.</Text>

            </View>
        </View>
    )
}