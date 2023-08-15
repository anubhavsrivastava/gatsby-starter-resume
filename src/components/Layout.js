import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/resume.scss';
class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <div className={'main-body'}>{children}</div>
      </>
    );
  }

  Head() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <title>{data.site.siteMetadata.title}</title>
            <html lang="en" />
            <meta name="description" content="Resume" />
            <meta name="keywords" content="site, web" />
          </>
        )}
      />
    );
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;