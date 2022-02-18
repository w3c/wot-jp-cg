# 温湿度センサー SHT3x

[Sensirion 温湿度センサー SHT3x シリーズ](https://www.sensirion.com/jp/environmental-sensors/humidity-sensors/digital-humidity-sensors-for-various-applications/)のための Thing です。
Node-RED とノードモジュール [node-red-contrib-sht31](https://www.npmjs.com/package/node-red-contrib-sht31) を使用します。

### 必要なもの
- ハードウェア
  - Raspberry Pi 3以降
  - [Sensirion 温湿度センサー SHT3x シリーズ](https://www.sensirion.com/jp/environmental-sensors/humidity-sensors/digital-humidity-sensors-for-various-applications/)
  - ジャンパワイヤ、ブレッドボードなど
- ソフトウェア
  - [Node-RED v2.0 以降](https://nodered.org/)
  - [SHT3x制御用ノードモジュール (node-red-contrib-sht31)](https://flows.nodered.org/node/node-red-contrib-sht31)
  - [Node Generator (node-red-nodegen)](https://github.com/node-red/node-red-nodegen)

## 配線図

I<sup>2</sup>C を利用して下記の図のように接続します。

![配線図](sht31.png)

## インストール方法

ノードモジュール `node-red-contrib-sht31` を検索し、[パレットにノードを追加します](https://nodered.jp/docs/user-guide/runtime/adding-nodes)。

## フローの作成

![フローの例](flow.png)

<details>
<summary>フローを表示</summary>

下記のフローを[インポートします](https://nodered.jp/docs/user-guide/editor/workspace/import-export)。

[flow.json](flow.json ':include')

</details>

## Thing Description の例

スキーム・ホスト名・ポート番号 `http://localhost:1880` を自分の使っているアドレスに置き換えて使用します。

[sht31.jsonld](sht31.jsonld ':include')

Thing Description をダウンロード:

```sh
curl -sLO https://raw.githubusercontent.com/main/docs/examples/sht3x/sht31.jsonld
editor sht31.jsonld
```

## 使用例

上記の Thing Description の例を元にして JSON-LD ファイルを作成し、[node-red-nodegen](https://github.com/node-red/node-red-nodegen) を使用してノードモジュールを作成します。

ノードを作成:

```sh
npx node-red-nodegen sht31.jsonld
npm --prefix ~/.node-red install ./node-red-contrib-wotsht31
```

![使用例](sht31-node.png)
