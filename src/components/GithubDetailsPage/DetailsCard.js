import React, { useMemo } from "react";
import { formatName, getTokens } from "../../global/methods";
import "./DetailsCard.css";

function DetailsCard({ data }) {
  const languages = useMemo(() => getTokens(data.language), [data.language]);

  return (
    <div className="">
      <div className="cards-container">
        <div className="card details-card">
          <header>
            <div className="avatar">
              <img
                src={`${data.owner.avatar_url}?h=50&w=50`}
                alt={`godaddy ${data.name} avatar`}
                className="github-repo-table-icon"
              />
            </div>
          </header>
          <div className="details-main-body">
            <h3 className="details-card-name">
              {formatName(data.name)} ({data.full_name})
            </h3>
            <div className="details-visit-link">
              <a href={data.html_url} target="blank">
                Visit Github Page
              </a>
            </div>
            <div className="desc">{data.description}</div>
            <div className="details-languages">
              {languages.map((lang) => (
                <div key={lang} className="languages-tag">
                  {lang}
                </div>
              ))}
            </div>
          </div>

          <div className="contacts">
            <div className="clear"></div>
          </div>
          <footer>
            <div className="section">
              <span className="details-desc">
                {data.open_issues} open issues
              </span>
              <span className="details-desc">{data.watchers} watchers</span>
              <span className="details-desc">{data.forks} forks</span>
            </div>
          </footer>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}

export default DetailsCard;
