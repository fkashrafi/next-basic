import { Fragment } from 'react';

import NavBar from './Nav';
import Header from './Header';

import layoutStyle from '../styles/Layout.module.css';



const Layout = ({ children }) => {
    return (
        <Fragment>
            <NavBar />
            <Header />
            <div className={layoutStyle.container}>
                <main className={layoutStyle.main}>
                    {children}
                </main>
            </div>
        </Fragment>
    );
}

export default Layout;