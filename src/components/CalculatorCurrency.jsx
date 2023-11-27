import React, {useState} from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import StyledText from "./StyledText";
import { parseCurrency } from "../utils/utils";
import theme from "./theme";

const CalculatorCurrency = (props) => {
    const [total, setTotal] = useState()
    const [amount, setAmount] = useState()

    const {currentPrice} = props

    const calculateCurrency = () => {
        setTotal(parseCurrency(parseFloat(amount) * currentPrice))
        setAmount("")
    }

    return (
        <View style={styles.container}>
            <StyledText align="center" fontSize="heading" fontWeight="bold" style={{paddingTop: 10}}>Enter quantity</StyledText>
            <TextInput
                keyboardType="number-pad" 
                style={styles.inputText} 
                placeholder="Plase, insert quantity to calculate" 
                onChangeText={setAmount} 
                value={amount}
            />
            <View>
                <Button 
                    color="#000" 
                    onPress={calculateCurrency} 
                    title="Calculate" 
                    disabled={amount==="" || !amount}>
                </Button>
            </View>
                <StyledText style={styles.result}>{total}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 25
    },
    inputText: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        textAlign: "center",
        marginVertical: 15,
        backgroundColor: "#fff",
        borderRadius: 4,
        color: theme.colors.primary
    },
    result: {
        padding: 15,
        fontSize: 30,
        fontWeight: 'bold'
    },
})

export default CalculatorCurrency