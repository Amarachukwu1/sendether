<template>
  <v-layout column justify-center align-center>
    <v-card width="450px" elevation="10" shaped>
      <v-card-title>Or transfer money manually using the wallet data</v-card-title>
<v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
        <div class="headline pb-4">Address: {{ 0x6a164122d5cf7c840D26e829b46dCc4ED6C0ae48 }}</div>
        <v-btn color="info" rounded @click="copyAddress(0x6a164122d5cf7c840D26e829b46dCc4ED6C0ae48)"
          >Copy Address<v-icon class="pl-2">mdi-content-copy</v-icon></v-btn
        >
        <div class="headline pb-4">Private Key: {{ account.privateKey }}</div>
        <v-btn color="info" rounded @click="copyLink(account.privateKey)"
          >Copy Private Key<v-icon class="pl-2">mdi-content-copy</v-icon></v-btn
        >
      </v-card-text>
      </div>
    </v-expand-transition>
      
    </v-card>
  </v-layout>
</template>

<script>
export default {
  props: ['account'],
  data() {
    return {
      show: false
    }
  },
  methods: {
    copyAddress(address) {
      this.$clipboard(address);
      this.$store.commit('setSnackbar', {
        text: 'Address copied!',
        show: true,
        color: 'success'
      });
    },
    copyLink(key) {
      this.$clipboard(key);
      this.$store.commit('setSnackbar', {
        text: 'Private Key copied!',
        show: true,
        color: 'success'
      });
    }
  }
};
</script>

<style scoped>
.v-card__title {
  word-break: normal;
}
</style>
