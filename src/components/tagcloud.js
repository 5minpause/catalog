import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";

const componentStyles = {
  padding: 12,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  listStyleType: "none",
  backgroundColor: "rgba(0, 0, 240, 0.3)",
  display: "inline",
  margin: 12,
  padding: 6,
  borderRadius: 6,
};
const linkStyle = {
  textDecoration: "none",
  color: "#000",
};
const TagCloud = () => {
  const { allMarkdownRemark } = useStaticQuery(query);
  const { group } = allMarkdownRemark;

  return (
    <div style={componentStyles}>
      <ul style={listStyles}>
        {group.map((tag) => (
          <li key={tag.fieldValue} style={listItemStyles}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} style={linkStyle}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagCloud;

export const query = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
