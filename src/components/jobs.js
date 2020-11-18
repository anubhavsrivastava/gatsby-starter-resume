import React from 'react';

export default function Jobs({ data }) {
  return <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
  >
    <div className="w-100">
      <h2 className="mb-5">Experience</h2>
      {
        data.edges.map(
          (element) => {
            const node = element.node;
            return <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">{node.frontmatter.designation}</h3>
                <div className="subheading mb-3">{node.frontmatter.company}</div>
                <p dangerouslySetInnerHTML={{ __html: node.html }}/>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">{node.frontmatter.dateRange}</span>
              </div>
            </div>;
          },
        )
      }
    </div>
  </section>;

}