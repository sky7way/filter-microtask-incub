import React, {useState} from "react";

type BanknotsFilterType = 'allMoney' | 'rubles' | 'dollars';
type MoneyPropsType = {
    allMoney: arrMoneyType[]
}
type arrMoneyType = {
    banknots: string,
    value: number,
    number: string
}

export const Money = (props: MoneyPropsType) => {
    const [filter, setFilter] = useState<BanknotsFilterType>('allMoney')

    let currentMoney = props.allMoney;
    if (filter === 'rubles') {
        currentMoney = props.allMoney.filter(filteredMoney => filteredMoney.banknots === 'RUBLS');
    }
    if (filter === 'dollars') {
        currentMoney = props.allMoney.filter(filteredMoney => filteredMoney.banknots === 'Dollars');
    }
    const onClickFilterHandler = (nameButton: BanknotsFilterType) => {
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
    )
}

