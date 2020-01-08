import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT_DECREMENT = 15;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'green' or 'blue'
        //change === +15 or -15
    
        switch(color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;   
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return; 
        }
    };

    return <View>
        <ColorCounter 
        onIncrease={() => setColor('red', COLOR_INCREMENT_DECREMENT)}
        onDecrease={() => setColor('red', -COLOR_INCREMENT_DECREMENT)} 
        color="Red" 
        />
        <ColorCounter 
        onIncrease={() => setColor('green',  COLOR_INCREMENT_DECREMENT)}
        onDecrease={() => setColor('green',  -COLOR_INCREMENT_DECREMENT)}
        color="Green"
        />
        <ColorCounter 
        onIncrease={() => setColor('blue',  COLOR_INCREMENT_DECREMENT)}
        onDecrease={() => setColor('blue',  -COLOR_INCREMENT_DECREMENT)}
        color="Blue"
        />
        <View style={ {height: 150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})` } } />
    </View>
};

const styles = StyleSheet.create(
    {

    }
);

export default SquareScreen;