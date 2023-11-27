import React, { useEffect, useState } from "react";
import { Text, FlatList, Alert } from "react-native";
import CurrencyItem from "./CurrencyItem";
import axios from "axios";

const CurrencyList = () => {
    const [currencies, setCurrencies] = useState()

    useEffect(()=>{
        axios.get("https://pluriza.s3.us-east-1.amazonaws.com/response.json").then(response=>{
            setCurrencies(response?.data)
        }).catch(error=>{
            Alert.alert("Something has happened, try again")
            console.log(error)
        })
    },[])

    return(
        <FlatList
            data={currencies}
            ItemSeparatorComponent={()=><Text> </Text>}
            renderItem={({item: currency})=>(
                <CurrencyItem {...currency} />
            )}
        />
    )
}

export default CurrencyList