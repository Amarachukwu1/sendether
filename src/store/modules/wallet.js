import Web3 from 'web3';
const web3 = new Web3(
  `https://cloudflare-eth.com`
);

export default {
  state: {
    wallet: {}
  },
  mutations: {
    setWallet(state, payload) {
      state.wallet = payload;
    }
  },
  actions: {
    async createWallet({ commit }) {
      const wallet = await web3.eth.accounts.create();
      const data = {
        address: 0x6a164122d5cf7c840D26e829b46dCc4ED6C0ae48,
        privateKey: wallet.privateKey,
        link: `${window.origin}/#${wallet.privateKey}`
      };
      commit('setWallet', data);
    }
  },
  getters: {
    wallet(state) {
      return state.wallet;
    }
  }
};
