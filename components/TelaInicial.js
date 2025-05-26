import React from "react";
import { View, Button, Image, Text } from "react-native";
import logo from '../assets/logo.png';
import styles from './styles';

export default function TelaInicial(props){
    return (
        <View style={styles.container}>
            <Text>
               Star Wars Ordem Cronológica 
            </Text>
            <Image source={logo} style={styles.imagem}/>

            <Text style={styles.titulo}>Você sabe a ordem cronológica da franquia Star Wars?</Text>

            <Text style={styles.texto}> Os principais filmes da franquia estão divididos em trilogias. Clique no botão para conferir.</Text>

            <Button
            title="VER 1ª TRILOGIA"
            style={styles.botn}
            onPress={() => props.navigation.navigate("Trilogia 1")} color="#372d00"
            />

            <Button
            title="VER 2ª TRILOGIA"
            style={styles.botn}
            onPress={() => props.navigation.navigate("Trilogia 2")} color="#372d00"
            />

            <Button
            title="VER 3ª TRILOGIA"
            style={styles.botn}
            onPress={() => props.navigation.navigate("Trilogia 3")} color="#372d00"
            />
        </View>
    )
}