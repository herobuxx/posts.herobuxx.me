import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import RecentBlogPosts from '@site/src/components/RecentBlogPosts';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to Posts!
        </Heading>
        <p className="hero__subtitle" style={{ fontSize: '0.9rem' }}>
          A web that consists of tutorials and some of my thoughts.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{ marginRight: '10px' }}
          >
            Tutorial
          </Link>

          <Link
            className="button button--secondary button--lg"
            to="/blog"
          >
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}


export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <RecentBlogPosts />
      </main>
    </Layout>
  );
}
