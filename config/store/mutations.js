const mutations = {
  //设置用户信息
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  //设置用户最后访问的路径
  SET_LAST_PATH(state, path) {
    state.lastPath = path;
  },
  //设置登录状态
  SET_LOGIN(state, status) {
    state.isLogin = status;
  }
};

export default mutations;
