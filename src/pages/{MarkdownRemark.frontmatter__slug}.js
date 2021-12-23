import React from "react";
import { graphql } from "gatsby";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const tagList = (
    <ul>
      {frontmatter.tags.map((tagEntry) => (
        <li>
          <a href={`/tags/${tagEntry}`}>{tagEntry}</a>
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
        <a href={frontmatter.link} target="_blank">
          {frontmatter.link}
        </a>
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
