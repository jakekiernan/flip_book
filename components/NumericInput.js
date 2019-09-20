import React from 'react';
import NumericInput from 'react-native-numeric-input';

export function Incrementer({ speed, setSpeed }) {
  return (
    <NumericInput 
      value={speed}
      onChange={value => setSpeed(speed = value)}
      step={25}/>
  );
}
