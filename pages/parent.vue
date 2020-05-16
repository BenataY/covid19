<template>
  <div class="Parent">
    <page-header class="mb-3">
      {{ $t('お子様・保護者の方へ') }}
    </page-header>
    <ol class="toc">
      <li><a href="#closed">学校の臨時休校について</a></li>
      <li><a href="#education">オンラインで活用できる学習教材</a></li>
      <li><a href="#stayhome">「STAY HOME」 いばらきをおうちで楽しむ</a></li>
    </ol>
    <StaticCard>
      <h3 id="closed">1. {{ $t('学校の臨時休校について') }}</h3>
      <ul class="closedSchool">
        <li>県立学校<br />5/31(日)まで臨時休校</li>
        <li>市町村立学校（行方市以外）<br />5/31(日)まで休業</li>
        <li>市町村立学校（行方市）<br />6/1(月)まで休業</li>
      </ul>
      <h4>お問い合わせ先</h4>
      <span>平日 9:00 〜 17:00</span>
      <ul>
        <li>市町村立学校に関すること<br />教育庁学校教育部義務教育課：029-301-5226</li>
        <li>県立高等学校に関すること<br />教育庁学校教育部高校教育課：029-301-5260</li>
        <li>県立特別支援学校に関すること<br />教育庁学校教育部特別支援教育課：029-301-5280</li>
        <li>部活動に関すること<br />教育庁学校教育部保健体育課：029-301-5353</li>
      </ul>
      <h4>参考</h4>
      <a
        href="https://www.edu.pref.ibaraki.jp/board/topics/news/kinkyu/corona/index.html"
        target="_blank"
        rel="noopener noreferrer"
        >新型コロナウイルス感染症関連情報(教育関係) - 茨城県教育委員会</a
      >
      <br />
      <a
        href="https://www.pref.ibaraki.jp/1saigai/2019-ncov/documents/0424kaiken3.pdf"
        target="_blank"
        rel="noopener noreferrer"
        >県立高等学校等の臨時休業の延長について - 茨城県庁</a
      >
    </StaticCard>
    <StaticCard>
      <h3 id="education">2. {{ $t('オンラインで活用できる学習教材') }}</h3>
      <h4>茨城県内</h4>
      <ul>
        <li>
          <a
            href="https://sites.google.com/view/ibastudye/"
            target="_blank"
            rel="noopener noreferrer"
            >いばらきオンラインスタディ（小学生向け）</a
          >
        </li>
        <li>
          <a
            href="http://www.magokoro.ed.jp/viewer/info.html?id=189#9ecd-0e18-48a1-5109-a0b5ae33209d0f1c"
            target="_blank"
            rel="noopener noreferrer"
            >学習のための動画一覧 - 水戸市総合教育研究所</a
          >
        </li>
        <li>
          <a
            href="http://www.magokoro.ed.jp/viewer/info.html?id=189#b402-d80a-ab6e-e652-f834c05d42e389df"
            target="_blank"
            rel="noopener noreferrer"
            >学習のための資料一覧 - 水戸市総合教育研究所</a
          >
        </li>
        <li>
          <a
            href="https://www.edu.pref.ibaraki.jp/katei/"
            target="_blank"
            rel="noopener noreferrer"
            >すくすく育ていばらきっ子（家庭教育応援ナビ）</a
          >
        </li>
        <li>
          <a
            href="https://www.edu.pref.ibaraki.jp/board/gakkou/shochu/gakuryoku/manabi/index.html"
            target="_blank"
            rel="noopener noreferrer"
            >学びの広場サポートプラン事業 - 茨城県教育委員会</a
          >
        </li>
        <li>
          <a
            href="edu.pref.ibaraki.jp/board/gakkou/shochu/gakuryoku/jissenkenkyuu/index.html"
            target="_blank"
            rel="noopener noreferrer"
            >学力向上推進プロジェクト事業</a
          >
        </li>
      </ul>
      <h4>全国</h4>
      <ul>
        <li>
          <a
            href="https://www.mext.go.jp/a_menu/ikusei/gakusyushien/index_00001.htm"
            target="_blank"
            rel="noopener noreferrer"
            >子供の学び応援サイト - 文部科学省</a
          >
        </li>
        <li>
          <a
            href="https://www.mext.go.jp/a_menu/ikusei/gakusyushien/index_00001.htm"
            target="_blank"
            rel="noopener noreferrer"
            >＃学びを止めない未来の教室 - 経済産業省</a
          >
        </li>
      </ul>
    </StaticCard>
    <StaticCardNoLink>
      <h3 id="stayhome">3. {{ $t('「STAY HOME」 いばらきをおうちで楽しむ') }}</h3>
      <v-container fluid>
        <v-row>
          <v-col>
            <h4>動物</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col md=4>
            <sns-card
              sitename="日立市かみね動物園"
              :image="this.localePath('/site/kamine.jpeg')"
              url="http://kaminepark.sakura.ne.jp/zoo.htm"
              schedule="臨時休園：4/15(水) 〜 5/31(日)"
              comment="Twitter・Facebook で、可愛い動物たちの動画を配信中！"
              twitter="https://twitter.com/HitachiCity_Zoo"
              facebook="https://www.facebook.com/kaminezoo/"
            />
          </v-col>
          <v-col md=4>
            <sns-card
              sitename="アクアワールド茨城県大洗水族館"
              :image="this.localePath('/site/ooarai.jpeg')"
              url="http://www.aquaworld-oarai.com/"
              schedule="5/18(月)より平日のみ営業再開"
              comment="おうちで楽しむ！アクアワールド 公開中"
              twitter="https://twitter.com/aw_oarai"
              facebook="https://www.facebook.com/aquaworld.oarai"
              instagram="https://www.instagram.com/aquaworld_oarai/"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4>植物</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col md=4>
            <sns-card
              sitename="国営ひたち海浜公園"
              :image="this.localePath('/site/kaihin.jpeg')"
              url="https://hitachikaihin.jp/"
              schedule="4月4日(土)から当面の間休演中"
              comment="Twitter・YouTube で園内の動画を公開中"
              twitter="https://twitter.com/HitachiKaihin"
              facebook="https://www.facebook.com/hitachikaihin"
              instagram="https://www.instagram.com/hitachikaihin/"
              youtube="https://www.youtube.com/channel/UCz2UYvtN3d3nxX3gKccOaZA"
            />
          </v-col>
          <v-col md=4>
            <sns-card
              sitename="茨城県植物園"
              :image="this.localePath('/site/shokubutsu.jpg')"
              url="http://www.ibaraki-shokubutuen.jp/"
              schedule="5月12日(火)から一部開園中"
              twitter="https://twitter.com/iba_shokubutu"
              facebook="https://www.facebook.com/ibashokubutu"
            />
          </v-col>
          <v-col md=4>
            <sns-card
              sitename="偕楽園"
              :image="this.localePath('/site/kairakuen.jpg')"
              url="https://www.ibarakiguide.jp/kairakuen.html"
              schedule="5月12日(火)から開園再開"
              twitter="https://twitter.com/kairakuen_ibrk"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4>実験・工作</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col md=4>
            <sns-card
              sitename="日立シビックセンター"
              :image="this.localePath('/site/civic.jpeg')"
              url="http://www.civic.jp/center/"
              schedule="休館：4/18(土) 〜 5/31(日)"
              twitter="https://twitter.com/hitachicivic"
              facebook="https://www.facebook.com/hitachicivic"
              youtube="https://www.youtube.com/channel/UCYG5uv0eVgHkHYYLrBSCCuQ"
            />
          </v-col>
        </v-row>
      </v-container>
    </StaticCardNoLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import StaticCardNoLink from '@/components/StaticCardNoLink.vue'
import SnsCard from '@/components/cards/SnsCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    StaticCardNoLink,
    SnsCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('お子様・保護者の方へ') as string
    }
  }
})
</script>

<style lang="scss">
  .toc {
    margin: 20px 0;
  }

  .toc a {
    text-decoration: none;
  }

  .closedSchool li {
    margin: 0 0 10px 0;
  }
</style>
