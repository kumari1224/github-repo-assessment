import React, { useCallback } from "react";
import { List, AutoSizer, Table, Column } from "react-virtualized";
import { Link } from "react-router-dom";
import { formatName } from "../../global/methods";
import "./GithubReposTable.css";
import "react-virtualized/styles.css";

const listHeight = 600;
const rowHeight = 60;

function GithubReposTable({ list }) {
  const cellRenderer = useCallback(
    (props) => {
      const { key, style, rowData } = props;
      console.log(props);
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
            height={listHeight}
            headerHeight={40}
            rowHeight={rowHeight}
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
            <Column width={width * 0.4} label="Name" dataKey="name" />
            <Column width={width * 0.4} label="Github Repo URL" dataKey="url" />
          </Table>
        )}
      </AutoSizer>
    </div>
  );
}

export default GithubReposTable;
