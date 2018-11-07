const initState = {
  api: '',
  list: [],
  pagination: {},
  filters: {},
  detail: {},
};

export default {
  namespace: 'page',

  state: initState,

  effects: {
    *init({ payload }, { put }) {
      let res = {};
      if (typeof payload === 'string') {
        res.api = payload;
      } else {
        res = payload;
      }

      yield put({
        type: 'save',
        payload: {
          ...initState,
          ...res,
        },
      });
      yield put({
        type: 'read',
      });
    },

    // *read() {
    //
    // },
    //
    // *create() {
    //
    // },
    //
    // *delete() {
    //
    // },
    //
    // *update() {
    //
    // },
    //
    // *detail() {
    //
    // },
    //
    // *close() {
    //
    // },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
