/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import PayeesSearch from './PayeesSearch'
import PayeesDao from './PayeesDAO'
import PayeesList from './PayeesList'
import { PayeesListColumnConfig } from './PayeeTypes'

const PayeesManager = () => {
    //const [payeesList, setPayeesList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        PayeesDao.getPayees().then(payeesList => {
            //setPayeesList(payeesList);
            setSearchResults(payeesList);
        });
    }, []);

    const searchPayees = (input: string) => {
        console.log("Searching for payee name: " + input);
        PayeesDao.searchPayeesByField("payeeName", input).then(searchResults => setSearchResults(searchResults));
    }

    const selectHeader = (headerConfig: PayeesListColumnConfig) => {
        console.log("Clicked on " + headerConfig.label + " header");
    }

    const selectPayee = (event: React.MouseEvent<HTMLTableRowElement>) => {
        console.log("Clicked on Payee: " + event.currentTarget.cells[0].innerText);
    }

    const columnConfig = [
        {
            field: 'payeeName',
            label: 'Payee Name',
        },
        {
            field: 'address.city',
            label: 'City',
        },
        {
            field: 'address.state',
            label: 'State',
        }
    ]

    return (
        <div>
            <h2><NavLink to="/payees/search">Search Payees</NavLink> | <NavLink to="/payees/list">List Payees</NavLink></h2>
            <Switch>
                <Route path="/payees/search">
                    <PayeesSearch searchPayees={searchPayees} />
                </Route>
                <Route path="/payees/list">
                    <PayeesList renderList={searchResults} columns={columnConfig} selectHeader={selectHeader} selectPayee={selectPayee} />
                </Route>
                <Route path="/payees">
                    <Redirect to="/payees/search" />
                </Route>
            </Switch>
        </div>
    )
}

export default PayeesManager
