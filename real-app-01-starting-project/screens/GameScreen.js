import React, { useState , useEffect, useRef} from 'react' ;
import {StyleSheet , View , Text , Button, Alert} from 'react-native' ;
import Card from '../components/Card';
import Colors from '../constants/Colors';
const GameScreen = props => {


    const [currGuess , setCurrGuess] = useState(getRandomArbitrary(0,99)) ;
    const [numOfGuesses, setnumOfGuesses] = useState(1) ;

    const currlow = useRef(0) ;
    const currHigh = useRef(99) ;
    function getRandomArbitrary(min,max){
        return Math.floor(Math.random()*(max-min)+min);
    }
    const newGuessHandler = direc => {
        if((direc === "lower") && ( currGuess < props.targetNumber) || (direc === "higher") && ( currGuess > props.targetNumber)){
            Alert.alert("Don't Lie" , "We know everything... " , [{
                style : 'cancel',
                text : 'Sorry !' ,
                onPress : ()=>{}
            }])
        } else {
            if(direc === "lower"){
                currHigh.current = currGuess
                setCurrGuess(getRandomArbitrary(currlow.current,currHigh.current))        
            } else {
                currlow.current = currGuess
                setCurrGuess(getRandomArbitrary(currlow.current,currHigh.current))
            }
            setnumOfGuesses(curr => curr+1)
        }
    }
    return(
        <View style = {styles.screen}>
            <Card style = {styles.wholeGameCard}>
                <View style = {styles.guessNumberContainer}>
                    <Text>
                        Computer's Guess : 
                    </Text>
                    <View >
                        <Text style={styles.guessNumber}>{currGuess}</Text>
                    </View>
                </View>   
                <View style = {styles.btnsContainer}>
                    <View style = {styles.btn}>
                        <Button color = {Colors.primary} onPress ={newGuessHandler.bind(this,'higher')} title = "Greater"/>
                    </View>        
                    <View style = {styles.btn}>
                        <Button color = {Colors.primary} onPress ={newGuessHandler.bind(this,'lower')} title = "Lower"/>
                    </View>
                </View>
            </Card>
        </View> 
    )
}

const styles =  StyleSheet.create({
    screen:{ flex : 1 },
    wholeGameCard:{
        margin : 20 ,
        padding : 10 ,
        height : 150 ,
        justifyContent : "space-around"
    },
    btnsContainer :{
        justifyContent : 'space-between',
        width : "70%" ,
        flexDirection : "row",
    } ,
    btn :{ width : 100 ,} ,
    guessNumberContainer : { alignItems : "center" ,} ,
    guessNumber : { fontSize : 20}
})

export default GameScreen;