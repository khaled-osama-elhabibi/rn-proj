import React , {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
export default function App() {
  let [ targetNumber , setTargetNumber ] = useState('') ;
  let [ currentScreen , setCurrebtScreen] = useState('start-game') ;
  const goToStartScreen = () => {
    setCurrebtScreen('start-game')
  }
  const goToGameScreen = () => {
    setCurrebtScreen('game')
  }
  const goToGameOverScreen = () => {
    setCurrebtScreen('game-over')
  }
  return (
    <View style = {styles.screen}>
      <Header title = "Guss A Number"/>
      {(currentScreen === "start-game") ? 
      <StartGameScreen setTargetNumber = {setTargetNumber} goToGameScreen={goToGameScreen}/> 
      :
      (currentScreen === "game") ? 
      <GameScreen targetNumber = {targetNumber}/>         
      :
      <GameOverScreen/>
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex : 1
  }
})