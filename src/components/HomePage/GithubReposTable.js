import React, { useCallback } from "react";
import { List, AutoSizer } from "react-virtualized";
import { Link } from "react-router-dom";
import { formatName } from "../../global/methods";
import "./GithubReposTable.css";

const listHeight = 600;
const rowHeight = 60;

function GithubReposTable({ list }) {
  function _rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
  }) {
    return (
      <div
        key={key}
        className="ReactVirtualized__Table__row"
        role="row"
        style={{
          height: "60px",
          width: "100%",
          paddingRight: "12px",
        }}
      >
        {
          <>
            <div key={key} style={{}} className="github-repo-table-row">
              <div className="image">
                <img
                  src={`${list[index].owner.avatar_url}?h=50&w=50`}
                  alt={`godaddy ${list[index].name} avatar`}
                  className="github-repo-table-icon"
                />
              </div>
              <div className="github-repo-table-content">
                <div className="github-repo-name">
                  {formatName(list[index].name)}
                </div>
                <div>
                  <Link
                    to={`/github-repo-details/${list[index].name}`}
                    className="link-decorate"
                  >
                    {list[index].url}
                  </Link>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    );
  }
  const renderRow = useCallback(
    ({ index, key, style }) => {
      console.log(list[index]);
      return (
        <div key={key} style={style} className="github-repo-table-row">
          <div className="image">
            <img
              src={`${list[index].owner.avatar_url}?h=50&w=50`}
              alt={`godaddy ${list[index].name} avatar`}
              className="github-repo-table-icon"
            />
          </div>
          <div className="github-repo-table-content">
            <div className="github-repo-name">
              {formatName(list[index].name)}
            </div>
            <div>
              <Link
                to={`/github-repo-details/${list[index].name}`}
                className="link-decorate"
              >
                {list[index].url}
              </Link>
            </div>
          </div>
        </div>
      );
    },
    [JSON.stringify[list]]
  );

  return (
    <div className="github-repos-table-main">
      <AutoSizer disableHeight>
        {({ width }) => (
          <List
            width={width}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={renderRow}
            rowCount={list.length}
          />
        )}
      </AutoSizer>
    </div>
  );
}

export default GithubReposTable;
