<template>
  <div id="cmd">
    <div v-for="(item, index) in essayList"  :key="index" class="mid_Body_list" :ref="`mid_Body_list${index}`">
      <div class="title" @mouseenter="titleenter(index)" @mouseleave="titleleave(index)" :ref="`title${index}`">{{ item.title }} </div>
      
        <div v-if="item._image===''" class="article_tag_no_image" @click="article_tagclick(index)" :ref="`article_tag${index}`" >
        <!-- <div class="essay_image">
          <img :src="item._image" class="_image">
        </div> -->
        <div class="briefly_no_image"  @mouseenter="brieflyenter(index)" @mouseleave="brieflyleave(index)" :style="active" :ref="`briefly${index}`" v-html="item.highlight[0]"></div>
      </div>

      <div v-else class="article_tag" @click="article_tagclick(index)" :ref="`article_tag${index}`" >
        <div class="essay_image">
          <img :src="item._image" class="_image">
        </div>
        <div class="briefly"  @mouseenter="brieflyenter(index)" @mouseleave="brieflyleave(index)" :style="active" :ref="`briefly${index}`" v-html="item.highlight[0]"></div>
      </div>

      <div v-if="item._image==''" class="article_content" style="display:none" :ref="`article_content${index}`">
        <!-- <div class="content_image">
          <img :src="item._image" class="_image">
        </div> -->
        <div class="content_no_image" v-html="item.content"></div>
      </div>

      <div v-else class="article_content_no_image" style="display:none" :ref="`article_content${index}`">
        <div class="content_image">
          <img :src="item._image" class="_image">
        </div>
        <div class="content" v-html="item.content"></div>
      </div>

      <div class="article_info" :ref="`article_info${index}`">
        <div>
          <div class="avatar">
            <img :src="item.avatar" class="avatar_image">
          </div>
          <div class="author" @click="authorclick(item.author)" @mouseenter="authorEnter(index)" @mouseleave="authorLeave(index)" :ref="`author${index}`">{{ item.author }}</div>
        </div>
        <div class="comment_tag" @mouseenter="comment_tagenter(index)" @mouseleave="comment_tagleave(index)" :ref="`comment_tag${index}`">
          <div class='comment_img'>
            <div  class="icon-bubble" type='button'></div>
          </div>
          <div class="comment">评论</div>
        </div>
        <div class="praise_tag" @mouseenter="praise_tagenter(index)" @mouseleave="praise_tagleave(index)" :ref="`praise_tag${index}`">
          <div class="praise_img">
            <div  class="icon-like" type='button'></div>
          </div>
          <div class="praise">点赞</div>
        </div>
        <div class="like_tag" @mouseenter="like_tagenter(index)" @mouseleave="like_tagleave(index)"  :ref="`like_tag${index}`">
          <div class="like_img">
            <div  class="icon-heart" type='button'></div>
          </div>
          <div class="like">喜欢</div>
        </div>
        <div class="favorite_tag" @mouseenter="favorite_tagenter(index)" @mouseleave="favorite_tagleave(index)"  :ref="`favorite_tag${index}`">
          <div class="favorite_img">
            <div  class="icon-star" type='button'></div>
          </div>
          <div class="favorite">收藏</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'commend',

    data() {
      return {
        essayList:[]
      }
    },
      
    methods: {
      article_tagclick(index){
        console.log('-----')
        var article_tag = this.$refs[`article_tag${index}`][0];
        console.log(article_tag);
        article_tag.style = 'display:none';
        console.log(article_tag);
        console.log('====');
        var article_content = this.$refs[`article_content${index}`][0];
        article_content.style.display = "";
        console.log(article_content);
        var mid_Body_list = this.$refs[`mid_Body_list${index}`][0];
        mid_Body_list.style.width = "100%";
        mid_Body_list.style.height = "100%"

        console.log(mid_Body_list)
        var title = this.$refs[`title${index}`][0];
        title.style = "margin-left:4.6306%";
      },
      titleenter(index){
          var title = this.$refs[`title${index}`][0];
          title.style.color = 'darkblue'
      },
      titleleave(index) {
          this.active = "";
          this.$refs[`title${index}`][0].style.color = '';
      },
      brieflyenter (index) {
          console.log('鼠标进入');
          console.log(index);
          var brief = this.$refs[`briefly${index}`][0];
          console.log(brief);
          brief.style = "color:grey";
          console.log(brief);
      },
      brieflyleave (index) {
          this.active = "";
          this.$refs[`briefly${index}`][0].style = "";
      },
      authorclick(author) {
          
          this.$emit("hide_tag", false)
          console.log('跳转到----user_info')
          console.log(this.$router)
          this.$router.push({path:"/user_info",params:{"author":author}})
          
      },
      authorEnter(index) {
          var author = this.$refs[`author${index}`][0];
          author.style.color = 'grey';
      },
      authorLeave(index) {
          var author = this.$refs[`author${index}`][0];
          author.style.color = '';
      },
      comment_tagenter(index) {
          var comment_tag = this.$refs[`comment_tag${index}`][0];
          comment_tag.style.color = "grey";
      },
      comment_tagleave(index) {
          this.active = "";
          this.$refs[`comment_tag${index}`][0].style = "";
      },
      praise_tagenter(index) {
          var praise_tag = this.$refs[`praise_tag${index}`][0];
          praise_tag.style.color = "grey";
      },
      praise_tagleave(index) {
          this.active = "";
          this.$refs[`praise_tag${index}`][0].style = "";
      },
      like_tagenter(index) {
          var like_tag = this.$refs[`like_tag${index}`][0];
          like_tag.style.color = "grey";
      },
      like_tagleave(index) {
          this.active = "";
          this.$refs[`like_tag${index}`][0].style = "";
      },
      favorite_tagenter(index) {
          var favorite_tag = this.$refs[`favorite_tag${index}`][0];
          favorite_tag.style.color = "grey";

      },
      favorite_tagleave(index) {
          this.active = "";
          this.$refs[`favorite_tag${index}`][0].style = "";
      },
    },
    
    created () {  
      // this.play()
      console.log('开始发送get请求')  
      this.$request({
        url:'/api/articles/commend',
      }).then(res => {
        console.log('|||||||--commend')
        this.essayList = res.data.info;
        console.log(this.essayList);
        return this.essayList
      }).catch(err=>{
        this.article_list = err;
      })
    },
}
</script>

<style>
#cmd {
    
}
.mid_Body_list {
    width: 100%;
    height: 149.2844px;
    background-color: rgb(195, 176, 145);
    float: left;
    margin-top: 5px;
    cursor: pointer;
}

.title {
    width: 91.4414%;
    height: 15.4867%;
    /* background-color: rgb(125, 175, 233); */
    float: left;
    margin-left: 5.6306%;
    margin-top: 6.6055px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}

.article_tag_no_image{
    width:100%
}

.article_tag{
    width: 100%;
    /* height: 100px; */
    
}

.briefly_no_image{
    width: 92%;
    height: 45.5752%;
    float: left;
    text-align: left;
    line-height: 23.677px;
    margin-left: 5.8153%;
    margin-top: 6.6055px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.essay_image {
    width: 120px;
    /* max-height: 45.5752%; */
    height: 75px;
    /* background-color: orangered; */
    float: left;
    /* justify-content: center; */
    /* align-items: center; */
    margin-top: 6.6055px;
    margin-left: 5.6306%;
    /* justify-content: center;
    align-items: center; */
    overflow: hidden;
    

}
._image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.briefly {
    width: 73%;
    height: 45.5752%;
    
    /* background-color:  rgb(125, 175, 233); */
    float: left;
    text-align: left;
    line-height: 23.677px;
    margin-left: 2.8153%;
    margin-top: 6.6055px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

.content_image {
    width: 91.4414%;
    height: "";
    margin-left: 4.6306%;
    margin-top: 5%;
}

.content_no_image{
    margin-top:5%;
    width: 91.4414%;
    height: "";
    margin-left: 4.6306%;
}

.content{
    width: 91.4414%;
    height: "";
    margin-left: 5.6306%;
}


.article_info{
    /* background-color: rgb(197, 71, 119); */
    width: 100%;
    /* height: 29.9%; */
    float: left;
    height: 44.625px;
}

.avatar{
    /* background-color: rgb(255, 195, 30); */
    width: 23.115px;
    height: 23.115px;
    float: left;
    margin-left: 5.6306%;
    margin-top: 1%;
}

.avatar_image{
    width: 100%;
    height: 100%;
}

.mid_Body_list .author{
    /* background-color: firebrick; */
    width: 14.7792%;
    height: 20px;
    float: left;
    margin-top: 1.25%;
    margin-left: 2.2%;
    font-size: 12px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    line-height: 20px;
}

.mid_Body_list .comment_img{
    width: 18px;
    height: 20px;
    float: left;
    margin-top: 1.25%;
    margin-left: 36%;
    /* background-color: green; */
}
.icon-bubble{
    /* color: rgb(205, 133, 0); */
    margin-top: 10%;
    margin-left: 7.5%;
}



.mid_Body_list .comment{
    width: 35px;
    height: 20px;
    float: left;
    margin-top: 1.25%;
    margin-left: 0.5%;
    /* background-color: green; */
    text-align: center;
    line-height: 18px;
}

.icon-like{
    /* color: orange; */
    margin-top: 10%;
    margin-left: 7.5%;
}

.icon-heart{
    /* color: orange; */
    margin-top: 10%;
    margin-left: 7.5%;
}

.icon-star{
    /* color: orange; */
    margin-top: 10%;
    margin-left: 7.5%;
}

.mid_Body_list .praise_img{
    width: 18px;
    height: 20px;
    float: left;
    margin-top: 1.25%;
    margin-left: 2.6%;
    /* background-color: green; */
}
.mid_Body_list .praise{
    width: 35px;
    height: 20px;
    float: left;
    margin-top: 1.25%;
    margin-left: 0.5%;
    /* background-color: green; */
    text-align: center;
    line-height: 18px;
}
.mid_Body_list .like_img{
    width: 18px;
    height: 20px;
    float: left;
    margin-top: 1.25%;
    margin-left: 2.6%;
    /* background-color: green; */
}
.mid_Body_list .like{
    width: 35px;
    height: 20px;
    float: left;
    margin-top: 1.25%;
    margin-left: 0.5%;
    /* background-color: green; */
    text-align: center;
    line-height: 18px;
}
.mid_Body_list .favorite_img{
    width: 18px;
    height: 20px;
    float: left;
    margin-top: 1.25%;
    margin-left: 2.6%;
    /* background-color: green; */
}
.mid_Body_list .favorite{
    width: 35px;
    height: 20px;
    float: left;
    margin-top: 1.25%;
    margin-left: 0.5%;
    /* background-color: green; */
    text-align: center;
    line-height: 18px;
}


</style>