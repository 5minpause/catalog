import React from "react";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const tagList = (
    <ul>
      {frontmatter.tags.map((tagEntry) => (
        <li>
          <Link to={`/tags/${kebabCase(tagEntry)}/`}>{tagEntry}</Link>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <p>{frontmatter.description}</p>
        <Link to={frontmatter.link}>{frontmatter.link}</Link>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {tagList}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        link
        description
        tags
      }
    }
  }
`;
