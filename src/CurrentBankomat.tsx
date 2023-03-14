import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <Banknote color={props.money.banknotes === 'Dollars' ? 'blue' : 'green'} key={props.money.number}>
                <div>
                    {props.money.banknotes}
                </div>
                <div>
                    {props.money.banknotes}
                </div>
                <div>
                    {props.money.banknotes}
                </div>
            </Banknote>

        </>
    );
};

const Banknote = styled.div`
  background-color: ${props => {
    if (props.color === 'blue') {
      return '#57cdf1';
    } else {
      return '#57f16c';
    }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
  color: #000000;
`;

