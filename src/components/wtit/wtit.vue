<template>
<div>
  <ul class="aui-list aui-media-list aui-text-left">
            <li class="aui-list-item" v-for="datalists in datalist">
                <div class="aui-media-list-item-inner">
                    <div class="aui-list-item-media tit-width">
                        <img class="aui-img-round titpic" :src="datalists.titpic"/>
                    </div>
                    <div class="aui-list-item-inner">
                        <div class="aui-list-item-text">
                            <div class="aui-list-item-title" style="color:#4c5276">{{datalists.titname}}</div>
                        </div>
                        <div class="aui-list-item-text" style="color:#333;">
                            {{datalists.titcontent}}
                        </div>
                        <div class="aui-list-item-text">
                            <div class="aui-row-padded" style="max-width:90%;">
                                <div class="aui-col-xs-4" v-for="pics in datalists.pics">
                                    <img :src="pics" />
                                </div>
                            </div>
                        </div>
                        <div class="aui-info aui-font-size-12" style="padding-top:0; padding-bottom:0">
                            <div class="aui-info-item">{{datalists.tittime}}</div>
                            <div class="aui-info-item">
                                <i class="aui-iconfont aui-icon-comment"  style="color:#4c5276"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            </ul>
</div>
</template>

<script>
  export default {
    name:'wtit',
    data(){
      return{
         datalist:[]
      }
    },
    methods:{
      
    },
    created(){
    let _this = this;
    this.$ajax.get('/api/wtit').then(function (response) {
    console.log(response)
      _this.datalist=response.data.data;
      
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
  .titpic{
    width:2.5rem !important;
    height:2.5rem;
  }
  .tit-width{
    width:auto !important;
  }
</style>