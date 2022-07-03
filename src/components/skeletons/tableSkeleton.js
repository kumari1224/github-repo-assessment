import React from 'react';
import './tableSkeleton.css';

export default function TableSkeleton({ rows, columns }) {

    let rowItems = [], columnItems = [];

    for (let i = 0; i < (rows || 5); i++) {
        rowItems.push(i);
    }

    for (let i = 0; i < (columns || 5); i++) {
        columnItems.push(i);
    }

    return (
        <div className="tableSkeletonContainer">
            <table class="tableSkeletonMain">
                <tr>
                    {
                        columnItems.map(item => (
                            <th class="tableSkeletonTh">
                                <div class="tableSkeletonCell"></div>
                            </th>)
                        )
                    }
                </tr>
                {rowItems.map(item => (
                    <tr>
                        {
                            columnItems.map(item => (
                                <td class="tableSkeletonTd">
                                    <div class="tableSkeletonCell"></div>
                                </td>
                            ))
                        }
                    </tr>))}
            </table>
        </div>
    )
}
