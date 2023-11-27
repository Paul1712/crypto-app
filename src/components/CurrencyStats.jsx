import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import { parseCurrency } from "../utils/utils";

const CurrencyStats = (props) =>{

    

    return (
        <View style={styles.containerStats}>
            <View>
                <StyledText align="center" fontWeight="bold">{parseCurrency(props.current_price)}</StyledText>
                <StyledText align="center">Current Price</StyledText>
            </View>
            <View>
                <StyledText align="center" fontWeight="bold">{parseCurrency(props.high_24h)}</StyledText>
                <StyledText align="center">Hight Price 24H</StyledText>
            </View>
            <View>
            <StyledText align="center" fontWeight="bold">{parseCurrency(props.low_24h)}</StyledText>            
            <StyledText align="center">Low Price 24H</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   containerStats: {
    flexDirection: 'row', 
    justifyContent: 'space-around'
   } 
})

export default CurrencyStats