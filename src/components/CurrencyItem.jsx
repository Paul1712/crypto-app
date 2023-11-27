import React from 'react';
import { View, StyleSheet } from "react-native"
import CurrencyStats from './CurrencyStats';
import CurrencyItemHeader from './CurrencyItemHeader';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CurrencyItem  = (props) =>{

    const navigation = useNavigation()

    return (
        <View key={props.id} style={styles.container}>
            <TouchableOpacity onPress={() => {navigation.navigate("Currency Detail", {...props})}}>
                <CurrencyItemHeader {...props} />
                <CurrencyStats {...props} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20, 
        paddingVertical: 7
    },

})

export default CurrencyItem