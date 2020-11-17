import React from 'react';
import { graphql } from 'gatsby';

export default function Awards({ data }) {
  const lists = data.edges[0].node.frontmatter;
  const list = lists.awards.concat(lists.certifications);
  return <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="awards"
  >
    <div className="w-100">
      <h2 className="mb-5">Awards &amp; Certifications</h2>
      <ul className="fa-ul mb-0">
      {
        list.map(
          (element) => {
            const node = data.edges[0].node;
            return <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              {element}
            </li>

          },
        )
      } </ul>
    </div>
  </section>;

}