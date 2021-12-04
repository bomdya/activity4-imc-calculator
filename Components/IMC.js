import React, { Component } from "react";
import { View, Text, TextInput, Button } from 'react-native'
import CalcIMC from "./IMCCalc";



export default class IMCApp extends Component {
        
   
    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, apertou:false}
        
    }
    acaoBotao = ()=> {
        if(this.state.altura != null && this.state.peso != null){
             this.setState({apertou:true})
        }
    }
    renderizarCalculo (){
        if(this.state.apertou)
        {
            return(
            <CalcIMC altura={this.state.altura} peso={this.state.peso}/>
        )
    }
    
        return null;

    }

    render(){
    
        return(
            <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                <Text style={{fontSize:30, fontWeight:"bold", marginBottom:90, marginTop:-150, color: "#039dfc"}}>Calcule seu IMC</Text>

                <TextInput 
                    style={{borderColor: "black", borderRadius:5, borderWidth: 2, margin: 10, padding: 10, width: 250, height:40}} 
                    placeholder= "Digite sua altura"
                    onChangeText={(altura)=> this.setState({altura})}
                />
                
                <TextInput 
                    style={{borderColor: "black", borderRadius:5, borderWidth: 2, margin: 10, padding: 10, marginBottom: 30, width: 250, height:40}} 
                    placeholder= "Digite seu peso"
                    onChangeText={(peso)=> this.setState({peso})}
                />
                
                <Button title="Calcular" style={{width: 80}} onPress={this.acaoBotao}/>
                {this.renderizarCalculo()}
              
        </View>
        )
      
        
    }
}



