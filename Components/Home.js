import React, { Component } from "react";
import {View, Text, Button } from 'react-native';



export default class navegadorApp extends Component {
    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                
                <Text style={{fontWeight:'bold', fontSize:23, color: "#039dfc"}}> Welcome to IMC App :D </Text>
                <Text style={{fontSize:16}}> Fique livre para escolher uma ação </Text>

                    <View style={{marginTop:40, marginBottom:10, width:160}}>
                        <Button title = 'Cadastro' 
                            onPress={()=>this.props.navigation.navigate('Cadastro')}/>
                    </View>


                <View style={{margin:10, width:160}}>
                        <Button title = 'IMC' 
                            onPress={()=>this.props.navigation.navigate('IMC')}/>
                </View>


                <View style={{margin:10, width:160}}>
                        <Button title = 'Sobre' 
                            onPress={()=>this.props.navigation.navigate('About')}/>    
                </View>
                
            
            </View>
        )
    }
}