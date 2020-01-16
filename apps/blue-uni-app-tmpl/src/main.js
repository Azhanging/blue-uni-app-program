import Vue from 'vue';
import App from './App';
//use public in vue
import useInVue from '$use-in-vue';
//use vuex
import './store';
//全局blue-components
import '@css/blue-zone.scss';
//公共scss
import '$assets/css/app.scss';

/*------ 公共组件START -------*/
import BvActionSheet from '$components/Bv/BvActionSheet/BvActionSheet';
import BvLayer from '$components/Bv/BvLayer/BvLayer';
import BvCarNumberKeyboard from '$components/Bv/BvCarNumberKeyboard/BvCarNumberKeyboard';
import BvNumberKeyboard from '$components/Bv/BvNumberKeyboard/BvNumberKeyboard';

//注册全局的组件
Vue.component('BvActionSheet', BvActionSheet);
Vue.component('BvLayer', BvLayer);
Vue.component('BvCarNumberKeyboard', BvCarNumberKeyboard);
Vue.component('BvNumberKeyboard', BvNumberKeyboard);
/*------ 公共组件END -------*/

//使用插件到Vue，相对于公共的插件
useInVue(Vue);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
  ...App
});

app.$mount();
