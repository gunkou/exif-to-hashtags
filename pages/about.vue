<template>
  <v-row justify="center" align="center">
    <v-col style="max-width:600px">
      <v-card-title tag="h1">
        About
      </v-card-title>

      <v-card-title tag="h2">
        アップロードした写真について
      </v-card-title>
      <v-card-text>
        利用した画像は、当サイトのサーバーにはアップロードされません。あなたのパソコン、またはスマホの端末内でのみ処理が行われます。
      </v-card-text>

      <v-card-title tag="h2">
        EXIFについて
      </v-card-title>
      <v-card-text>
        <a href="https://ja.wikipedia.org/wiki/Exchangeable_image_file_format">wikipedia</a>でみる
      </v-card-text>

      <v-card-title tag="h2">
        プライバシーポリシー
      </v-card-title>
      <v-card-title tag="h3">
        広告について
      </v-card-title>
      <v-card-text>
        当サイトでは、第三者配信の広告サービス（Googleアドセンス）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。Cookieを無効にする方法やGoogleアドセンスに関する詳細は「<a target="_blank" href="https://policies.google.com/technologies/ads?gl=jp">広告 – ポリシーと規約 – Google</a>」をご確認ください。
      </v-card-text>
      <v-card-title tag="h3">
        アクセス解析ツールについて
      </v-card-title>
      <v-card-text>
        訪問状況を把握するために<a target="_blank" href="https://marketingplatform.google.com/intl/ja/about/analytics/">Google Analytics</a>を利用しています。Google Analyticsはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、特定の個人を識別する情報は一切含まれません。</p>
      </v-card-text>
      <v-card-title tag="h3">
        個人情報の利用目的
      </v-card-title>
      <v-card-text>
        お問い合わせ時にご利用した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
      </v-card-text>

      <v-card-title tag="h2">
        お問合せ先
      </v-card-title>
      <v-card-text>
        gun.kou@outlook.com
      </v-card-text>

      <nuxt-link to="/">Back</nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>
