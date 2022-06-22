<template>
  
  <div>
    <div id="top">
      <div class="logo">
          <img :src="imgUrl"  class="img">
      </div>
      <div class="home" @click='homeclick'>
            首页
        </div>
      <router-link to="/publish" tag="div" class="publish">
            发文
      </router-link>
      <div class="QA">
            问答
        </div>
      <div class="query_box">
          <input  class="query_input" @keyup.enter="searchEnterFun" type='text' placeholder="请输入搜索内容" ref='query_info'>
          <div @click="queryclick()"  @mouseenter="queryenter" @mouseleave="queryleave" :style="active" class="query" type='button' ref="search">
                <router-link class="icon-search" tag="div" to="/queryResult" type='button' ></router-link>
          </div>
      </div>
      
      <div class="message">
          信息
      </div>

      <div class="personal">
          作品
      </div>
      <div class="login">
          登录
      </div>
      <div>
          
      </div>

      <div class="register">
          注册
      </div>
    
    </div>

    <div id="left_Body">
       
    </div>
    <div id="mid_Body">
        <!-- <div v-for="(item, index) in bannerList" v-show="index===mark" :key="index" class="slideShow">
            <img :src="item" class="photo">
        </div> -->

        <router-view name="tag"></router-view>
        <router-view v-bind:queryResultList="queryResultList" name="left"></router-view>
        
    </div>

    <router-view name="right"></router-view>
      

    

  </div>



</template>

<script>

export default {
  name: "home",
  data() {
    return {
      imgUrl:require("./assets/logo.png"),
      // photoUrl:require("./assets/photo/img005.jpg")
      mark: 0,
      bannerList: [
            require("./assets/photo/img002.jpg"),
            require("./assets/photo/img003.jpg"),
            require("./assets/photo/img004.jpg"),
            require("./assets/photo/img005.jpg"),
            require("./assets/photo/img006.jpg")
            ],
     
      queryResultList:[],
    };
  },
  methods: {
    searchEnterFun:function(e){
                // 使用 which 和 keyCode 属性来解决兼容问题
                var keyCode = window.event? e.keyCode:e.which;
                var val = e.target.value;
                console.log('回车搜索',keyCode,e);
                if(keyCode == 13 && val){
                    this.queryclick()
                    }
    },
    homeclick() {
      this.$router.push("/");
      this.$router.go(0);
    },
    articleclick() {
      this.$router.push("/article");
    },
    queryclick() {
        // console.log('[[[[[')
        // console.log('开始发送post请求')
        // this.query_key = this.$refs.query_info.value
        console.log(this.query_key)
        // console.log(this.$refs.query_info.value)
        // console.log(this.$refs.query_info.value)
        // this.$refs.tag.style = 'display:none'
        this.$request({
          url:'/api/articles/',
          method: 'get',
          params:{
              "query_keyword": this.$refs.query_info.value
          }
          
        }).then(res => {
          console.log(this.$refs.query_info.value)
          // this.essayList = res.data.info;
          this.$set(this,'queryResultList',res.data.info)
          console.log(this.queryResultList);
          // console.log('======//////')
          console.log(this.queryResultList[0].title);
          return this.queryResultList
        }).catch(err=>{
          this.queryResultList = err;
        })
    },
    
    queryenter() {
        // this.active = 'background-color:black';
        var search = this.$refs.search;
        console.log(search.value)
        search.style.color = "green";
    },
    queryleave() {
        this.active = "";
        this.$refs.search.style=""
    },
    // show_all_sign(index) {
    //     console.log('鼠标移入')
    //     var sign = this.$refs[`sign${index}`][0];
        
    //     sign.style = 'text-overflow:';
    //     sign.style = 'white-space:';
    //     sign.style.overflow = '';
    // },
    // show_part_sign(index) {
    //     var sign = this.$refs[`sign${index}`][0];
    //     sign.style.overflow = 'hidden';
    //     sign.style = 'text-overflow:ellipsis';
    //     sign.style = 'white-space:nowrap';

    // },
    flush_commend() {
      this.$router.go(0)
    }

    // hide_cancel() {
    //   this.$parent.$refs.tag.style = 'display:none';
    //   this.$parent.$refs.right_Body.style = 'display:none';
    // },
    
    // autoPlay () {  
    //   this.mark++;  
    //   if (this.mark === 3) { //当遍历到最后一张图片置零  
    //     this.mark = 0  
    //   }  
    // },  
    // play () {  
    //   setInterval(this.autoPlay, 50000)  
    // },  
    // change (i) {  
    //   this.mark = i  
    //   }  
    },  

}
</script>

<style>
.active {
  color:rgb(0, 38, 255);
}


#top {
  width: 100%;
  background-color: rgb(150, 148, 148);
  height: 6.4220%;
  /* margin: 0 0 0 0; */
  float:left;
  /* position: fixed; */
  /* background-color: rgb(58, 183, 241); */
  margin-top: -1%;
}

.logo {
  float: left;
  width:13.1424%;
  margin-top: 0.55618%;
  /* background-color: lightgreen; */
  margin-left: 9.8189%;
  height: 71.4285%;
  /* padding-top: 0px; */
  font-size: 100%;
}

.logo .img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.home {
    width: 3.9556%;
    height: 57.1428%;
    /* font-size: 50%; */
    float: left;
    text-align: center;
    margin-left: 1.8229%;
    margin-top: 0.8309%;
    /* background-color: rgb(73, 99, 99); */
    line-height: 40px;
    cursor: pointer;
  }

.publish {
    float: left;
    width: 3.9556%;
    height: 57.1428%;
    /* background-color: maroon; */
    /* font-size: 60%; */
    text-align: center;
    margin-top: 0.8309%;
    margin-left: 1.8229%;
    line-height: 40px;
    cursor: pointer;
}

.QA {
    float: left;
    /* background-color: midnightblue; */
    width: 3.9556%;
    height: 57.1428%;
    /* font-size: 60%; */
    text-align: center;
    margin-left: 1.8229%;
    margin-top: 0.8309%;
    line-height: 40px;
    cursor: pointer;
}

.query_box {
    float: left;
    background-color: rgb(255, 255, 255);
    margin-left: 3.0729%;
    width: 26.7708%;
    height: 27.7572px;
    line-height: 32px;
    font-size: 20px;
    border-radius: 25px 25px 25px 25px ;
    border:solid silver 0px;
    margin-top: 1.3922%;
}



.query {
    background-color: rgb(142, 181, 226);
    width: 12.9999%;
    height: 100%;
    border-radius: 0 25px 25px 0;
    float: right;
} 

.icon-search {
    text-align: center;
    line-height: 32px;
    margin-top: 9%;
    cursor: pointer;
}

.query_input {
    background-color: rgb(255,255,255);
    width: 82.9999%;
    height: 100%;
    line-height: 32px;
    font-size: 16px;
    border-radius: 25px 0 0 25px ;
    border: 0;
    padding: 0 0 0 4%;
    float: left;
    outline:none;
}
/* .r {
  height: 100%;
  width: 200px;
  background-color: orchid;
} */

.message {
  /* background-color: dimgrey; */
  text-align: center;
  width: 4.009%;
  height: 57.14286%;
  float: left;
  margin-left: 3.0729%;
  margin-top: 0.8309%;
  line-height: 40px;
  cursor: pointer;
}

.personal {
    /* background-color: dimgrey; */
    text-align: center;
    width: 4.009%;
    height: 57.14286%;
    float: left;
    margin-left: 1.8229%;
    margin-top: 0.8309%;
    line-height: 40px;
    cursor: pointer;
}

.login {
  /* background-color: dimgrey; */
    text-align: center;
    width: 2.6562%;
    height: 57.14286%;
    float: left;
    margin-left: 1.8229%;
    margin-top: 0.8309%;
    line-height: 40px;
    cursor: pointer;
}

.register {
    /* background-color: dimgrey; */
    text-align: center;
    width: 2.6562%;
    height: 57.14286%;
    float: left;
    margin-top: 0.8309%;
    line-height: 40px;
    cursor: pointer;
}

#left_Body {
    float: left;
    width: 10%;
    height: 100%;
    background-color: rgb(174, 182, 174);
}

#mid_Body {
  /* background-color: rgb(145, 185, 195); */
  width: 64%; 
  /* height: 250px; */
  float: left;
  margin-left: 10%;
}

#mid_Body .slideShow {
  /* background-color: indigo; */
  width: 100%;
  float: left;
  height: 165.137614px;
}

#mid_Body .slideShow .photo {
    width: 100%;
    height: 100%;
}



/* #mid_Body_content {
  float: left;
  width: 100%;
  height: 100%;
  background-color: mediumvioletred;
}  */






</style>

