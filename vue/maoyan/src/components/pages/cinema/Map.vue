 <template>
      <div style="height:100%;">
          <div class="map" id="Map">
          </div>
            <footer>
    <div class="to-bottom">
        <div class="bottom-ctrl">

            <!-- 1 定位按钮：左下角 -->
            <a class="cbutton" id="btn-positioning" data-adtag="positioning">
                <i class="icon-positioning highlight"></i>
                <span class="highlightCover"></span>
            </a>
            <!-- 2 比例尺+logo -->
            <div id="map-info">
                <div class="scale" style="width: 47.7637px;">200 米</div>
                <!-- <div class="qqmap-text-logo">腾讯地图</div> -->
                <div class="qqmap-text-logo-new" style="display: block;"></div>
                <div class="bing-text-logo">腾讯地图</div>
                <div class="here-text-logo" style="display: none;">腾讯地图</div>
            </div>
            <!-- 3 右侧 -->
            <!--<div class="to-right">-->
                <!-- 缩放按钮 -->
                <!--<a class="cbutton" id="btn-zoom">
                    <i id="btn-zoom-in" class="icon-zoom-in" data-adtag="zoomin"></i>
                    <i id="btn-zoom-out" class="icon-zoom-out" data-adtag="zoomout"></i>
                </a>-->
                <!-- 弹出菜单-->
                <!--<a class="cbutton" id="btn-index-menu" data-adtag="more"><i class="icon-more"></i></a>
            </div>-->
            <div class="downloadContainer">
                <span class="downloadBtnContainer">
                    <span class="downloadBtn"></span>
                    <span class="downloadBtnCover"></span>
                </span>
                <!-- <span class="downloadInfo">
                    <span class="downloadInfoCloseContainer"><i class="downloadInfoClose"></i></span>
                    <span class="downloadInfoNote">无需流量用地图</span>
                    <i class="downloadInfoTriangle"></i>
                </span> -->
            </div>
        </div>
        <div id="map-widget-foot-external-content"></div>
    </div>
    <div class="poi-info">
        <div class="poi-title"><span class="poi-name">南昌风云影城（领秀店）</span><span class="poi-addr">青山湖区南昌经济技术开发区英雄大道6号力邦商贸广场1号楼</span>
            <div class="actTonav tonav">
                <i data-adtag="poitonav"></i>
                <span class="tonavCover"></span>
            </div>
        </div>
        <div class="poi-tab"><a href="javascript:;" class="actNearby" data-adtag="poinearby"><i class="icon-nearby"></i>查看周边</a></div>
    </div>

</footer>
      </div>
  </template>

  <script>
  export default {
      name: "bdMap",
      components: {},
      data() {
          return {};
      },
      mounted() {
          const map = new BMap.Map("Map");
          // 创建地图实例
          const point = new BMap.Point(116.404, 39.915);
          // 创建点坐标
          map.centerAndZoom(point, 15);
          // 初始化地图，设置中心点坐标和地图级别
      }
  };
</script>

<style scoped>
  .map {
      width: 100%;
      height: 500px;
  }
 #btn-positioning {
    vertical-align: bottom;
}
 #btn-positioning
 {
    display: inline-block;
}
 a.cbutton {
    position: absolute;
    right: 0;
    bottom: 0;
    /* border-radius: 34px; */
    border-radius: 72px;
    overflow: hidden;
    /* display: block; */
}
 a.cbutton {
    margin: 8px;
}
a.cbutton i {
    display: block;
}
a.cbutton .highlightCover {
    position: absolute;
    bottom: 0px;
    display: inline-block;
    width: 52px;
    height: 52px;
}
.icon-positioning:before {
    content: "\e63a";
}
a.cbutton i:after {
    content: '';
    background: url('https://3gimg.qq.com/lightmap/v1/marker/images/pos.png');
    background-size: 100%;
    display: inline-block;
    font-size: 42px;
    width: 52px;
    height: 52px;
    z-index: -1;
}
footer {
    position: absolute;
    bottom: 0;
    width: 100vw;
}
footer {
    display: block;
}
.to-bottom {
    position: absolute;
    top: -52px;
    width: 100%;
}
.to-bottom .bottom-ctrl {
    position: relative;
    font-size: 0;
}
.to-bottom .bottom-ctrl #map-info {
    vertical-align: 2px;
    margin-left: 18px;
}
.to-bottom .bottom-ctrl #map-info {
    display: inline-block;
}
#map-info .scale {
    font-size: 10px;
    text-align: center;
    position: relative;
    line-height: 1;
    white-space: nowrap;
    padding-bottom: 3px;
    margin-bottom: 7px;
}
.qqmap-text-logo-new {
    background: url(https://3gimg.qq.com/lightmap/v1/marker/images/pos.png) no-repeat;
    background-size: 100%;
    width: 60px;
    height: 14px;
    position: absolute;
}
.bing-text-logo {
    background: url('http://dev.virtualearth.net/Branding/logo_powered_by.png') no-repeat 0 50%;
    width: 60px;
    height: 20px;
    display: none;
    /* position: relative; */
    left: -4px;
}
.here-text-logo {
    background: url('https://wecar.myapp.com/myapp/mapwecar/HERE_Logo_black.png') no-repeat 0 50%;
    width: 120px;
    height: 80px;
    display: none;
    position: absolute;
    transform: scale(0.33);
    left: -8px;
    top: -1px;
}
.downloadContainer .downloadBtn {
    position: absolute;
    right: 0;
    bottom: 55px;
    display: inline-block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAACEFBMV…KEgkrEc2ozA5t1HbdS80D9vErD7V/X6V9Asl2p+o/e3/sH4tPyCjtD37QAAAAASUVORK5CYII=) no-repeat center center;
    background-size: 52px 52px;
    width: 43px;
    height: 45px;
    margin: 13px;
}
.downloadContainer .downloadBtnCover {
    display: inline-block;
    position: absolute;
    right: 1px;
    bottom: 56px;
    width: 42px;
    height: 42px;
    margin: 13px;
    border-radius: 21px;
    -webkit-border-radius: 21px;
}
.poi-info {
    z-index: 1000001;
    background: #ffffff;
}
.poi-info .poi-title {
    width: 100%;
    padding: 19px 16px 17px 18px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 0 solid rgba(0,0,0,0.10);
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.15);
}.poi-info .poi-name {
    font-size: 17px;
    color: #111111;
    display: block;
    margin-right: 70px;
    word-wrap: break-word;
}
.poi-info .poi-addr {
    font-size: 13px;
    color: #666666;
    display: block;
    margin-top: 4px;
    margin-right: 70px;
    word-wrap: break-word;
}
.poi-info .tonav {
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -52.5px;
    right: 16px;
    width: 60px;
    height: 60px;
    border-radius: 60px;
    overflow: hidden;
}
.poi-info .tonav i {
    background: url(https://3gimg.qq.com/lightmap/v1/marker/images/arrow_1.png) no-repeat;
    background-size: 100%;
}
.poi-info .tonav i {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 60px;
}
.poi-info .tonav .tonavCover {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    border-radius: 60px;
}

.poi-info .poi-tab {
    margin: 0;
    padding: 0;
    width: 100%;
    display: table;
    table-layout: fixed;
}
.poi-info .poi-tab a {
    display: table-cell;
    position: relative;
    padding: 11px;
    font-size: 14px;
    color: #111111;
    text-align: center;
    text-decoration: none;
}
a, i {
    -webkit-tap-highlight-color: transparent;
}
.poi-info .poi-tab a i {
    margin-right: 5px;
}
 </style>