module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Web of Things (WoT)について',
      items: [
        {
          type: 'doc',
          label: 'Web of Thingsについて',
          id: 'about',
        },
        {
          type: 'doc',
          label: 'WoT-JP CGについて',
          id: 'aboutcg',
        },
      ]
    },
    {
      type: 'category',
      label: 'ドキュメント',
      items: [
        {
          type: 'category',
          label: 'WoT入門',
          items: [
            {
              type: 'doc',
              label: 'WoTの基本的なシーケンス',
              id: 'basicsequence',
            }
          ],
        },
        {
          type: 'category',
          label: 'チュートリアル',
          items: [
            {
              type: 'category',
              label: 'Thingの作成',
              items: [
                {
                  type: 'doc',
                  label: 'RaspberryPiでThingを作る',
                  id: 'raspithing',
                }
              ]
            },
            {
              type: 'category',
              label: 'Thingの利用',
              items: [
                {
                  type: 'doc',
                  label: 'Node Generator for Node-REDを使ったThingの操作',
                  id: 'nodegen-tutorial',
                }
              ]
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Thingの実装例',
      items: [
        {
          type: 'category',
          label: 'センサーのWoT化',
          items: [
            {
              type: 'doc',
              label: '気圧センサー (BMP280 + Raspberry Pi)',
              id: 'examples/bmp280/README',
            },
            {
              type: 'doc',
              label: '温湿度センサー (SHT3x + Raspberry Pi)',
              id: 'examples/sht3x/README',
            }
          ],
        },
        {
          type: 'category',
          label: 'IoTデバイス (REST APIが取得可能) のWoT化',
          items: [
            {
              type: 'doc',
              label: 'Hue (電球 ホワイトグラデーション)',
              id: 'examples/hue-white-light/README',
            },
            {
              type: 'doc',
              label: 'SwitchBot (開閉センサー)',
              id: 'examples/switchbot-contact-sensor/README',
            },
          ],
        },
        {
          type: 'category',
          label: '外部フレームワークを利用したWoT化',
          items: [
            {
              type: 'doc',
              label: 'ロボットアーム (WoTPy × myCobot 280)',
              id: 'examples/mycobot/README',
            },
            {
              type: 'doc',
              label: '+Style 加湿器 (WoTPy × Tuya Cloud Development)',
              id: 'examples/tuya-smart-humidifier/README',
            },
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'WoT仕様',
      items: [
        {
          type: 'doc',
          label: 'WoT仕様の全体像',
          id: 'recs',
        },
        {
          type: 'doc',
          label: 'WoT Thing Descriptionとは',
          id: 'td',
        },
      ]
    },
    {
      type: 'category',
      label: 'その他・リンク集・イベント資料',
      items: [
        {
          type: 'doc',
          label: 'イベント情報・資料 (開催済)',
          id: 'event',
        },
        {
          type: 'doc',
          label: 'その他・リンク集',
          id: 'misc',
        },
      ]
    },
  ],
};
