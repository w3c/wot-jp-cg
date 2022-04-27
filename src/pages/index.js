import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Web of Things JP CG</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/basicsequence">
            Web of Things 入門
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Web of Things Japanese Community Group`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <div className={styles.content}>
      W3C Web of Things(WoT)は、Web技術を用いてIoTプラットフォーム間の相互運用を実現するための標準です。
      WoTの特長は、実装すべき新たなプラットフォームを定義するのではなく、既存のIoTプラットフォームをThing Descriptionと呼ばれる機械可読な文書で記述することで相互接続できるようにするところです。<br/><br/>
      本サイトでは下記の情報を提供します:<br/>
      ・WoTに関するイベントの開催案内・報告<br/>
      ・各種IoTシステムの実現にWoTを適用しようと考えている開発者の方を対象とした技術資料の提供<br/><br/>
      コンテンツは随時追加しています。ご意見などありましたら右上のGitHubレポジトリのリンクからissue, pull requestの形でお寄せください。
      </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
