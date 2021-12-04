import React, {Component} from "react";
import {View, Text, Button} from 'react-native';


export default class About extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold',  fontSize:30, fontWeight:"bold", color: "#039dfc", marginTop:-50}}>About</Text>
                <Text style={{padding:25, fontSize:18, textAlign: 'center'}}>Esta é uma plataforma para você medir seu IMC de forma descomplicada, e de cara
                                                                                        já ver como está de saúde! :D </Text>

                                                                                        <View style={{margin:10, width:160}}>
                <Button title = 'ir para home' 
                    onPress={()=>this.props.navigation.navigate('Home')}/>    
                </View>
                
            </View>
        )
    }
}