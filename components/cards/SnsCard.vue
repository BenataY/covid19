<template>
  <v-card
    class="Contents md-3"
  >
    <v-img
      class="Contents-img"
      :src="image"
    >
    </v-img>

    <v-card-title>
      {{ sitename }}
    </v-card-title>
    <v-card-subtitle class="pb-0">
      <a :href="url" target="_blank" class="titleLink">公式サイト</a>
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ schedule }}</div>
      <div>{{ comment }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn icon
        v-if="twitter"
        :href="twitter"
        target="_blank"
      >
        <v-img
          :src="this.localePath('/sns/twitter.png')"
          width=30px
        >
        </v-img>
      </v-btn>
      <v-btn icon
        v-if="facebook"
        :href="facebook"
        target="_blank"
      >
        <v-img
          :src="this.localePath('/sns/facebook.png')"
          width=30px
        >
        </v-img>
      </v-btn>
      <v-btn icon
        v-if="instagram"
        :href="instagram"
        target="_blank"
      >
        <v-img
          :src="this.localePath('/sns/instagram.png')"
          width=30px
        >
        </v-img>
      </v-btn>
      <v-btn icon
        v-if="youtube"
        :href="youtube"
        target="_blank"
      >
        <v-img
          :src="this.localePath('/sns/youtube.png')"
          width=30px
        >
        </v-img>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  components: {
  },
  props: {
    sitename: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    schedule: {
      type: String,
      default: ''
    },
    overview: {
      type: String,
      default: ''
    },
    comment: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    },
    facebook: {
      type: String,
      default: ''
    },
    instagram: {
      type: String,
      default: ''
    },
    youtube: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  computed: {
  }
})
</script>

<style lang="scss">
.Contents {
  max-width: 400px;

  &-img {
    height: 200px;
  }
}

.titleLink {
  margin-left: 3px !important;
  font-size: 14px !important;
}
</style>
