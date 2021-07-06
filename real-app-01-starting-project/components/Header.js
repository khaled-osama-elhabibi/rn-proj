import React from 'react' ;
import {View , Text, StyleSheet} from 'react-native'
import Colors from '../constants/Colors';
const Header = props => {
    return (
        <View style={styles.header} >
            <Text style={styles.headerTitle} >{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header :{
        width: "100%" ,
        height : 100 ,
        paddingTop : 36 ,
        backgroundColor : Colors.primary,
        justifyContent : "center" ,
        alignItems : "center"
    } ,
    headerTitle : {
        padding : 10 ,
        color : "black",
        fontSize : 18 ,
        borderWidth : 1 ,
        borderColor : "black" ,
        borderRadius : 50
    }
})

export default Header ;
