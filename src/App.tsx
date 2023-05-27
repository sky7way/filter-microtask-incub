import React, {useState} from 'react';
import './App.css';

export const App = () => {

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

    const [filter, setFilter]=useState('All Money')

    let currentMoney = money;
    if (filter === 'rubles') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS');
    }
    if (filter === 'dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars');
    }
        const onClickFilterHandler = (nameButton: string) => {
        setFilter((nameButton))
        };


        return (
            <>
                <ul>
                    {currentMoney.map((objectFromMoneyArray: {
                        banknots: string;
                        value: number;
                        number: string;
                    }, index: number) => {
                        return (
                            <li key={index}>
                                <span> {objectFromMoneyArray.banknots}</span>
                                <span> {objectFromMoneyArray.value}</span>
                                <span> {objectFromMoneyArray.number}</span>
                            </li>
                        );
                    })}
                </ul>
                <div style={{marginLeft: '30px'}}>
                    <button onClick={() => onClickFilterHandler('allMoney')}>All Money</button>
                    <button onClick={() => onClickFilterHandler('rubles')}>Rubles</button>
                    <button onClick={() => onClickFilterHandler('dollars')}>Dollars</button>
                </div>
            </>
        );
    }