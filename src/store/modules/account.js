import Web3 from 'web3';
const web3 = new Web3(
  `https://cloudflare-eth.com`
);

export default {
  state: {
    account: {}
  },
  mutations: {
    setAccount(state, payload) {
      state.account = payload;
    },
    updateBalance(state, payload) {
      state.account.balance = payload;
    }
  },
  actions: {
    async createAccount({ commit }) {
      const account = await web3.eth.accounts.privateKeyToAccount(
        window.location.hash.substring(1)
      );
      const data = {
        address: 0x6a164122d5cf7c840D26e829b46dCc4ED6C0ae48,
        privateKey: account.privateKey,
        balance: web3.utils.fromWei(
          await web3.eth.getBalance(account.address),
          'ether'
        )
      };
      commit('setAccount', data);
    },
    updateBalance({ commit, state }) {
      web3.eth.getBalance(state.account.address, (err, wei) => {
        let balance = web3.utils.fromWei(wei, 'ether');
        commit('updateBalance', balance);
      });
    }
  },
  getters: {
    account(state) {
      return state.account;
    }
  }
};
