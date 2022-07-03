import React from "react";
import { Link } from 'react-router-dom'

const getUrl = (data, item) => typeof item.url === 'function' ? item.url(data) : data[item.url];

const getTableCell = (data, item) => {
    let element;
    switch (item.type) {
        case "link":
            element = (
                <Link
                    to={`${getUrl(data, item)}`}
                    key={data[item.id]}
                    className={item.customClass}
                >
                    {data[item.text]}
                </Link>
            );
            break;
        default:
            element = data[item.text];
    }
    return <>{element || ""}</>
}

const TableRow = ({ tRowData, data }) => {
    return (
        <tr>
            {tRowData.map((item) => (
                <td
                    className="tableTd"
                    key={`td-${item.id}`}
                >
                    {getTableCell(data, item)}
                </td>
            ))}
        </tr>
    );
};

export default TableRow;