/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-22 16:48:43
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-23 11:15:02
 */

import App from './App.vue'
import { createApp } from 'vue'
import installElementPlus from './plugins/element'
import AMapLoader from "@amap/amap-jsapi-loader";
const app = createApp(App)
installElementPlus(app)
app.use(AMapLoader)
app.mount('#app')
