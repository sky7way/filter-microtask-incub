import React, {useState} from 'react';
import './App.css';

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    return (
        <ul>
            {money.map((objectFromMoneyArray: {
                banknots: string;
                value: number;
                number: string;
            }, index: number) => {
                return (
                    <li key={index}>
                        <span>{objectFromMoneyArray.banknots}</span>
                        <span>{objectFromMoneyArray.value}</span>
                        <span>{objectFromMoneyArray.number}</span>
                    </li>
                );
            })}
        </ul>
    );
}

export default App;
