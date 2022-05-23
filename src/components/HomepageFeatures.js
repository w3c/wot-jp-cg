import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Web of Thingsについて',
    Svg: require('../../static/img/logo-large-blue.svg').default,
    link: '/docs/about',
    description: (
      <>
      WoTとは、Web のレベルにおける『モノ』の記述の標準化であり、
      IoTプラットフォームとアプリケーション領域にまたがる相互運用性の実現を目的としているものです。
      </>
    ),
  },
  {
    title: 'WoT-JP CGについて',
    Svg: require('../../static/img/community_icon.svg').default,
    link: '/docs/aboutcg',
    description: (
      <>
      Web of Things Japanese Community Groupは、
      2021年1月に設立されました。
      活動内容に応じて、それぞれのタスクフォースによる活動を行っています。
      </>
    ),
  },
  {
    title: 'イベント',
    Svg: require('../../static/img/event_icon.svg').default,
    link: '/docs/event',
    description: (
      <>
      W3C WoT規格の普及に向けて、国内の団体・企業・開発者コミュニティへの啓蒙活動、他標準化団体とのリエゾン活動を行なっています。
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <a href={link}>
        <Svg className={styles.featureSvg} alt={title} />
      </a>
      </div>
      <div className="text--center padding-horiz--md">
      <a href={link}>
        <h3>{title}</h3>
      </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
