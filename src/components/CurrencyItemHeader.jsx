import React from 'react';
import { View, StyleSheet, Image } from "react-native"
import StyledText from './StyledText';
import theme from './theme';

const CurrencyItemHeader = ({image, name, symbol}) =>{
    const formatDate = (date) => {
        let lastDate = new Date(date)
        const lastDateFormat = new Intl.DateTimeFormat('es-BO', {
            timeZone: 'America/La_Paz',
        });
        return lastDateFormat.format(lastDate)
    }
    
   return(
    <View style={{flexDirection:"row", paddingBottom: 5}}>
        <View style={{paddingRight: 10}}>
            <Image style={styles.image} source={{uri: image}}/>
        </View>
        <View style={{flex: 1}}>
            <StyledText style={styles.name} fontSize="subheading" fontWeight="bold">{name}</StyledText>
            <StyledText style={styles.symbol}>{symbol}</StyledText>
        </View>
    </View>
   )
}

const styles = StyleSheet.create({
    symbol: {
        padding: 4,
        color: theme.colors.primary,
        alignSelf: "flex-center",
        marginVertical: 2,
        borderRadius: 4,
        overflow: "hidden"
    },
    name: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: "black",
        borderRadius: 4,
        overflow: "hidden"
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    },

})

export default CurrencyItemHeader