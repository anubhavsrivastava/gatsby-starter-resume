import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import { graphql } from 'gatsby';
import Jobs from '../components/jobs';
import Education from '../components/education';
import Awards from '../components/awards';

const IndexPage = ({ location, data }) => (
  <Layout>

    <Sidebar/>
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>

          {data.intro.edges.map(
            (element) => {
              const node = element.node;
              return <p className="lead mb-5"><p dangerouslySetInnerHTML={{ __html: node.html }}/></p>;
            },
          )
          }


          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0"/>

      <Jobs data={data.jobs}/>

      <hr className="m-0"/>
      <Education data={data.education}/>

      <hr className="m-0"/>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-android"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-linux"></i>
            </li>

          </ul>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-cube"></i>
              Python - Flask, Pandas, FastAPI
            </li>
            <li>
              <i className="fa-li fa fa-cube"></i>
              Java / Kotlin - Spring Boot
            </li>
            <li>
              <i className="fa-li fa fa-cube"></i>
              Javascript/Typescript - Nodejs
            </li>
            <li>
              <i className="fa-li fa fa-cube"></i>
              ANTLR
            </li>

          </ul>
        </div>
      </section>

      <hr className="m-0"/>

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from work, I love to tinker around with programs and creating hobby projects. Off late I have been
            fiddling around with a Raspberry Pi, and using it as a web-server deploying docker images.
            I also occasionally game, my game of choice presently is Rocket League.
          </p>

        </div>
      </section>

      <hr className="m-0"/>
      <Awards data={data.awards}/>
    </div>
  </Layout>
);

export const query = graphql`
  {
    jobs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/jobs/"}},sort:{
        fields: [frontmatter___date]
        order: DESC
    }) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
            company
            location
            designation
            dateRange
          }
          html
        }
      }
    }
    intro: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/intro/"}}) {
      edges {
        node {
          fileAbsolutePath
          id
          html
        }
      }
    }
    awards: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/awards/"}}) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
          awards
          certifications
          }
          html
        }
      }
    }
    education: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/education/"}},sort:{
      fields: [frontmatter___date]
      order: DESC
  }) {
      edges {
        node {
          fileAbsolutePath
          id
          frontmatter {
            school
            location
            course
            gpa
            dateRange
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;

