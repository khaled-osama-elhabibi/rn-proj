import React , {useState} from 'react' ;
import {
    StyleSheet , 
    Text , 
    View , 
    TouchableWithoutFeedback , 
    Button ,
    Keyboard,
    Alert
}  from 'react-native' ;
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/Colors';

const StartGameScreen = props => {
    let [ enteredValue , setEnteredValue ] = useState('');
    let [ confirmedNumber , setConfirmedNumber ] = useState('');
    let [ isConfirmed , setIsConfirmed ] = useState(false)

    const numberInputHandler = inputText => setEnteredValue(inputText)
    const resetHandler = () => {
        setEnteredValue('')
        setConfirmedNumber('')
        setIsConfirmed(false)
    }
    const confirmationHandler = () => {
        let theNum = parseInt(enteredValue) ;
        if(theNum < 0 || isNaN(theNum) || theNum > 99) {
            Alert.alert(
                'Invalid Number!', 
                'You have to enter a number between 0 And 99',
                [
                    {
                        text : "Try Again",
                        style : "cancel" ,
                        onPress : resetHandler
                    }
                ]
            )
            return ;
        }
        setIsConfirmed(true) ;
        setConfirmedNumber(parseInt(enteredValue)) ;
        setEnteredValue(null) ;
        Keyboard.dismiss() ;
    }
    const startHandler = () => {
        props.setTargetNumber(confirmedNumber);
        props.goToGameScreen()
    }
    let confirmationStatment ; 
    if(isConfirmed){
        confirmationStatment = (
            <Card style = {styles.confirmationContainer}>
                <Text> Selected Number : {confirmedNumber} </Text>
                <View style = {styles.startButtonContainer}>
                    <Button onPress={startHandler} color = {Colors.primary} title="Start"/>
                </View>
            </Card>);
    }
    return(
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style = {styles.title}> Start A New Game </Text>
                <Card style = {styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input 
                        value={enteredValue} 
                        onChangeText={numberInputHandler} 
                        style={styles.input} 
                        blurOnSubmit 
                        keyboardType = "number-pad"

                    />            
                    <View style = {styles.buttonsContainer}>
                        <View style ={styles.resetBtn}>
                            <Button onPress={resetHandler} color= {Colors.accent} title="Reset"/>    
                        </View>
                        <View style ={styles.confirmBtn}>
                            <Button onPress = {confirmationHandler} color={Colors.primary} title="Confirm"/>
                        </View>    
                    </View>
                </Card>
                {confirmationStatment}                
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles =  StyleSheet.create({
    screen : {
        flex : 1 ,
        padding : 10 ,
        alignItems : "center" ,

    } ,
    title : {
        fontSize : 20 ,
        marginVertical : 10
    } ,
    inputContainer : {
        height : 230 ,
        justifyContent : 'space-around',
        width : 300 ,
        padding : 20,
        maxWidth : "80%" ,
    } ,
    confirmationContainer : {
        flexDirection : "row" ,
        marginTop : 10 ,
        width : 300 ,
        height :80 ,
        justifyContent : 'space-around'
    } ,
    startButtonContainer:{
        width:100 
    } ,
    input : {width:50 , textAlign : "center"},
    buttonsContainer : {
        flexDirection : "row" ,
        width : "100%" ,
        justifyContent : "space-between" ,
        paddingHorizontal : 15
    },
    confirmBtn : {
        width : 100
    } ,
    resetBtn : {
        width : 100
    }
})

export default StartGameScreen;