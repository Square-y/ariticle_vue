<template>
  
  <div>
    <div id="top">
      <div class="logo">
          <img :src="imgUrl"  class="img">
      </div>
      <div class="home" @click='homeclick'>
            首页
        </div>
      <div class="publish">
            发文
        </div>
      <div class="QA">
            问答
        </div>
      <div class="query_box">
          <input  class="query_input" type='text' placeholder="请输入搜索内容" ref='query_info'>
          <div @click="queryclick(index)" @mouseenter="queryenter" @mouseleave="queryleave" :style="active" class="query" type='button' ref="search">
                <div  class="icon-search" type='button'></div>
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

        <div class="tag">
            <div class="commend">推荐</div>
            <div class="hot">热点</div>
            <div class="focus">关注</div>
        </div>
        
        /* */
    </div>
    <div id="right_Body">
      <div class="right_Body_top">
        <div class="hotuser">
          热  门
        </div>
        <div class="more">
          更  多
        </div>
        <div v-for="item in hotuserlist" :key="item" class="right_Body_userlist">
            <div class="user_img">
              <img :src="item.userImage" alt="" class="userImage">
            </div>
            <div class="username">
                {{item.username}}
            </div>
            <div class="sign">
                {{item.sign}}
            </div>
        </div>
      </div>
    </div>

    

  </div>



</template>

<script>

export default {
  name: "home",
  data() {
    return {
      imgUrl:require("../assets/logo.png"),
      // photoUrl:require("./assets/photo/img005.jpg")
      mark: 0,
      bool: false,
      bannerList: [
            require("../assets/photo/img002.jpg"),
            require("../assets/photo/img003.jpg"),
            require("../assets/photo/img004.jpg"),
            require("../assets/photo/img005.jpg"),
            require("../assets/photo/img006.jpg")
            ],
      hotuserlist:[
        {
          username: "cicade",
          // userImage: require("./assets/photo/img003.jpg"),
          sign: "一株是枣树，还有一株也是枣树"
        }
      ],
      article_list:'',
    };
  },
  methods: {
    homeclick() {
      this.$router.push("/home");
    },
    articleclick() {
      this.$router.push("/article");
    },
    queryclick() {
        console.log('开始发送post请求')
        // console.log(this.$refs.query_info.value)
        // console.log(this.$refs.query_info.value)
        this.$request({
          url:'/api/articles/',
          method: 'get',
          params:{
              "query_keyword": this.$refs.query_info.value
          }
        }).then(res => {
          // this.essayList = res.data.info;
          this.$set(this,'essayList',res.data.info)
          console.log(this.essayList);
          console.log('======')
          console.log(this.essayList[0].title);
          return this.essayList
        }).then(err=>{
          this.essayList = err;
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
    
    autoPlay () {  
      this.mark++;  
      if (this.mark === 3) { //当遍历到最后一张图片置零  
        this.mark = 0  
      }  
    },  
    play () {  
      setInterval(this.autoPlay, 50000)  
    },  
    change (i) {  
      this.mark = i  
        }  
    },  
    
}
</script>

<style>
.active {
  color: #f00;
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
    background-color: seagreen;
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
    margin-top: 13.822893%;
    cursor: pointer;
}

.query_input {
    background-color: rgb(60, 46, 139);
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
    width: 18.75%;
    height: 100%;
    background-color: rgb(174, 182, 174);
}

#mid_Body {
  background-color: rgb(183, 210, 238);
  width: 46.25%; 
  /* height: 250px; */
  float: left;
  margin-left: 18.75%;
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

#mid_Body .tag {
    width: 100%;
    height: 39.6330275px;
    background-color: lightskyblue;
    float: left;
}

#mid_Body .tag .commend {
    width: 5.6306%;
    height:66.6667%;
    /* background-color: limegreen; */
    margin-left: 5.6306%;
    margin-top: 1.054514%;
    float: left;
    text-align: center;
    line-height: 26.417px;
    cursor: pointer;
}

#mid_Body .tag .hot {
    width: 5.6306%;
    height:66.6667%;
    /* background-color: limegreen; */
    margin-left: 3.9414%;
    margin-top: 1.054514%;
    float: left;
    text-align: center;
    line-height: 26.417px;
    cursor: pointer;
}

#mid_Body .tag .focus {
    width: 5.6306%;
    height:66.6667%;
    /* background-color: limegreen; */
    margin-left: 3.9414%;
    margin-top: 1.054514%;
    float: left;
    text-align: center;
    line-height: 26.417px;
    cursor: pointer;

}

/* #mid_Body_content {
  float: left;
  width: 100%;
  height: 100%;
  background-color: mediumvioletred;
}  */




#right_Body {
    float: left;
    width: 15.625%;
    background-color: grey;
    margin-right: 0.7911%;
}

.right_Body_top {
  width: 100%;
  height: 27.7431px;
  
}

.hotuser {
  width: 14.6667%;
  height: 59.5238%;
  float: left;
  margin-left: 8%;
  margin-top: 5.6146px;
  font-size: 12px;
}

.more {
  width: 14.6667%;
  height: 47.6190%;
  float: right;
  margin-right: 8%;
  margin-top: 5.6146px;
  font-size: 12px;
}

#right_Body_userlist {
  width:100%;
  height: 52.8440%;
  margin-top: 3.3027px;
  background-color: rgb(100, 200, 247);
  float: left;
}

#user_img {
  width: 16.6667%;
  height: 33.0275px;
  background-color: yellowgreen;
}

#userImage {
  width: 100%;
  height: 100%;
}

</style>

