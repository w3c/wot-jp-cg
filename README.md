# W3C Web of Things Japanese Community Group (W3C WoT-JP CG)
* このリポジトリは [W3C Web of Things Japanese Community Group (W3C WoT-JP CG)](https://www.w3.org/community/wot-jp/) のリポジトリであり、W3C WoT-JP CG の活動に関するドキュメントやコードを格納しています。
* WoT-JP CG 及び本リポジトリでは、主要な言語として日本語を使用します。
* 本リポジトリは世界中に公開されており、自由に閲覧いただけます。なお、一般公開されておりますので，情報発信にあたっては十分にご注意ください。
* GitHub の Pull Request 作成等、本リポジトリに対してのご貢献をいただく際には、[W3C WoT-JP CGに参加登録](https://www.w3.org/community/wot-jp/join)した上で利用いただけますと幸いです。
* 本リポジトリへの質問や提案については、[GitHubのIssues](https://github.com/w3c/wot-jp-cg/issues) を利用してください。
* 本リポジトリ内のコンテンツの具体的な変更については、[GitHubのPull Request](https://github.com/w3c/wot-jp-cg/pulls) を利用してください。

## W3C WoT-JP CG のリポジトリ利用にあたっての基本方針

W3C WoT-JP CG では下記の基本方針に注意の上、ご利用ください。
* [CG チャーター](https://w3c.github.io/wot-jp-cg/CGCharter.html)
* [本リポジトリへの貢献について](https://github.com/w3c/wot-jp-cg/blob/main/CONTRIBUTING.md)
* [本リポジトリのライセンス](https://github.com/w3c/wot-jp-cg/blob/main/LICENSE.md)
* [本リポジトリの行動規範](https://github.com/w3c/wot-jp-cg/blob/main/CODE_OF_CONDUCT.md)
* [WoT-JP CG 活動の提案・合意プロセス](POLICY.md)

## W3C WoT-JP CG サイトとコンテンツ管理方法

* 構成
  - [W3C WoT-JP サイト](https://wot-jp-cg.netlify.app)のコンテンツは本リポジトリの [docs](https://github.com/w3c/wot-jp-cg/tree/main/docs) サブディレクトリ配下に格納しています。
  - [docsify](https://docsify.js.org/) によるシンプルなサイトです。
    - index.html 単独動作、Markdown ファイル `xxxxx.md` に書いた記事を URL フラグメントで `/#/xxxxx` として読み込む構成
    - コンテンツは全て普通の Markdown なので任意のモダンなフレームワークによるサイトにいつでも変換可能
* コンテンツの追加・更新
  - Issues を立てて議論したり [Pull Requestsを作成](https://github.com/w3c/wot-jp-cg/pulls) してください。[提案・合意プロセス](POLICY.md)に記載の通り、コメント欄などを通じてコミュニティ内でのコンセンサスを得たうえで、モデレータが main ブランチにマージします。
  - Markdown フォーマットで書かれたファイルは docsify が HTML へ変換します。HTML で書かれたファイルも利用可能ですが、その場合は Markdown として解釈されることを防ぐために、Markdown ファイルから HTML ファイルへのリンクに`":ignore"`を追加してください(詳細: [Ignore to compile link](https://docsify.js.org/#/helpers?id=ignore-to-compile-link))。
* デプロイ

  [![Netlify Status](https://api.netlify.com/api/v1/badges/090e30aa-c5c9-417a-8fc5-d03540d3ff68/deploy-status)](https://app.netlify.com/sites/wot-jp-cg/deploys)
  - [Netlify](https://www.netlify.com/) でホスティングしています。
  - 現状ほぼ単なる静的ホスティング (と画像の自動圧縮など自動最適化) だけなのでデプロイに失敗することはほぼないと思いますが、最新のデプロイ結果は上記の [Netlify Status バッジ](https://docs.netlify.com/monitor-sites/status-badges/) を参考にしてください。黄色や赤になっている場合は[デプロイログ](https://app.netlify.com/sites/wot-jp-cg/deploys)を参照して原因を確認してください。
- ドキュメント
  - [Netlify のヘルプ](https://docs.netlify.com/#we-re-here-to-help)
  - [Docsify の Netlify デプロイ](https://docsify.js.org/#/deploy?id=netlify)
