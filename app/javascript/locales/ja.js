const messages = {
  ja: {
    order_comparer: {
      title: "Order Comparer for サーチ・ディスプレイ・動画",
      label_fmt: "①指示書（公式依頼FMT）",
      label_google: "②Google掲載内容",
      label_yahoo: "③Yahoo掲載内容",
      hide_fmt: "指示書（Excel）を選択してください",
      hide_google: "Googleの掲載内容（csv）を選択してください",
      hide_yahoo: "Yahooの掲載内容（csv）を選択してください",
      desc_url: "ファイル選択: ",
      submit: "チェック実行",
      desc_submit: "※結果は①にシート追加された形でダウンロードされます",
      note_html: "＜注意事項＞ <br> ・①指示書ファイルでのシート削除、シート名の変更、列の追加は禁止です <br> ・①指示書ファイルでのシート削除、シート名の変更、列の追加は禁止です <br> ・③サーチの場合はYahooキャンペーンエディターから、ディスプレイ・動画の場合はYDNキャンペーンエディターから <br> &nbsp; &nbsp; エクスポート＞すべてのコンポーネントを出力したファイルを選択してください <br> ・サーチ・ディスプレイ・動画は①指示書の内容により自動で判定されます",
      import: "参照...",
      yes: "のみ",
      no: "いいえ",
      ok: "はい"
    },

    error: {
      sure: "チェックを実行しますか？",
      error_missing: "①指示書を選択してください <br> ②Google掲載内容と③Yahoo掲載内容を選択してください（どちらか一方だけでも可",
      not_find: "チェックを実行しますか？ <br> 【公式】依頼FMT(サーチ)／【公式】依頼FMT(動画)／【公式】依頼FMT(サーチ)　のいずれかを指定してください"
    },

    key_search: {
      search: "サーチ",
      video: "ディスプレイ",
      display: "動画"
    }
  }
}
export default messages
