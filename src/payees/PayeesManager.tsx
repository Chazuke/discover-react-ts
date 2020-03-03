import React from 'react'
import PayeesSearch from './PayeesSearch'

const PayeesManager = () => {
    const searchPayees = (input: string) => {
        console.log("That wasn't very " + input + " of you");
    }

    return (
        <div>
            <h2>Payees</h2>
            <PayeesSearch searchPayees={searchPayees}/>
        </div>
    )
}

export default PayeesManager
