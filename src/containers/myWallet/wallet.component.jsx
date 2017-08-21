import React from 'react';

import HeadWallet from './subpage/HeadWallet';
import WalletFooter from './components/WalletFooter';

import './wallet.scss'

export default class MyWallet extends React.Component {
    render() {
        return(
            <div className="my-wallet">
                <HeadWallet />
                <WalletFooter />
            </div>
        )
    }
}