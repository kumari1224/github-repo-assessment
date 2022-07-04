import React, { useCallback } from "react";
import { AutoSizer, Table, Column } from "react-virtualized";
import { Link } from "react-router-dom";
import { formatName } from "../../global/methods";
import { TABLE_LIST_HEIGHT, TABLE_ROW_HEIGHT } from '../../Constants/Constants';
import "./GithubReposTable.css";
import "react-virtualized/styles.css";

function GithubReposTable({ list }) {
  const cellRenderer = useCallback(
    (props) => {
      const { key, style, rowData } = props;
      return (
        <div key={key} style={style} className="github-repo-table-row">
          <div className="image" style={{ width: style.width * 0.2 }}>
            <img
              src={`${rowData.owner.avatar_url}?h=50&w=50`}
              alt={`godaddy ${rowData.name} avatar`}
              className="github-repo-table-icon"
            />
          </div>
          <div
            style={{ width: style.width * 0.4 }}
            className="github-repo-name"
          >
            {formatName(rowData.name)}
          </div>
          <div style={{ width: style.width * 0.4 }}>
            <Link
              to={`/github-repo-details/${rowData.name}`}
              className="link-decorate"
              target="_blank"
            >
              See More Details
            </Link>
          </div>
        </div>
      );
    },
    [JSON.stringify[list]]
  );

  return (
    <div className="github-repos-table-main">
      <AutoSizer>
        {({ width }) => (
          <Table
            width={width}
            height={TABLE_LIST_HEIGHT}
            headerHeight={40}
            rowHeight={TABLE_ROW_HEIGHT}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
            rowRenderer={cellRenderer}
          >
            <Column
              width={width * 0.2}
              label="Avatar"
              dataKey="avatar_url"
              style={{ textAlign: "center" }}
            />
            <Column width={width * 0.4} label="Repository Name" dataKey="name" />
            <Column width={width * 0.4} label="Github Repository URL" dataKey="url" />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
}

export default GithubReposTable;
