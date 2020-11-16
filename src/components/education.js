import React from 'react';
import { graphql } from 'gatsby';

export default function Education({ data }) {
  return <section
    className="resume-section p-3 p-lg-5 d-flex align-items-center"
    id="education"
  >
    <div className="w-100">
      <h2 className="mb-5">Education</h2>
      {
        data.edges.map(
          (element) => {
            const node = element.node
            return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">{node.frontmatter.school}</h3>
                <div className="subheading mb-3">{node.frontmatter.course}</div>
                <p>{node.frontmatter.gpa}</p>
                <div dangerouslySetInnerHTML={{__html:node.html}}/>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">{node.frontmatter.dateRange}</span>
              </div>
            </div>
          })
      }
        </div>
        </section>

}