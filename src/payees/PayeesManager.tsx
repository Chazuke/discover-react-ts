import React, { useEffect } from 'react'
import PayeesSearch from './PayeesSearch'
import PayeesDao from './PayeesDAO'

const PayeesManager = () => {
    useEffect(() => {
        PayeesDao.getPayees().then(payees => console.log("There are " + payees.length + " payees."));
    }, []);

    const searchPayees = (input: string) => {
        console.log("That wasn't very " + input + " of you");
        PayeesDao.getPayees();
    }

    return (
        <div>
            <h2>Payees</h2>
            <PayeesSearch searchPayees={searchPayees}/>
            <ul>

            </ul>
        </div>
    )
}

export default PayeesManager
