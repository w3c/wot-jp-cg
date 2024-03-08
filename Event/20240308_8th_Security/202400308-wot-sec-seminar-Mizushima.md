# WoT仕様におけるセキュリティ/プライバシー取扱の現状

* WoT標準化におけるセキュリティ検討の流れ
    1. まず，Security Guidelinesにおける基礎検討
    1. その検討結果が各仕様書に反映された
       * WoT Architecture 1.1
       * WoT Discovery
       * WoT Thing Description 1.1
* 2023年から2025年にかけて取り組まれる「WoT 2.0仕様」の策定にあたっては，[WoT WG Charter](https://www.w3.org/2023/10/wot-wg-2023.html)に規定されている通り，下記の2点がテーマになる
    * WoTがIoTシステム開発の現場でどのように利用されるか
    * その際に必要とされる，仕様の拡張や改善
* IoTシステム開発の現場においては，セキュリティおよびプライバシーの保護が重要であるため，それらの観点から，具体的にどのような仕様拡張や改善がWoTで必要となるかを明確化したい
* そのためには，まず，「既存のWoT関連仕様のうち，どの文書でどのような検討がされ，どの文書でどのような仕様規定がされているか」を復習する必要がある
    * [WoT Security and Privacy Guidelines Editor's Draft](https://w3c.github.io/wot-security/)
    * [WoT Architecture 1.1 Editor's Draft](https://w3c.github.io/wot-architecture/)
    * [WoT Discovery Editor's Draft](https://w3c.github.io/wot-discovery/)
    * [WoT Thing Description 1.1 Proposed Recommendation](https://www.w3.org/TR/wot-thing-description11/)
* その上で，実際に世の中で利用されているさまざまなIoTシステムの構成レイヤを踏まえて，「WoTがどう利用されているか」や「IoTシステム全体でのセキュリティ対策と，WoTセキュリティの兼ね合い」について明確化が必要
    * その結果，「現場のIoTシステムにおけるセキュリティをWoT側で引き継ぐかどうか」や「WoTレイヤでのセキュリティをどこで，どう使うか．誰に強制するか」等について議論する必要がある
    * さらに，「WoT 1.1では不足している観点や機能」を明確化し，「WoT 2.0で改善するべき点 (機能の追加，改善，実装ガイドライン等) を明確化していく (ここがアイデアソンでの議論のテーマになる)

## WoT Security and Privacy Guidelines
[WoT Security and Privacy Guidelines Note](https://www.w3.org/TR/2019/NOTE-wot-security-20191106/)

* 「Webレイヤ」でのセキュリティ・プライバシー対策については一通り検討されてきているが，問題として，現場のIoTシステムにおけるセキュリティ対策について，Use Caseベースで明確化しておくべきだった
    * したがって，実際に現場で利用されるIoTシステムの各構成レイヤにおいて，「どのようなセキュリティ対策が行われているか」や「WoTがどう利用されているか」
    * WoTでは，各構成レイヤにおけるセキュリティ対策をどのように引き継いでいるのか，あるいは引き継ぐべきなのか
    * それら検討結果にもとづいて，「WoT 2.0で，何をどう改善するべきか」を明確化する必要がある

## WoT Thing Description 1.1
[WoT Thing Description 1.1 Recommendation](https://www.w3.org/TR/2023/REC-wot-thing-description11-20231205/)

[WoT Thing Description Implementation Report](https://w3c.github.io/wot-thing-description/testing/report11.html)

* Implementation Report中の概念レベルのアサーション
    * 1: td-processor
    * 19: td-vocab-security--Thing
    * 20: td-vocab-securityDefinitions--Thing
    * 93: td-security-scheme-name
    * 95: sec-body-name-json-pointer
    * 97: sec-body-nam-json-pointer-array
    * 100: td-security-in-uri-variable
    * 101: sec-security-vocab-auto-in-no-name
    * 102: td-security-uri-variables-distinct
    * 103: td-vocab-at-type--SecurityScheme
    * 104: td-vocab-description--ScurityScheme
    * 105: td-vocab-descriptions--SecurityScheme
    * 106: td-vocab-proxy--SecurityScheme
    * 107: td-vocab-scheme--SecurityScheme
    * 108: td-security-combo-exclusive-oneof-or-allof
    * 109: td-vocab-oneOf--ComboSecurityScheme
    * 110: td-vocab-allOf--ComboSecurityScheme
    * 111: td-vocab-name--BasicSecurityScheme
    * 112: td-vocab-in--BasicSecurityScheme
    * 113: td-vocab-name--DigestSecurityScheme
    * 114: td-vocab-in--DigestSecurityScheme
    * 115: td-vocab-qop--DigestSecurityScheme
    * 116: td-vocab-name--APIKeySecurityScheme
    * 117: td-vocab-in--APIKeySecurityScheme
    * 118: td-security-bearer-format-extensions
    * 119: td-vocab-authorization--BearerSecurityScheme
    * 120: td-vocab-name--BearerSecurityScheme
    * 121: td-vocab-alg--BearerSecurityScheme
    * 122: td-vocab-format--BearerSecurityScheme
    * 123: td-vocab-in--BearerSecurityScheme
    * 124: td-vocab-identity--PSKSecurityScheme
    * 125: td-vocab-authorization--OAuth2SecurityScheme
    * 126: td-vocab-token--OAuth2SecurityScheme
    * 127: td-vocab-refresh--OAuth2SecurityScheme
    * 128: td-vocab-scopes--OAuth2SecurityScheme
    * 129: td-vocab-flow--OAuth2SecurityScheme
    * 130: td-security-oauth2-code-flow
    * 131: td-security-oauth2-client-flow
    * 132: td-security-oauth2-client-flow-no-auth
    * ...
* 具体的な機能仕様レベルのアサーション
    * 107.01: td-vocab-scheme--SecurityScheme_apikey
    * 107.02: td-vocab-scheme--SecurityScheme_auto
    * 107.03: td-vocab-scheme--SecurityScheme_basic
    * 107.04: td-vocab-scheme--SecurityScheme_bearer
    * 107.05: td-vocab-scheme--SecurityScheme_digest
    * 107.06: td-vocab-scheme--SecurityScheme_nosec
    * 107.07: td-vocab-scheme--SecurityScheme_oauth2
    * 107.08: td-vocab-scheme--SecurityScheme_psk
    * 118.01: td-security-bearer-format-extensions_alg
    * 118.02: td-security-bearer-format-extensions_format
    * ...

* 上記したように，概念レベルおよび，機能仕様レベルで，多数のアサーションが定義されている
    * 一方，「いつ，どこで(ハード，ネットワーク，アプリ)，どのように用いればよいか」の実装ガイドがないため，あまり利用されていない
    * そのため，「いつ，どこで，どう使えばよいか」の説明を充実すること，そして，現状の8つのSecurity Schemeで不足がないかを検証することが重要
* ArchitectureおよびDiscoveryにおいても，同様の検証が必要
    * 3仕様のそれぞれについて，(1) 各仕様の概要および (2) 各仕様の概念レベルおよび機能仕様レベルのSecurity/Privacyの対応状況(各スライド一枚ずつ; 2✕3=6枚)を説明する
 
 
## WoT Architecture 1.1
[WoT Architecture 1.1 Recommendation](https://www.w3.org/TR/wot-architecture11/)

[WoT Architecture Implementation Report](https://w3c.github.io/wot-architecture/testing/report11.html)

* Seurity
    * 27: arch-security-consideration-separate-security-data
    * 28: arch-security-consideration-auth-private-data
    * 29: arch-security-consideration-no-private-security-data
    * 30: arch-security-consideration-communication-binding
    * 31: arch-security-consideration-communication-platform
    * 32: arch-security-consideration-isolation-sensitive
    * 33: arch-security-consideration-isolation-tenants
    * 34: arch-security-consideration-avoid-direct
    * 35: arch-security-consideration-use-hal
    * 36: arch-security-consideration-secure-update
    * 37: arch-security-consideration-secure-cred-storage
    * 38: arch-security-consideration-secure-cred-isolation
    * 39: arch-security-consideration-no-expose-cred
    * 40: arch-security-consideration-limit-cred-access
    * 41: arch-security-consideration-limit-trust
    * 42: arch-security-consideration-segmented-network
    * 43: arch-security-consideration-tls-mandatory-pub
    * 44: arch-security-consideration-tls-recommended-priv
    * 45: arch-security-consideration-tls-optional-on-lan
    * 46: arch-security-consideration-tls-1-3
    * 47: arch-security-consideration-tls-1-2
    * 48: arch-security-consideration-dtls-1-2
    * 49: arch-security-consideration-no-earlier-tls-or-dtls
* privacy
    * 50: arch-privacy-consideration-min-explicit-pii
    * 51: arch-privacy-consideration-explicit-pii
    * 52: arch-privacy-consideration-dist-td-auth
    * 53: arch-privacy-consideration-access-control-mandatory-person
    * 54: arch-privacy-consideration-id-access-control-mandatory-immutable
 
* Architectureでは、Thing Description等での実装に関わる標準化は行われていないので、SecurityやPrivacyで気をつけるべき点という意味で記述されている。

## WoT Discovery
[WoT Discovery Recommendation](https://www.w3.org/TR/wot-discovery/)

[WoT Discovery Implementation Report](https://w3c.github.io/wot-discovery/testing/report.html)

* Security Bootstrapping
    * 34: security-bootstrapping-endpoints
    * 35: exploration-secboot-401
* security
    * 126: sec-tdd-intro-no-observe
    * 127: sec-tdd-intro-no-ext
    * 128: sec-self-psk
    * 129: sec-self-segment
    * 130: priv-loc-priv-dir-access
    * 131: priv-loc-explicit-care
 
* Discoveryでは、Securityに関しては現在は気をつけるべき点という意味で記述がされている。

## 課題
* 現状の難しさ
    * WoT Securityのスコープがあまり明確に定義されていない印象がする
    * 本来は，スマートホームやスマートビルディング等の具体的な現場のシステム構築において必要とされるセキュリティ対策を，ハードレベル，ネットワークレベル，アプリケーションレベルで整理した上で，「WoTに必要なセキュリティ」が規定されるべき
        * しかしながら，現状では，「Webアプリケーションレベルのセキュリティ」に特化した説明しかない
        * これはこれで，「WoTセキュリティ」のスコープとしては妥当だが，システム全体でのセキュリティ対策の連携に関する説明が一切されていないことは問題
        * 勉強会の結果，「そのための実装ガイドラインが必要である」という結論につながるのではないか
