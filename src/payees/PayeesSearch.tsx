import React, { ChangeEvent, useState } from 'react'

interface PayeesSearchProps {
    searchPayees: (input: string) => void;
}

const PayeesSearch = ({searchPayees}: PayeesSearchProps) => {

    const [searchText, setSearchText] = useState('');

    const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        searchPayees(searchText);
        //TODO: Redirect to /payees/list
    };

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.currentTarget.value);
    }

    return (
        <div id="searchBar">
            <label id="searchBarLabel" htmlFor="searchInputText">Payee Name:</label>
            <input type="text" id="searchInputText" onChange={handleInput} value={searchText}/>
            <button type="button" onClick={handleButton} >Search!</button>
        </div>
    )
}

export default PayeesSearch