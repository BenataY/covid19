<template>
  <div :is="linkTag" :to="linkTo" :href="linkHref" target="_blank" class="StaticButton">
    <span>
      <component :is="iconTag(icon)" v-bind="iconAttrs(icon)">
        {{ icon }}
      </component>
      {{ $t(text) }}
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeartIcon from '@/static/heart.svg'

export default Vue.extend({
  components: {
    HeartIcon
  },
  props: {
    url: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    iconTag(icon: string) {
      return icon ? (icon.startsWith('mdi') ? 'v-icon' : icon) : null
    },
    iconAttrs(icon: string) {
      return icon
        ? {
              class: 'StaticButton-icon'
          }
        : null
    }
  },
  computed: {
    linkTag(): string {
      return this.isInternalLink ? 'nuxt-link' : 'a'
    },
    linkTo(): string {
      return this.isInternalLink ? this.url : ''
    },
    linkHref(): string {
      return this.isInternalLink ? '' : this.url
    },
    isInternalLink(): boolean {
      return !/^https?:\/\//.test(this.url)
    }
  }
})
</script>

<style lang="scss">
.StaticButton {
  display: flex;
  font-weight: bold;
  background-color: $pink-1;
  border-radius: 4px;
  padding: 0.8em;
  > span {
    margin: auto;
    color: $white;
  }
  &:link,
  &:focus,
  &:visited,
  &:active {
    text-decoration: none;
  }
  &:hover {
    background-color: $pink-2;
  }
  .StaticButton-icon {
      margin-right: 5px;
      vertical-align: bottom;
  }
}
</style>
