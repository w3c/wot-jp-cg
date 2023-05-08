# WoT-JP CG 2022年度活動総括 2023.04.25

## 目次
1. [WoT-JP CGのミッション](#WoT-JP_CGのミッション)
1. [タスクフォース活動報告と反省](#タスクフォース活動報告と反省)
	1. [アウトリーチ](#アウトリーチ)
	1. [デプロイ](#デプロイ)
	1. [トランスレーション](#トランスレーション)
	1. [ユースケース](#ユースケース)
1. [2022年度総括と来期計画](#2022年度総括と来期計画)

## WoT-JP CGのミッション

### WoT-JP CGページより
The mission of the Web of Things Japanese Community Group includes the following:
* to facilitate focused discussion in Japanese on the Web of Things specifications and related specifications
* to gather comments and questions in Japanese about those specifications
* to collect information about specific use cases in Japanese for technologies defined in those specifications
* to report the results of its activities as a group back to the Web of Things Working Group/Interest Group, the W3C membership and the Web community.

### 日本語概要
* WoT WG/IGで取り組むWoT標準化作業 (仕様策定、ユースケース記述、Plugfest、Testfest等) と連携し、日本主導でのWoT普及を加速させる。
* そのために、以下の4つのテーマに取り組む:
  * アウトリーチ: 国内におけるWoT展開を加速させるとともに、WoT利用者を増やす
  * デプロイメント: ライブラリおよびツールの作成、文書化の促進
  * トランスレーション: WoT仕様の日本語化、および関連日本語情報の英語化
  * ユースケース: 業界ユースケース発掘

## タスクフォース活動報告と反省

### アウトリーチ

* モデレータ: 安次富 ⼤介 (東芝)
* 概要: W3C WoT規格の普及に向けて、国内の団体・企業・開発者コミュニティへの啓蒙活動、他標準化団体とのリエゾン活動
* [TFページ](https://github.com/w3c/wot-jp-cg/tree/main/TF/Outreach)

#### 2022年度活動予定
* 日本国内におけるWoT普及方法の検討と実施
  * 日本国内でWoTコミュニティの拡大を図る方法について検討と仕組み作りを行い、本事業の関係者・団体から少しずつ始める。
  * インターネットイベントに参加し、一般向けにWoTの普及促進を目指す。
  * W3C WoT-JP CGの設立
    * 検討会の内外でWoTについての議論や情報交換が行える場の設置  
* リエゾン団体との連携の検討
  * 本年度はコロナウイルスの関係で活動にある程度の制約がかかる可能性があるため、日本国内のIoTに関係する団体の仕様を調査し、ユースケースの抽出とギャップ分析を行う。
* 日本国内におけるWoT普及方法の検討と実施
  * W3C WoT-JP CGの立ち位置の検討
    * コミュニティを広げて行くためのツールとして活用
    * 設立の手続き方法等についてのヒアリングのために、W3Cの方との調整が必要
* WoT技術に関する情報発信
  * デプロイメントTF、ダウンストリームTFと連携
  * 発信内容や発信対象を明確化した上で取り組む (ユーザーファースト目線)

#### 2022年度活動実績
* 業界連携イベントの開催
    * [第5回イベント: スマートビル](https://github.com/w3c/wot-jp-cg/tree/main/Event/20220422_5th_Smart_Building) ([議事録](https://github.com/w3c/wot-jp-cg/blob/main/Event/20220422_5th_Smart_Building/minutes.md))
        * スマートビルの全体アーキテクチャ設計やインタフェースの標準策定のために発足した「IPA DADC (Digital Architecture Design Center) スマートビルプロジェクト」のキーパーソン達と共同議論
        * スマートビルプロジェクトの概要についてDADCから解説
        * スマートビルの通信インタフェースに WoT（Web of Things）等の国際標準を活用した先進事例を業界関係者 (竹中工務店、大阪大学、ダイキン工業、東芝) から紹介
        * さらに、スマートビルの現状課題と、関連業界標準への期待および可能性についてパネル討論
        * 資料:
        	* [事例紹介1: W3C WoTを活用したスマートビル (竹中工務店)](https://github.com/w3c/wot-jp-cg/blob/main/Event/20220422_5th_Smart_Building/20220422_wot_takenaka.pdf)
        	* [事例紹介2: W3C WoTを活用したスマートビル (大阪大学、ダイキン工業)](https://github.com/w3c/wot-jp-cg/blob/main/Event/20220422_5th_Smart_Building/20220422_wot_daikin.pdf)
        	* [事例紹介3: ビルファシリティの視点から、進化するビルを実現するための課題意識 (東芝)](https://github.com/w3c/wot-jp-cg/blob/main/Event/20220422_5th_Smart_Building/20220422_wot_toshiba.pdf)
    * [第6回イベント: 次世代出版サービス](https://github.com/w3c/wot-jp-cg/tree/main/Event/20220930_6th_Publishing) ([議事録](https://github.com/w3c/wot-jp-cg/blob/main/Event/20220930_6th_Publishing/minutes.md))
        * 近年、出版のデジタル化が進んでいるが、出版コンテンツを、紙メディアからデジタル・フォーマットへ展開させるだけでなく、デジタル・ネイティブなコンテンツ制作の必然性が生じている。その一方で、出版業界として取り組むべき具体的方法論については技術的課題が多い。
        * そこで、課題解決の一助となるべく、業界関係者 (KADOKAWA、小学館、講談社、集英社、NHK放送技術研究所、メディアドゥ) を招き、WoT-JP CGの紹介、Web標準の産業応用および放送サービスにおけるWoT活用ユースケースについてプレゼンの後、「デジタル出版の現状の課題と、業界標準への期待・可能性」についてパネル討論
        * 資料:
            * [Web of Things Japanese Community Groupの紹介（水嶌友昭）](https://github.com/w3c/wot-jp-cg/blob/main/Event/20220930_6th_Publishing/2022-09-30-WoT-JP-CG-Mizushima.pdf)
            * [Web標準の産業応用 -WoTのインパクト-（芦村和幸）](https://github.com/w3c/wot-jp-cg/blob/main/Event/20220930_6th_Publishing/20220930-wot-ka.pdf)
            * [放送サービスにおけるWoT活用ユースケース -「放送メディア・番組」の利活用・「テレビ」のIoT化-（遠藤大礎）](https://github.com/w3c/wot-jp-cg/blob/main/Event/20220930_6th_Publishing/20220930_第6回_WoT-JP_CGイベント_NHK_メディアユースケース.pdf)
* W3C Web of Things WG (WoT-WG) と連携した活動
    * [WoT Test Dev Meeting](https://github.com/w3c/wot-testing/tree/main/events/2023.03.DevMtg)
        * 日本側のWoT標準実装者 (ECHONET、IPA DADC、NHK) に、WoT仕様の実装状況についてヒアリング
    * WoT Binding Templates勉強会
        * 日本側実装者に、[WoT Binding Templates仕様](https://www.w3.org/TR/2020/NOTE-wot-binding-templates-20200130/)および[WoT Thing Description](https://www.w3.org/TR/2020/REC-wot-thing-description-20200409/)の記述内容に過不足ないかヒアリング
* その他関連標準化団体との連携
  * [IEC SC3D](https://www.iec.ch/dyn/www/f?p=103:7:0::::FSP_ORG_ID,FSP_LANG_ID:1345,25) - IoTオントロジー統合
      * 以下会合のための事前調整を支援:
          * [TPACブレークアウト会議](https://www.w3.org/2022/09/14-smartcities-minutes.html)
          * [IECセミナー](https://www.iec.ch/node/252313)
  * [一般社団法人情報通信技術委員会 (TTC)](https://www.ttc.or.jp/)
      * [TTCセミナー (Webベースデジタルツイン)](https://www.ttc.or.jp/seminar/rep/rep20221007) 開催支援

#### 反省と今後
* 2件の業界連携イベント (スマートビル，出版) ，Binding Templates仕様書勉強会，およびTest Dev Meetingを開催
* また，IECとの連携議論のための事前調整，およびTTCセミナー開催の支援をおこなった
* 一方で、新規のイベント企画が年度内に追加されていなかった
    * アウトリーチ活動の趣旨として、ユースケースのもとになる情報を集め、WoT WG/IGへフィードバックするところまではいかなかった
* 「WoTに関する検討会」の時のように、四半期ないし半期に一度など活動報告・総括する場があるほうがよかったかもしれない。
* 課題
  * TF連携の強化
      * ユースケースTFとの連携: アウトリーチイベントで得た知見をもとに，具体的なユースケースを記述し，WoT-WGへ提案していく
      * デプロイTFとの連携: 仕様書勉強会やTest Dev Meetingの際，既にデプロイTFで取り組んでいるプロトタイプ実装の取り組みについても含めていく
  * 仕様書勉強会の充実
      * Binding Templatesに限らず，DiscoveryやThing Descriptionについて，「IoTシステム開発にあたって，実際にはどのようにWoTを応用しているか」がわかるような勉強会を開催していく
      * その結果をまとめ，「WoT実装ガイドライン/ベストプラクティス」として，WoT-WGに提案していく
  * WoT WG/IGとの連携強化
    * CGでの議論内容をIG/WGへフィードバック
        * CG内でやることと，IG/WGへ提案していくことを明確化する
        * 例えば:
            * CG内では，イベント開催 (各イベントごとのレポート)，Webページ作成と，CGレポート公開
            * IG/WGに対しては，ユースケース提案 (誰が，いつ，どういう形で入力するか)
    * PlugFestへの参加 (Test Dev Meeting)
        * 日本版Dev Meeting
    * 仕様書勉強会

### デプロイメント
* モデレータ: 東村 邦彦 (⽇⽴製作所)
* 概要: Web of Thingsを実装するために必要な⽇本語の技術資料の充実
* [TFページ](https://github.com/w3c/wot-jpcg/tree/main/TF/Deployment)

#### 2022年度活動予定
* F2Fでのイベントが難しい状況において、WoTに興味をもった開発者が自身の手でWoTのThing/Intermediary/Consumerを実装し、彼らのPoC・実運用システムに組み込み、評価・運用をするための環境を整える。

* TF連携
  * アウトリーチTFとの連携:OR-TFの活動の一部は、DS-TFを利用したものとなるため、密に連携をとりながら活動を進める必要がある。
  * リーダが互いの作業部会に参加して連携加速

#### 2022年度活動実績
* 余り活動できていなかった

#### 反省と今後
* WoT WGとも連携しつつ、WoT活用方法の日本語版を更新していくべきだった。
* 今年度のイベント議事録などから開発者が必要としている情報を見定め、ポータル上の記事として執筆・公開していきたい。
* また、WoTに関連するWeb上の日本語情報へのポインタも集めるようにしたい。

### トランスレーション
* モデレータ: 芦村 和幸 (慶應義塾⼤学)
* 概要: WoT活動の普及促進のた めにWoT関連情報を翻訳
* [TFページ](https://github.com/w3c/wot-jp-cg/tree/main/TF/Translation)

#### 2022年度活動予定
* 2021年度に[TTC標準化](https://www.ttc.or.jp/document_db/information/view_express_entity/1388)した[WoT Architecture仕様書](https://www.w3.org/TR/2020/REC-wot-architecture-20200409/#toc)に引き続き、[WoT Thing Description仕様書の日本語訳](https://www.w3.org/TR/2020/REC-wot-thing-description-20200409/)のTTC標準化を目指す。

#### 2022年度活動実績
* MDN翻訳ミートアップとの連携を想定し、7月23日の「もくもく会」にオブザーバ参加した。

#### 反省と今後
* MDN翻訳ミートアップとの具体的なコラボのメドは、まだ立っていない。
  * 今後、具体的な日程を設定し、翻訳修正作業を進める必要がある。
  * 一方、[WoT Architecture 1.1](https://www.w3.org/TR/2023/CR-wot-architecture11-20230119/)および[WoT Thing Description 1.1](https://www.w3.org/TR/2023/CR-wot-thing-description11-20230119/)が、既にCandidate Recommendation (勧告候補) として公開されており、これらの翻訳作業についても検討する必要がある。
  * まずは、Thing Description (1.0) の日本語修正を早期に完了した上で、1.1翻訳の下案がないか等について調査したい
  * DiscoveryやProfileについては、優先度が低い
  * 一方で、Binding Templatesについては、勉強会を開催し、WoT-WGでの仕様策定に対して、改善の助言をWoT-JP CGとしてとりまとめていくのがよい

### ユースケース
* モデレータ: ⽔嶌 友昭 (インターネット総合研究所)
* 概要: WoTの社会実装に向けた、⽇本発のユースケースや実装例の創出
* [TFページ](https://github.com/w3c/wot-jpcg/tree/main/TF/Usecases)

#### 2022年度活動予定
* アウトリーチイベントの中で得たWoTの応用事例について、ユースケース案としてとりまとめた上で、WoT-IGへ提案
* さらに、WoT-WGでの仕様策定に活用

#### 2022年度活動実績
* アウトリーチイベントの中で、スマートビルや出版関連のユースケース案についてアイデアを得た
* 一方で、具体的なユースケース記述としてとりまとめるには至っていない

#### 反省と課題
* 今後、具体的なユースケースとして何件か取りまとめて、WoT-IG/WGへフィードバックしていきたい
* WoT-WG側の状況として、現在、Recharter手続き中で、CG側からのユースケース取得の手続きが明確化されていないという問題がある
* 2023年度は、ユースケースを強力に集めるために、アイデアソン等の、ユースケース検討に特化したイベントも企画していきたい
* 今後、WoTの普及促進にあたっては、Binding Templates記述の明確化が重要になるため、Binding勉強会の議論内容にもとづいたユースケース記述等もできるとよい
* 方法論としては、大きく以下の二つがあると思われる
    * 方法1: 個別にヒアリングした上で、WoT-JP CG側で抽出する
    * 方法2: アイデアソン等のイベントで参加者自身に記述いただく
* 2023年度の具体的計画を立てたい
    * そのためのユースケースのテンプレートも確定したい
    * その際、要件記述の扱いをどうするか、どこまで、どのような形で書くかを明確化する必要がある
    * 複数のユースケースが一つの要件に対応したり、一つのユースケースから複数の要件が必要になる場合も多いため、一旦、ユースケースと要件は分けて記述した方が書きやすいと思われる

## 2022年度総括と来期計画

### 2022年度総括
* CG参加者からの意見をどう集めるかが課題
  * 案:
    * 定例CG会議を開催したり、GitHub上でCG参加者からの意見を聞くのはどうか
* 今期のWoT-WGへのフィードバックは、あまりできていなかった
* 来期のWoT-WGへ入力するべき内容 (例えば、実装ガイドライン充実についてはプッシュしたい)

### 2023年度計画
#### WoT WG Chharterレビュー
* [WG Charter](https://w3c.github.io/wot-charter-drafts/wot-wg-2023-draft.html)に、「WoT-JP CGとのリエゾン」の記述があるので、特に、WGとWoT-JP CGの関係についてレビューする
    * 上記ドラフトWG Charterへコメント入力した

#### CG参加者のWG側への直接参加
* ユースケース等の提案
* Plugfest/Testfest
* Dev Meeting

#### TFの活動改善取り組み
##### アウトリーチ
* WoT WG/IGとの連携強化
  * CGでの議論内容をIG/WGへフィードバック
  * PlugFest/Testfestへの参加 (Test Dev Meeting)
  * 日本版Dev Meeting開催 (仕様書勉強会)
##### デプロイメント
* WoT WGと連携しつつ、WoT活用方法の日本語版(デプロイポータル)を更新
  * 2022年度のイベント議事録にもとづき、開発者が必要としている情報を見定めた上で、デプロイポータル上の記事として執筆・公開
  * WoTに関連するWeb上の日本語情報へのポインタも集める (日本版マーケティング)
##### トランスレーション
* MDN翻訳ミートアップと連携しつつ、Thing Description (1.0) の日本語修正を早期に完了
* 並行して、Thing Description 1.1翻訳の下案がないか調査
* アウトリーチと連携しつつ、Binding Templates勉強会を継続し、WoT-WGでの仕様策定に対して、改善の助言をWoT-JP CGとしてとりまとめる
##### ユースケース
* アウトリーチイベントから得た知見を、具体的なユースケースとして取りまとめて、WoT-IG/WGへフィードバック
* ユースケースをより強力に集めるために、アイデアソン等、ユースケース検討に特化したイベントを企画
* 今後、WoTの普及促進にあたって、Binding Templates記述の明確化が重要になるため、Binding勉強会の議論内容にもとづいたユースケース記述にも取り組む
* ユースケース記述のテンプレート改善にも取り組む
