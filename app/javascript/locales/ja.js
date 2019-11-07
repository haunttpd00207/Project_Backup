const messages = {
  ja: {
    order_comparer: {
      title: "Order Comparer for サーチ・ディスプレイ・動画",
      label_fmt: "①指示書（公式依頼FMT）",
      label_google: "②Google掲載内容",
      label_yahoo: "③Yahoo掲載内容",
      placeholder_fmt: "指示書（Excel）を選択してください",
      placeholder_google: "Googleの掲載内容（csv）を選択してください",
      placeholder_yahoo: "Yahooの掲載内容（csv）を選択してください",
      desc_url: "ファイル選択: ",
      submit: "チェック実行",
      desc_submit: "※結果は①にシート追加された形でダウンロードされます",
      note_html: "＜注意事項＞ <br> ・①指示書ファイルでのシート削除、シート名の変更、列の追加は禁止です <br> ・①指示書ファイルでのシート削除、シート名の変更、列の追加は禁止です <br> ・③サーチの場合はYahooキャンペーンエディターから、ディスプレイ・動画の場合はYDNキャンペーンエディターから <br> &nbsp; &nbsp; エクスポート＞すべてのコンポーネントを出力したファイルを選択してください <br> ・サーチ・ディスプレイ・動画は①指示書の内容により自動で判定されます",
      import: "参照...",
      no: "いいえ",
      yes: "はい"
    },

    error: {
      sure: "チェックを実行しますか？",
      error_missing_excel: "①指示書を選択してください" ,
      error_missing_google_yahoo: "②Google掲載内容と③Yahoo掲載内容を選択してください（どちらか一方だけでも可）" ,
      not_find: "&nbsp; チェックを実行しますか？ <br>【公式】依頼FMT(サーチ)／【公式】依頼FMT(動画)／【公式】依頼FMT(サーチ)　のいずれかを指定してください",
      not_match: "Yahoo掲載内容が正しくありません <br> サーチの場合はYSS、ディスプレイ・動画の場合はYDNの掲載内容ファイルを選択してください" 
    }
  }
}
export default messages