<template>
 <footer class="aui-bar aui-bar-tab" id="footer">
    <div class="aui-bar-tab-item" @click="onClickMe(0)" :class="{'aui-active':isActive == 0}" tapmode>
        <i class="aui-iconfont aui-icon-home"></i>
        <div class="aui-bar-tab-label">首页</div>
    </div>
    <div class="aui-bar-tab-item" @click="onClickMe(1)" :class="{'aui-active':isActive == 1}" tapmode>
        <i class="aui-iconfont aui-icon-video"></i>
        <div class="aui-bar-tab-label">西瓜视频</div>
    </div>
    <div class="aui-bar-tab-item" @click="onClickMe(2)" :class="{'aui-active':isActive == 2}" tapmode>
        <div class="aui-badge">99</div>
        <i class="aui-iconfont aui-icon-flag"></i>
        <div class="aui-bar-tab-label">微头条</div>
    </div>
    <div class="aui-bar-tab-item" @click="onClickMe(3)" :class="{'aui-active':isActive == 3}" tapmode>
        <div class="aui-dot"></div>
        <i class="aui-iconfont aui-icon-camera"></i>
        <div class="aui-bar-tab-label">小视频</div>
    </div>
</footer>

</template>

<script>
  export default {
    name:'footers',
    data(){
      return{
         isActive:0
      }
    },
    methods:{
      onClickMe:function(index){
       this.isActive=index;
       this.$emit('child-tell-me-something',index);
       //触发当前实例上的事件“child-tell-me-something”,
       //参数this.msg将会回调
    }
    }
  };
</script>

<style>

</style>