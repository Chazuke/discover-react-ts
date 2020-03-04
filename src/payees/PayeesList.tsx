import React from 'react'
import { Payee, PayeesListColumnConfig } from './PayeeTypes'
import * as lodash from 'lodash';

interface PayeesListProps {
    columns: PayeesListColumnConfig[];
    renderList: Payee[];
    selectPayee?: (selectedPayee: React.MouseEvent<HTMLTableRowElement>) => void;
    selectHeader?: (selectedColumn: PayeesListColumnConfig) => void;
}

const PayeesList = ({ renderList, columns, selectHeader, selectPayee }: PayeesListProps) => {
    return (
        <table className="table is-striped is-hoverable is-fullwidth">
            <thead>
                <PayeeHeader columns={ columns } selectHeader={ selectHeader } />
            </thead>
            <PayeeBody renderList={ renderList } columns={ columns } selectPayee={ selectPayee } />
        </table>
    );
}

type PayeeHeaderProps = Pick<PayeesListProps, 'columns' | 'selectHeader'>;
const PayeeHeader = ({ columns, selectHeader }: PayeeHeaderProps) => {
    return (
        <tr>
        {
            columns.map((columnConfig) => {
                return  (
                <th key={ columnConfig.label } onClick={() => selectHeader && selectHeader(columnConfig)}>{ columnConfig.label }</th>
                );
            })
        }
        </tr>
    );
}

const PayeeBody = ({ renderList, columns, selectPayee}: PayeesListProps) => {
    return (
        <tbody>
        {
            renderList.map((payee) => {
                return (
                    <tr key={payee.id} onClick={selectPayee}>
                        {
                            columns.map((column) => {
                                return (
                                    <td key={column.field}>{lodash.get(payee, column.field)?.toString()}</td>
                                )
                            })
                        }
                    </tr>
                );
            })
        }
        </tbody>
    );
}

export default PayeesList
