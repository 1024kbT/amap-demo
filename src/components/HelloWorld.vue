<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-22 16:48:43
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-23 17:02:44
-->

<template>
  <input id="tipinput" />
  <div id="container" style="width: 100%; height: 600px"></div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import { mokeGet } from '../http/api.js'
import AMapLoader from '@amap/amap-jsapi-loader'
defineProps({
  msg: String,
})
const markert = reactive({
  lat:0,
  lng:0
})
const districts = ref([
  { name: '北京市', center: '116.407394,39.904211' },
  { name: '天津市', center: '117.200983,39.084158' },
  { name: '河北省', center: '114.530235,38.037433' },
  { name: '山西省', center: '112.562678,37.873499' },
  { name: '内蒙古自治区', center: '111.76629,40.81739' },
  { name: '辽宁省', center: '123.431382,41.836175' },
])

const getGies = () => {
  AMapLoader.load({
    key: '87bb672e33f0d3348b5b3beba86729e8', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [], //插件列表
  })
    .then((AMap) => {
      var satellite = new AMap.TileLayer.Satellite()
      let roadNet = new AMap.TileLayer.RoadNet()
      let map = new AMap.Map('container', {
        center: [116.397428, 39.90923],
        zoom: 13,
        layers: [satellite, roadNet],
      })

      //添加点击事件获取z坐标
      map.on('click', function (ev) {
       
        // 触发事件的对象
        let target = ev.target
        // 触发事件的地理坐标，AMap.LngLat 类型
        markert.lng= ev.lnglat.lng
        markert.lat= ev.lnglat.lat
        console.log('markert',markert);
        
        // 触发事件的像素坐标，AMap.Pixel 类型
        let pixel = ev.pixel
        // 触发事件类型
        let type = ev.type
    
      })
      //放大缩小插件注册
      AMap.plugin('AMap.ToolBar', function () {
        //异步加载插件
        var toolbar = new AMap.ToolBar()
        map.addControl(toolbar)
      })
      //社会默认城市和监听的标签
      let autoOptions = {
        city: '北京',
        input: 'tipinput',
      }
      AMap.plugin(['AMap.PlaceSearch', 'AMap.AutoComplete'], function () {
        let autocomplete = new AMap.AutoComplete(autoOptions) //生成输入提示变量
        let placeSearch = new AMap.PlaceSearch({
          city: '北京',
          map: map,
        }) //构造地点查询类
       
        autocomplete.on('select', select) //注册监听，当选中某条记录时会触发
        function select(e) {
          
          placeSearch.setCity(e.poi.adcode)
          placeSearch.search(e.poi.name) //关键字查询查询
        }
      })
      let trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 2,
      })
      map.add(trafficLayer) //添加图层到地图
      //设置标记点
      const marker = new AMap.Marker({
        position: new AMap.LngLat(116.397428, 39.90923), //设置点坐标
        title: '杭州', //设置点标题
        map: map,
      })
      map.add(marker)
    })
    .catch((e) => {
      console.log(e)
    })
}
getGies()
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
