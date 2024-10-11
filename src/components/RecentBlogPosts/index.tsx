import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function RecentBlogPosts() {
  const recentPosts = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");
  
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading className="text--center" as="h1">Recent blog posts</Heading>
        <div className={clsx("row")}>
          {recentPosts.items.slice(0, 4).map((item, index) => (
            <div key={index} className={clsx('col col--3')}>
              <div className={clsx(styles.card)}> {/* Apply card styles here */}
                <div className="padding-horiz--md">
                  <Heading as="h2">{item.title}</Heading>
                  <a href={item.permalink}>Read more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
