import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  // const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '40px',
        paddingTop: '40px',
      }}>
        <img src="/daydream/img/header.gif" className={styles.headerImage} />
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/FAQ">
            什么是 FE Wingman?
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Things we do are all for love">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
