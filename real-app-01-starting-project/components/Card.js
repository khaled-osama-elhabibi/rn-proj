import React from 'react' ;
import {StyleSheet , View , TextInput , Button} from 'react-native' ;

const Card = props => {
    return <View style={{...styles.card,...props.style}}>{props.children}</View>
}

const styles =  StyleSheet.create({
    card :{
        borderRadius: 10 ,
        alignItems : 'center' ,
        shadowColor : "#000",
        shadowRadius : 10 ,
        shadowOffset : {
            width : 0 ,
            height : 2
        } ,
        shadowRadius : 6 ,
        shadowOpacity : 0.26,
        elevation : 6 ,
        backgroundColor:"white"

    }
})

export default Card;