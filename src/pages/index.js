import * as React from "react"
import Seo from "../components/seo";
import Search from "../components/search";
import TagCloud from "../components/tagcloud";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage = () => {
  return (
    <div>
      <Seo titleTemplate={"%s"} />
      <main style={pageStyles}>
        <h1 style={headingStyles}>Catalog</h1>
        <Search />
        <div>
          <p>
            If you are trying to read up what others have to say on topics like{" "}
            <strong>Inheritance vs. Composition</strong>,{" "}
            <strong>SOLID design principles</strong>,{" "}
            <strong>software design patterns</strong>, or how to do{" "}
            <strong>technical design documents</strong>, don't use a search
            engine.
          </p>
          <p>
            Search this <em>CATALOG</em> for your topic and find peer-reviewed
            articles and books, as well as links to further resources.
          </p>
        </div>
        <div>
          <h2>Latest articles</h2>
          <ul>
            <li>tbd</li>
          </ul>
        </div>
        <TagCloud />
      </main>
    </div>
  );
};

export default IndexPage
