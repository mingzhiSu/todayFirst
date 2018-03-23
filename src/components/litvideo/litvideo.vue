<template>
<div>
   <div class="aui-tab" id="tab">
      <ul class="padd-bot lit-width">
         <li class="aui-text-white aui-padded-5 aui-text-left aui-margin-b-10 aui-bg-white" v-for="videos in video">
            <div class="video-list">
                <video class="vjs-tech" playsinline="true" webkit-playsinline="true" id="vjs_video_3_html5_api" tabindex="-1" preload="metadata" :src="videos.videosrc" :poster="videos.proter" controls="controls"><source type="video/mp4" :src="videos.videosrc"></video>
                <p class="video-tit">{{videos.tit}}</p>
            </div>
            <div class="aui-info aui-margin-t-10 aui-padded-l-10 aui-padded-r-10">
                <div class="aui-info-item">
                    <img :src="videos.peoimg" style="width:1.5rem" class="aui-img-round" /><span class="aui-margin-l-5">{{videos.peoname}}</span>
            </div>
            <div class="aui-info-item">{{videos.peotime}}</div>
            </div>
         </li>
      </ul>
      </div>
</div>
</template>

<script>
  export default {
    name:'videos',
    data(){
      return{
         video:[]
      }
    },
    methods:{
    
    },
    created(){
    let _this = this;
    this.$ajax.get('/api/litvideo').then(function (response) {
      let datas=response.data.data;
      console.log(datas)
      _this.video=datas;
    })
    }
  };
</script>

<style>
  .aui-tab-item.aui-active{
      border-bottom:0;
      color:red;
  }
  .video-list{
     position:relative;
     height:9rem;
     overflow:hidden;
  }
  .video-list-bg{
    position:absolute;
    left:0;
    top:0;
    width:100%;
  }
  .video-list-btn{
    width:2rem;
    position:absolute;
    margin:auto;
    left:0;
    right:0;
    top:0;
    bottom:0;
  }
  .video-list-h4{
    position:relative;
    z-index:10;
  }
  .video-list-tip{
    position:relative;
    z-index:10;
  }
  .padd-bot{
   padding-bottom:2.5rem;
  }
  .vjs-tech{
        position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video-tit{
    position:absolute;
    z-index:100;
    color:#fff;
    top:0.5rem;
    left:5%;
  }
  .lit-width{
    width:100%;
  }
</style>