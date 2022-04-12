import React from 'react';

import classes from './Header.module.css'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EuroSymbolOutlinedIcon from '@mui/icons-material/EuroSymbolOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';

const Header = ({info}) => {
    const {data, loading, error} = info
    const [usd, euro, btc] = data

    if (error) return 'Something went wrong...'
    if (data.length === 0 || loading) return ''
    else {
        return (
            <header>
                <nav className={classes.navbar}>
                    <h1>CURRENCY</h1>
                    <ul className={classes.currency}>
                        <li><AttachMoneyOutlinedIcon/><span>{usd.buy + '/' + usd.sale}</span></li>
                        <li><EuroSymbolOutlinedIcon/><span>{euro.buy + '/' + euro.sale}</span></li>
                        <li><CurrencyBitcoinOutlinedIcon/><span>{btc.buy + '/' + btc.sale}</span></li>
                    </ul>
                </nav>
            </header>
        );
    }
};

export default Header;