import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";

import {Button, TextField} from "@mui/material";
import BasicSelect from "../../UI/BasicSelect";
import classes from './Main.module.css'

const Main = () => {
    const [inputValueA, setInputValueA] = useState('')
    const [inputValueB, setInputValueB] = useState(1)

    const [currencyA, setCurrencyA] = useState('');
    const [currencyB, setCurrencyB] = useState('');

    const [coefficient, setCoefficient] = useState(1)
    const [result, setResult] = useState(null)

    const inputValueHandlerA = (event) => {
        setInputValueA(event.target.value)
        setInputValueB(1)
    }
    const inputValueHandlerB = (event) => {
        setInputValueB(event.target.value)
        setInputValueA(prevState => event.target.value / coefficient)
    }

    const handleChangeA = (event) => {
        setCurrencyA(event.target.value);
    };
    const handleChangeB = (event) => {
        setCurrencyB(event.target.value);
    };

    const formHandler = useCallback(async () => {
        try {
            if (inputValueB === 1) {
                const response = await axios.get(`https://api.exchangerate.host/latest?base=${currencyA}`)
                setCoefficient(response.data.rates[`${currencyB}`])
                setResult(response.data.rates[`${currencyB}`] * inputValueA)
            }
        } catch (e) {
            console.log(e)
        }
    }, [currencyA, currencyB, inputValueA, inputValueB])

    useEffect(() => {
        formHandler()
    }, [inputValueA, inputValueB, currencyA, currencyB, formHandler])

    return (
        <main className={classes.mainWrapper}>
            <form>
                <p className={classes.text}>From</p>
                <TextField value={inputValueA} onChange={inputValueHandlerA} margin={"normal"} label="Value"
                           variant="outlined"/>
                <BasicSelect currency={currencyA} handleChange={handleChangeA}/>

                <p className={classes.text}>To</p>
                <TextField value={inputValueB} onChange={inputValueHandlerB} margin={"normal"} label="Value"
                           variant="outlined"/>
                <BasicSelect currency={currencyB} handleChange={handleChangeB}/>
                <div className={classes.btn}><Button variant="contained" onClick={formHandler}>Exchange</Button></div>
            </form>
            <div className={classes.result}>
                {result ? <h2>Your currency: <div className={classes.resultText}>{result}</div></h2> : ''}
            </div>
        </main>
    );
};

export default Main;