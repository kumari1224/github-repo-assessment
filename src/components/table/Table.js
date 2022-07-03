import React from "react";
import TableRow from "./TableRow";
import TableHead from "./TableHead";
import './Table.css';

const Table = ({ theadData, tRowData, tbodyData, customClass }) => {
    return (
        <table className={`customTable ${customClass}`}>
            <thead>
                <tr>
                    {theadData.map((headItem) => (<TableHead key={headItem} item={headItem} />))}
                </tr>
            </thead>
            <tbody>
                {
                    tbodyData
                        && tbodyData.length
                        ? tbodyData.map(
                            (item) => (<TableRow key={item.id} data={item} tRowData={tRowData} />)
                        )
                        : <tr className="tableNoDataFound"><td>No data found</td></tr>
                }
            </tbody>
        </table>
    );
};

export default Table;