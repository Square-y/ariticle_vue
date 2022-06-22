<template>
    <div id="user_info">
        <div class="cover">
            <img v-if="cover_url" :src="cover_url" alt="" class="cover_img">
            <el-upload 
                class="button"
                :action="uploadCoverURL" 
                @mouseenter="icon_enter"
                @mouseleave="icon_leave"
                :before-upload="beforeCoverUpload"
                :on-success="handleCoverSuccess"
                :show-file-list="false"
                ref="button">
                <div class="icon" >
                    <div class="icon-camera"></div>
                </div>
                <div class="des">编辑封面图片</div>
            </el-upload>
        </div>

        <div class="user_info_part">
            <div class="avatar">
                <img :src="avatar_url" alt="" class="avatar_img">
            </div>
            <div class="info">
                <div class="name">{{ username }}</div>
                <div class="occupation">{{ occupation }}</div>
            </div>
        </div>

        <div class="user_info_all" style="display:none">
            <div class="avatar">
                <img :src="avatar_url" alt="" class="avatar_img">
            </div>
            <div class="info">
                <div class="name"></div>
                <div class="occupation"></div>
                <div class="interest"></div>
                <div class="honor"></div>
            </div>
        </div>


        <div class="menu">
            <router-link tag="div" class="glance" to="">浏览</router-link>
            <router-link tag="div" class="self_article" to="">文章</router-link>
            <router-link tag="div" class="question" to="">问题</router-link>
            <router-link tag="div" class="answer" to="">回答</router-link>
            <router-link tag="div" class="focus" to="">关注</router-link>
            <router-link tag="div" class="collect" to="">收藏</router-link>
        </div>

        <div class="content">
            <router-view class=""></router-view>
        </div>
        
    </div>

</template>

<script>
// import CropperImage from "@/components/CropperImage";

export default {
    name: "user_info",
    // components: {CropperImage},
    data() {
        return {
            cover_url: '',
            uploadCoverURL:"/api/upload/article",
            avatar_url: require('@/assets/photo/img004.jpg'),
            username: "前面有树",
            occupation: "船舶与海洋工程",
            // mainImage: require('@/assets/photo/img007.png')
        }
    },
    methods: {
        icon_enter() {
            this.$refs.button.style.background = 'rgba(0, 0, 0, 0.1)'
        },
        icon_leave() {
            this.active = '';
            this.$refs.button.style.background = ''
        },
        beforeCoverUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }

            return isJPG && isLt2M;
        },
        handleCoverSuccess(res) {
            this.cover_url = res.info;
            console.log(this.cover_url)

        }
    }
}
</script>

<style>
.cover {
    width: 120%;
    height: 200px;
    margin-top: 1%;
    background-color: grey;
}

.cover_img {
    width: 100%;
    height: 100%;
    float: left;
}

.button {
    width: 9.7%;
    position: absolute;
    float: left;
    background-color: lightblue;
    margin-top: 1%;
    margin-left: 65%;
    border: 1px dashed grey;
    background:rgba(200, 100, 100, 0);
    /* opacity:0; */
}

.cover .icon {
    float: left;
    background:rgba(200, 100, 100, 0);
}

.cover .icon-camera {
    /* width: 100%;
    height: 100%; */
    font-size: 15px;
    margin-top: 18%;
    margin-left: 40%;
}

.cover .des {
    float: left;
    font-size: 15px;
    margin-left: 10%;
    /* opacity:0 */
    background:rgba(200, 100, 100, 0);
}

.user_info_part {
    width: 120%;
    height: 100px;
    margin-top: 1%;
    background-color: grey;
}

.user_info_part .avatar {
    float: left;
    width: 15%;
    height: 80%;
    /* background-color:mediumseagreen; */
    margin-left: 10%;
    margin-top: 1%;
}

.user_info_part .info {
    float: right;
    width: 60%;
    height: 80%;
    /* background-color:rgb(55, 238, 232); */
    margin-right: 10%;
    margin-top: 1%;
}
.user_info_part .avatar_img {
    width: 100%;
    height: 100%;
}

.user_info_part .name {
    width: 100%;
    height: 35px;
    /* background-color: navy; */
    text-align: left;
    line-height: 35px;
}

.user_info_part .occupation {
    width: 100%;
    height: 35px;
    /* background-color: olivedrab; */
    text-align: left;
    line-height: 35px;
    margin-top: 10px;
}

.menu {
    float: left;
    width: 120%;
    height: 20px;
    background-color: grey;
    margin-top: 1%;
    
}

.glance {
    float: left;
    width: 50px;
    height: 20px;
    /* background-color:  rgb(0, 153, 255); */
    text-align: center;
    margin-left: 10%;
}

.self_article {
    float: left;
    width: 50px;
    height: 20px;
    /* background-color:  rgb(0, 153, 255); */
    text-align: center;
    margin-left: 10%;
}

.question {
    float: left;
    width: 50px;
    height: 20px;
    /* background-color:  rgb(0, 153, 255); */
    text-align: center;
    margin-left: 10%;
}

.answer {
    float: left;
    width: 50px;
    height: 20px;
    /* background-color:  rgb(0, 153, 255); */
    text-align: center;
    margin-left: 10%;
}

.focus {
    float: left;
    width: 50px;
    height: 20px;
    /* background-color:  rgb(0, 153, 255); */
    text-align: center;
    margin-left: 10%;
}

.collect {
    float: left;
    width: 50px;
    height: 20px;
    /* background-color: rgb(0, 153, 255); */
    text-align: center;
    margin-left: 10%;
}

#user_info .content {
    width: 120%;
    margin-top: 0%;
    height: 100px;
    /* background-color: khaki; */
    float: left;
    margin-left: 0%;
}





</style>