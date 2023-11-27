
import React, { useState } from "react";
import { View,StyleSheet, Image } from "react-native";
import StyledText from "./StyledText";
import { formatDate, parseCurrency } from "../utils/utils";
import theme from "./theme";
import CalculatorCurrency from "./CalculatorCurrency";

const CurrencyDetail = ({route}) => {
    
    const {name, last_updated, symbol, image, current_price, high_24h, low_24h, market_cap_rank, market_cap} = route.params
    
    return (
        <View style={styles.containerDetailInfo}>
            <View style={{ paddingBottom: 2}}>
                <View>
                    <Image style={styles.image} source={{uri: image}}/>
                </View>
                <View style={{flex: 1}}>
                    <StyledText fontSize="subheading" style={styles.symbol}>{symbol}</StyledText>
                    <StyledText fontSize="heading" fontWeight="bold" align="center">{name}</StyledText>
                    <StyledText fontSize="heading" fontWeight="bold" align="center">Market Rank: #{market_cap_rank}</StyledText>
                    <StyledText fontSize="subheading" align="center" style={styles.dateText}>Last updated: {formatDate(last_updated)}</StyledText>
                </View>
            </View>
            <View style={styles.containerStats}>
                <View>
                    <StyledText align="center" fontWeight="bold" fontSize="subheading">{parseCurrency(current_price)}</StyledText>
                    <StyledText align="center" fontSize="subheading">Current Price</StyledText>
                </View>
                <View>
                    <StyledText align="center" fontWeight="bold" fontSize="subheading">{parseCurrency(high_24h)}</StyledText>
                    <StyledText align="center" fontSize="subheading">Hight Price 24H</StyledText>
                </View>
                <View>
                    <StyledText align="center" fontWeight="bold" fontSize="subheading">{parseCurrency(low_24h)}</StyledText>            
                    <StyledText align="center" fontSize="subheading">Low Price 24H</StyledText>
                </View>
            </View>
            <View>
                <CalculatorCurrency currentPrice={current_price}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    symbol: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: "#000",
        alignSelf: "center",
        marginVertical: 4,
        borderRadius: 4,
        overflow: "hidden"
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 4,
        alignSelf: "center"
    },
    containerStats: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    containerDetailInfo: {
        paddingVertical: 100,
    },
    buttonCalculate: {
        alignSelf: 'flex-center',
        overflow: "hidden",
        width: 25
    },
    dateText: {
        paddingTop: 5,
        paddingBottom: 10
    }
})

export default CurrencyDetail