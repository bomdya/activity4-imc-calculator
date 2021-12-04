import React, { Component } from "react";
import {View, Text, Button, TextInput } from 'react-native';


export default class Cadastro extends Component {
    acaoBotao = ()=> {
        if(this.state.nome != null && this.state.idade != null  && this.state.curso != null){
             this.setState.nome, this.setState.idade, this.setState.curso
        }
    }

   
    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                
                <Text style={{fontSize:30, fontWeight:"bold",  color: "#039dfc", marginTop:-50}}> Faça um cadastro! </Text>
                          
                          
                            <TextInput 
                                style={{borderColor: "black", borderRadius:5, borderWidth: 2, padding: 10, marginTop:90, width: 300, height:40}} 
                                placeholder= "Digite seu nome"
                                onChangeText={(nome)=> this.setState({nome})}
                            />
                            
                            <TextInput 
                                style={{borderColor: "black", borderRadius:5, borderWidth: 2, padding: 10, margin: 15, width: 300, height:40}} 
                                placeholder= "Idade"
                                onChangeText={(idade)=> this.setState({idade})}
                            />
                            
                            <TextInput 
                                style={{borderColor: "black", borderRadius:5, borderWidth: 2, padding: 10, marginBottom: 30, width: 300, height:40}} 
                                placeholder= "E-mail"
                                onChangeText={(email)=> this.setState({email})}
                            />


                           
                            <View style={{margin:10, width:160}}>
                                    <Button title = 'Ok' onPress={this.acaoBotao = ()=>this.props.navigation.navigate('Perfil')}/>    
                                              
                            </View>    
                    
            </View>
        )
    }
}