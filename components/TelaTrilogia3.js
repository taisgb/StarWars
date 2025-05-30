import React from "react";
import { View, Text, Image } from 'react-native';
import styles from "./styles";

import imagem from '../assets/rey.png'

export default function TelaTrilogia3() {
    return (
        <View style={styles.container}>
            <Text>Trilogia 3</Text>

            <View style={styles.boxDescricao}>
                <Text style={styles.titulo}>A história de Rey</Text>
                <Image 
                source={imagem}
                style={styles.imagem}
                />

                <Text style={styles.texto}>
                Trilogia sequela. Episódios VII, VIII e IX
                </Text>

                <Text style={styles.texto}>  Enquanto surge uma nova ameaça para a galáxia, Rey, uma catadora de sucata, e Finn, um soldado imperial desertor, devem se juntar a Han Solo e Chewbacca para procurar a única esperança de restaurar a paz da galáxia.
                </Text>

            </View>
        </View>
    )
}