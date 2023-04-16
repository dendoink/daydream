import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    link: '/life',
    title: '思考',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        工作不是全部。
      </>
    ),
  },
  {
    link: '/blog',
    title: '技术',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        技术让生活更美好。
      </>
    ),
  },
  {
    link: '/reading',
    title: '阅读',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        阅读使人明智。
      </>
    ),
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <Link
        className="button button--secondary button--lg"
        to={link}
        style={{
          background: 'inherit',
          color: 'inherit',
          border: '0px'
        }}
      >
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
