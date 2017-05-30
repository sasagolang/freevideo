<template>
<div class="vid-wrappper">
    <h1>{{this.$route.path}}</h1>
  <video
    id="my-player"
    class="video-js"
    controls
    preload="auto"
    d
    poster="./oceans.png"
    data-setup='{}'>
  <source src="this.$route.path" type="video/mp4"></source>
  <!--<source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>-->
 
</video>
</div>
</template>
<script>
import Videojs from 'video.js'
var path = require('path');
 var fs = require('fs');
export default {
      created () {
          var _path = path.join(__dirname, '..', '\\app\\html\\config\\record.txt');
     console.info(_path);
      },
     
     ready(){
         console.info("ready");
       console.info(this.$route.query);
    }

}
</script>
<style>
 video::-webkit-media-controls-enclosure {
        overflow:hidden;
    }
    video::-webkit-media-controls-panel {
        width: calc(100% + 30px);
    }
    .vid-wrapper{
    width:100%;
    position:relative;
    padding-bottom:56.25%;    /*需要用padding来维持16:9比例,也就是9除以16*/
    height: 0;
}
.video-js{
    /*position: absolute;*/
    top:0;
    left: 0;
    width: 100%;
    height: 100%
}
</style>

