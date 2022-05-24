# 本サイトの記述方法

このサイトはサイトジェネレータに [Docusaurus](https://docusaurus.io/) を使い、[Netlify](https://www.netlify.com/) でホスティングしています。  
Markdown の拡張仕様である [MDX](https://mdxjs.com/docs/) を用いて記述していくことができます。  
そのため基本的には、Markdown 記法で記述していくことができますが、画像やコードブロックの埋め込み、レイアウト等は下記の参考サイトや例をTipsとしてご活用ください。

### 参考サイト

- Docusaurus での記述方法全般について
  - <https://docusaurus.io/docs/markdown-features>
- MDX を用いた記述について
  - <https://mdxjs.com/>
  - <https://mdxjs.com/docs/>
  - <https://mdxjs.com/guides/>
- JSX での style 指定などについて
  - <https://ja.reactjs.org/docs/dom-elements.html>

## サイドバー変更

ドキュメントに新たなコンテンツを追加する際には、[sidebars.js](./sidebars.js) でファイルの参照、項目の追加を行ってください。

## 画像の埋め込み例(サイズ指定)

画像は `docs/images` または、それぞれの実装例のフォルダ内に置き、
下記のようにすることで、読み込めます。  
また、Markdown内にJSXを記述することでレンダリングすることが出来ます。

```
## 画像埋め込み
![Web of Things (WoT) について](images/platform-wot.png)  

## サイズ指定
<div style={{width: "60%"}}>

![Web of Things (WoT) について](images/platform-wot.png)

</div>

## サイズ指定＆中央配置
<div style={{width: "50%", margin : "0 auto"}}>

![myCobot280の写真](mycobot.png)

</div>
```

## 動画の埋め込み例

```
## 動画埋め込み
import DemoVideo from '!!file-loader!./mycobot-demo.mp4'

<video controls width="100%" src={DemoVideo}></video>
```

## ファイルから読み込んでコードブロックの表示例

```
## コードブロック
import CodeBlock from '@theme/CodeBlock';

## jsonファイルから読み込み
import FlowExample from "./flow.json.raw!=!raw-loader!./flow.json"

<CodeBlock language="json">{FlowExample}</CodeBlock>

## jsonldファイルから読み込み
import ThingDescriptionExample from '!!raw-loader!./sht31.jsonld';

<CodeBlock language="json">{ThingDescriptionExample}</CodeBlock>
```
