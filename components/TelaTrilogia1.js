import React from "react";
import { View, Text, Image } from 'react-native';

import styles from "./styles";

import imagem from '../assets/darth.png'

export default function TelaTrilogia1(){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Trilogia 1</Text>

            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A História do Darth Vader</Text>
                <Image 
                source={imagem}
                style={styles.imagem}
                />

                <Text style={styles.texto}>
                Trilogia prequela. Episódios I, II e III
                </Text>

                <Text style={styles.texto}> Apesar de ter sido criada depois da trilogia original, essa é a primeira trilogia na ordem crinológica da série Star Wars. Nela é contada a história do grande vilão Darth Vader.</Text>

                <Text style={styles.texto}>Através dessa trilogia você vai saber de onde ele veio e quem ele é.</Text>

            </View>
        </View>
    )
}