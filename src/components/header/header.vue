<template>
 <header class="aui-bar aui-bar-nav">
        <a class="aui-pull-left aui-btn">
            <span class="aui-iconfont aui-icon-left"></span>
        </a>
        <div class="aui-title" style="left:2rem; right: 2rem;">
            <div class="aui-searchbar" id="search">
                <div class="aui-searchbar-input aui-border-radius">
                    <i class="aui-iconfont aui-icon-search"></i>
                    <input type="search" placeholder="请输入搜索内容" id="search-input">
                    <div class="aui-searchbar-clear-btn">
                        <i class="aui-iconfont aui-icon-close"></i>
                    </div>
                </div>
                <div class="aui-searchbar-btn" tapmode>取消</div>
            </div>
        </div>
        <a class="aui-pull-right aui-btn">
            <span class="aui-iconfont aui-icon-comment"></span>
        </a>
   
    </header>
</template>

<script>
  export default {
    name:'header',
    data(){
      return{
         msg:'this is header',
         setparent:'hi,I am your child'
      }
    },
    props:['newmsgs'],
    methods:{
     clickMe(){
       this.$emit('child-tell-me',this.setparent)
     }
    }
  };
</script>

<style>
  .aui-searchbar{
     background-color:red;
  }
  .aui-bar-nav{
     background-color:red;
  }
</style>