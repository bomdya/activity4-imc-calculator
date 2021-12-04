import NavegadorApp from "./Home";
import About from "./About";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IMCApp from "./IMC";
import Cadastro from "./Cadastro";
import PerfilModal from "./Perfil";


const Routes = createAppContainer(
    createStackNavigator({
        Home: NavegadorApp,
        About: About,
        IMC: IMCApp,
        Cadastro: Cadastro,
        Perfil: PerfilModal
        
    },
        { 
            initialRouteName: 'Home'
        }
        
    )
);


export default Routes;