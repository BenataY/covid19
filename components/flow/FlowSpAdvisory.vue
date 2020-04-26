<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('茨城県庁') }}
      <br />
      {{ $t('新型コロナ相談窓口') }}
      <small :class="[$style.break, $style.fzRegular, $style.mt5]">
        {{ $t('帰国者・接触者相談センター') }}
        <br />
        {{ $t('兼　一般相談窓口') }}
      </small>
    </h4>
    <p :class="[$style.open, $style.fzMedium]">
      <span>
        {{ $t('24時間対応') }}
      </span>
    </p>
    <div :class="[$style.phone, $style.fzNumeric]">
      <span :class="$style.icon">
        <PhoneIcon alt="Phone" />
      </span>
      <a href="tel:0293013200">029-301-3200</a>
    </div>
    <dl>
      <div :class="$style.daytime">
        <dt :class="[$style.title, $style.fzMedium]">
          {{ $t('平日') }}
          <br />
          {{ $t('9:00 〜 18:00') }}
        </dt>
        <dd :class="$style.link">
          <a
            href="https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('各保健所の電話番号は茨城県庁HPへ') }}
            <v-icon size="16">
              mdi-open-in-new
            </v-icon>
          </a>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
import PhoneIcon from '@/static/flow/responsive/phone.svg'

export default {
  components: { PhoneIcon }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

// advisory
.open {
  margin-top: px2vw(20);
  display: flex;
  justify-content: center;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: $white;
    color: $green-1;
    padding: px2vw(20) px2vw(40);
    border-radius: px2vw(6);
  }
}

.daytime {
  margin-top: px2vw(20);
  display: flex;
  border-top: 1px solid $gray-4;

  > * {
    padding: px2vw(30) px2vw(10);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    flex-basis: 40%;
  }

  .link {
    flex-basis: 60%;

    > a {
      text-decoration: none;
    }
  }
}

.night {
  margin: px2vw(30) auto;
  padding-left: 0 !important;
  text-align: center;

  > li {
    list-style-type: none;

    &:not(:first-child) {
      margin-top: px2vw(20);
    }
  }
}

.smallText {
  padding: 50px;
  font-size: 16px;
  color: $gray-2;
}

@include largerThan($small) {
  $vw: 960;

  .open {
    margin-top: px2vw(20, $vw);

    > span {
      padding: px2vw(20) px2vw(40, $vw);
      border-radius: px2vw(6, $vw);
    }
  }

  .daytime {
    margin-top: px2vw(20, $vw);

    > * {
      padding: px2vw(30) px2vw(10, $vw);
    }
  }

  .night {
    margin: px2vw(30, $vw) auto;

    > li {
      &:not(:first-child) {
        margin-top: px2vw(20, $vw);
      }
    }
  }
}
</style>
