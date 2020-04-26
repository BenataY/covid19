<template>
  <div :class="$style.FlowComponent">
    <div :class="[$style.SubtleBox, $style.Box1]">
      <div :class="$style.RowItems">
        <div :class="$style.RowItemsHeader">
          <img
            :class="$style.RowItemsHeaderIcon"
            src="/flow/sentiment_very_dissatisfied-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('不安に思う方') }}
        </div>
      </div>
      <div :class="$style.FlowCondition">
        <em :class="$style.FlowSymptom">
          {{ $t('微熱') }}
          <img
            :class="$style.FlowSymptomIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
        </em>
        <span :class="$style.FlowComponentText">{{ $t('または') }}</span>
        <em :class="$style.FlowSymptom">
          {{ $t('軽い咳') }}
          <img
            :class="$style.FlowSymptomIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
        </em>
        <span :class="$style.FlowComponentText">{{ $t('または') }}</span>
        <em :class="$style.FlowSymptom">
          {{ $t('感染の不安') }}
          <img
            :class="$style.FlowSymptomIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
        </em>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.Flow {
  @include card-container($withDivider: true);

  position: relative;
  padding-bottom: 20px;
  color: $gray-2;
  text-align: center;

  &Condition {
    display: flex;
    width: 100%;
    padding: 0 15px;
    margin-top: 15px;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    font-weight: bold;
    font-size: 22px;

    @include largerThan($large) {
      padding: 0 20px;
    }
  }
  &Symptom {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 22%;
    padding: 10px;
    border: 2px solid $green-1;
    border-radius: 3px;
    background-color: $white;
    font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
    font-weight: bold;
    font-style: normal;

    &Icon {
      position: absolute;
      left: -8px;
      top: -8px;
      width: 24px;
      height: 24px;
    }

    &::before {
      position: absolute;
      left: -4px;
      top: -4px;
      width: 20px;
      height: 20px;
      background-color: white;
      content: '';
    }

    @include largerThan($large) {
      max-width: 190px;
      font-size: 20px;
    }
  }
}

.FlowComponent {
  color: $gray-2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &Text {
    padding: 10px;
    font-size: calc(0.75rem + ((1vw - 7.68px) * 1.4881));
    font-weight: bold;
  }
}

.Tel {
  @include largerThan($medium) {
    font-size: larger;
  }
}

.TelLink {
  display: flex;
  align-items: center;
  font-weight: bold;

  &:link,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
    @media screen {
      outline: 1px dotted $gray-3;
    }
  }

  &Icon {
    display: inline-block;
    margin-right: 5px;
    width: 26px;
    height: 26px;
  }
}

.CheckBox {
  position: relative;
  border: 2px solid $green-1;
  border-radius: 4px;
  margin: 8px 0;
  padding: 10px;
  width: 20%;
  text-align: center;
  font-weight: bold;
  font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
  font-style: normal;

  @include largerThan($large) {
    font-size: 20px;
  }

  &Icon {
    position: absolute;
    left: -8px;
    top: -8px;
    width: 24px;
    height: 24px;
  }

  &::before {
    position: absolute;
    left: -4px;
    top: -4px;
    width: 20px;
    height: 20px;
    background-color: white;
    content: '';
  }
}

.SubtleBox {
  @include card-container();

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5em;
}

.Box1 {
  position: relative;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  flex-direction: row;

  &Icon {
    position: absolute;
    bottom: 40%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
  }
}

.RowItems {
  flex-grow: 1;
  text-align: center;
  margin: 0 4px;

  @include largerThan($large) {
    margin: 0 2em;
  }
}

.RowItemsHeader {
  font-size: smaller;

  &Icon {
    display: block;
    margin: auto;
    width: 100px;
    height: 45px;
  }
}

.FlowArrow {
  position: absolute;
  margin: 0 -20px;
  z-index: 1;
}

.LargerText {
  font-size: larger;
  font-weight: bold;
  @media print {
    width: 65%;
  }
}

.Center {
  text-align: center;
}

.SmallerText {
  font-size: smaller;
}

</style>
