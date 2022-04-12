import React from 'react';

import Header from "./Header";
import {useHttp} from "../../Hooks/http.hook";

const HeaderContainer = () => {
    const {data, loading, error} = useHttp()
    return (
        <Header info={{data, loading, error}}/>
    );
};

export default HeaderContainer;