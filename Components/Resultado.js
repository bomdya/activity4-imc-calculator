import { Text, View } from "react-native";
import React from "react";

const Mensagem =  (props) =>{

    if(props.IMC < 17) return                           <Text style={{fontWeight:"bold", color: "red"}}> Muito abaixo do peso </Text>
    if(props.IMC >= 17 && props.IMC <= 18.49) return    <Text style={{fontWeight:"bold", color: "red"}}> Abaixo do peso </Text>
    if(props.IMC >= 18.5 && props.IMC <= 24.99) return  <Text style={{fontWeight:"bold", color: "blue"}}> Peso normal </Text>
    if(props.IMC >= 25 && props.IMC <= 29.99) return    <Text style={{fontWeight:"bold", color: "red"}}> Acima da média </Text>
    if(props.IMC >= 30 && props.IMC <= 34.99) return    <Text style={{fontWeight:"bold", color: "red"}}> Obesidade I </Text>
    if(props.IMC >= 35 && props.IMC <= 39.99) return    <Text style={{fontWeight:"bold", color: "red"}}> Obesidade II (severa) </Text>
    if(props.IMC > 40) return                           <Text style={{fontWeight:"bold", color: "red"}}> Obesidade III (mórbida) </Text>

}

export default Mensagem;