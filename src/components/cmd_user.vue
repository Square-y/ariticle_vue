<template>
    <div id="cmd_user">
        <div id="right_Body">
        <div class="right_Body_top">
          <div class="hotuser">
            热  门
          </div>
          <div class="more">
            更  多
          </div>
        </div>
        <div v-for="item in hotuserlist" :key="item" class="right_Body_userlist">
            <div class="user_img">
              <img :src="item.avatar" alt="" class="userImage">
            </div>
            <div class="username">
                {{item.username}}
            </div>
            
            <el-tooltip :content="item.sign" show-after=5 placement="bottom" effect="dark" popper-class="atooltip" >
              <!-- <el-button>Light</el-button> -->
              <div class="sign">
                {{ item.sign }}
              </div>
              <!-- <el-button class="item" style="background-color:#7ac0ae"></el-button> -->
            </el-tooltip>
          </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'cmd_user',
    data() {
        return {
            hotuserlist:[
                    {
                    username: "cicade",
                    avatar: require("../assets/photo/img013.png"),
                    sign: "一株是枣树，还有一株也是枣树"
                    }
                ],
        };
    },
    methods: {
        },
    created () {  
        // this.play()
        console.log('cmd_user开始发送get请求')  
        this.$request({
            url:'/api/users/commend',
        }).then(res => {
            console.log('|||||||')
            this.hotuserlist = res.data.info;
            console.log(this.hotuserlist);
            return this.hotuserlist
        }).catch(err=>{
            this.hotuserlist = err;
        })
    },
}
</script>

<style>
#right_Body {
    float: right;
    width: 15.7%;
    /* background-color: grey; */
    margin-right: 10%;
    margin-top: 0.4%;
}

.right_Body_top {
  width: 100%;
  height: 27.7431px;
  background-color: rgb(250, 249, 248);
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

.right_Body_userlist {
  width:100%;
  /* height: 52.8440%; */
  margin-top: 3.3027px;
  background-color: rgb(100, 200, 247);
  float: left;
}

.user_img {
  width: 40px;
  height: 40px;
  background-color: rgb(66, 50, 205);
  float: left;
  margin-top:3%;
  margin-left:3%;
  margin-bottom: 3%;
  border-radius: 50%;

}

.userImage {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.username{
    width: 70%;
    height: 5%;
    /* background-color: blueviolet; */
    float: left;
    margin-top: 4%;
    margin-left: 3%;
    font-size: 12px;
}
.sign{
    width: 70%;
    height: 5%;
    /* background-color: rgb(226, 43, 195); */
    float: left;
    margin-top: 2%;
    margin-left:3%;
    font-size:12px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
</style>