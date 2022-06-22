<template>
    <div id="publish">
        <div class="publish_tag">
            <h3 class="write_article">写文章</h3>
            <h3 class="publish_article" @click="publish_article_click" @mouseenter="publish_enter" @mouseleave="publish_leave" :style="active" ref="publish">发表</h3>
        </div>
        <div class="upload_image">
            <img v-if = 'imageUrl' :src="imageUrl" class="uploaded_image">

            <el-upload 
                :action="uploadActionUrl" 
                @mouseenter="upload_image_click_enter" 
                @mouseleave="upload_image_click_leave" 
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :file-list="filelist"   
                :show-file-list="false"
                class="publish_icon_camera02" 
                ref="publish_icon_camera"
                v-if = 'imageUrl'
                >
                <el-button class="icon-camera"  size="small"  type="primary" ref="iconCamera"></el-button>
            </el-upload>

            <el-upload 
                :action="uploadActionUrl" 
                @mouseenter="upload_image_click_enter" 
                @mouseleave="upload_image_click_leave" 
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :file-list="filelist"   
                :show-file-list="false"
                class="publish_icon_camera" 
                ref="publish_icon_camera"
                v-else
                >
                <el-button class="icon-camera"  size="small"  type="primary" ref="iconCamera"></el-button>
            </el-upload>


            <cropper
                v-if="showCropper"
                :dialog-visible="showCropper"
                :cropper-img="cropperImg"
                @update-cropper="updateCropper"
                @colse-dialog="closeDialog"
                @upload-img="uploadImg" />
        </div>

        <div class="publish_title">
            
            <input type="text" class="input_title" placeholder="请输入标题" ref="input_title">
            <!-- <hr class="line"> -->
        </div>

        <div class="publish_content">   
            <div id="demo1"></div>
            <!-- <button type="button" class="btn" @click="getEditorData">获取当前内容</button> -->
            <!-- <h3>内容预览</h3> -->
            <!-- <textarea name="" id="" cols="170" rows="20" readonly v-model="editorData" class="pre_content"></textarea> -->
        </div>
    </div>
</template>

<script>
// 引入 wangEditor
import wangEditor from 'wangeditor'
export default {
    name:"publish",
    data() {
        return {
            // editor: null,
            result:'',
            editorData: '',
            uploadActionUrl: "/api/upload/article",
            filelist: [],
            imageUrl:'',
            post_data:'',
            cropperImg: '', // 需要裁剪的图片
            showCropper: false, // 是否显示裁剪框
            uploadFile: '', // 裁剪后的文件
        }
    },
    mounted() {
        const editor = new wangEditor(`#demo1`)
        // 配置 onchange 回调函数，将数据同步到 vue 中
        editor.config.onchange = (newHtml) => {
        this.editorData = newHtml
        }
        // 创建编辑器
        editor.create()
        this.editor = editor
    },
    methods: {
        // getEditorData() {
        // // 通过代码获取编辑器内容
        // let data = this.editor.txt.html()
        // alert(data)
        // },
        publish_enter() {
            var publish = this.$refs.publish
            publish.style.color = 'grey'
        },
        publish_leave() {
            this.active = "";
            this.$refs.publish.style=""
        },

        upload_image_click() {
            console.log('点击了上传图片按钮')
        },
        upload_image_click_enter() {
            var upload_image = this.$refs.iconCamera
            upload_image.style.color = 'grey'
        },
        upload_image_click_leave() {
            this.active = "";
            this.$refs.iconCamera.style=""
        },
        
        handleAvatarSuccess(res, file) {
            // 生成blogURL
            // console.log(file.raw)
            // this.imageUrl = URL.createObjectURL(file.raw);
            this.imageName = file.name
            this.dataList = file
            console.log(res)
            // 获取后端图片保存之后返回的 图片URL信息
            this.imageUrl = res.info
        },

        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            // console.log('+++++')
            // console.log(file.raw)
            // var reader = new FileReader();
            // reader.readAsDataURL(file);
            // reader.onload = function(){
            //     console.log('获取图片')
            //     this.imageData = this.result
            //     console.log(this.imageData)
            // }
            return isJPG && isLt2M;
        },
        publish_article_click() {
            var data = new Date();
            var month =data.getMonth() < 9 ? "0" + (data.getMonth() + 1) : data.getMonth() + 1;
            var date = data.getDate() <= 9 ? "0" + data.getDate() : data.getDate();
            this.value = data.getFullYear() + "-" + month + "-" + date;
            let post_data = {
                    "_image": this.imageUrl,
                    "title": this.$refs.input_title.value,
                    "content":this.editorData,
                    "categories":"",
                    "public":1,
                    "create_time":this.value,
                    "update_time":this.value
                }
            console.log(post_data)
            this.$request({
                url:"/api/users/6060366bc4435980de3010b8/articles" ,
                method:'post',
                data: post_data,
                header :{
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(this.data)
                console.log('发表文章结束')
                console.log(res)
                if (res.data.retCode == "000") {
                    alert(res.data.retMsg);
                    this.$router.push({
                        path:'./'
                    })
                }else{
                    alert(res.data.retMsg);
                }
            }).catch(err => {
                this.$message.error(err)
            })
        },
        submit() {
            console.log('---进入submit方法')
        
            const formData = new FormData();
            var that = this;
            // 首先判断是否上传了图片，如果上传了图片，将图片存入到formData中
            console.log(this.dataList);
            if (this.dataList) {
                formData.append('file',that.dataList);
            }
                console.log(formData.get('file'));
                this.$request({
                    url:"/api/upload/article", //请求后端的url
                    method: 'post',
                    data:formData,
                    headers: {
                        "Content-Type": "multipart/form-data", //设置headers
                    }
                })
                .then((res) => {
                    console.log(res)
                    console.log('====')
                    if (res.data.retCode == '200') {
                    //上传成功
                    console.log("上传成功");
                    alert(res.data.retMsg)
                    this.$router.push({
                        path:'./'
                    })
                    } else {
                    alert('上传失败')
                    }
                })
                .catch((error) => {
                    console.log("请求失败");
                    console.log(error)
                });
            //用户可以在上传完成之后将数组给清空，这里直接跳转到首页了，没有做清空的操作
        },

    beforeDestroy() {
        // 调用销毁 API 对当前编辑器实例进行销毁
        this.editor.destroy()
        this.editor = null
    },
    }    
}
</script>

<style>

.w-e-text-container{
    height: 600px !important;/*!important是重点，因为原div是行内样式设置的高度300px*/
    margin-bottom: 200px !important;
}

#publish {
    width: 125%;
    height: 100px;
}

.publish_tag {
    width: 100%;
    height: 62px;
    /* margin-top: 1%; */
    /* background-color: olivedrab; */
    /* line-height: 25px; */
}

#publish .write_article {
    display: inline;
    float: left;
    /* font-weight: bold;
    font-size: 10%;
    line-height: 40px; */
}

#publish .publish_article {
    display: inline;
    float: right;
    /* font-weight: bold;
    font-size: 10%;
    line-height: 40px; */
}

.uploaded_image {
    width: 100%;
    height: 100%;
    /* background-color: rgb(187, 203, 250); */
    /* position:absolute; */
    /* display: none; */
    outline: none;
    
}

.el-upload__input {
    display: none;
    outline: none;
}

.el-upload-list__item-name {
    display: none;
    outline: none;
}

.el-icon-close-tip {
    display: none;
    outline: none;
}


.upload_image {
    width: 100%;
    height: 400px;
    margin-top: 0%;
    margin-left: 0%;
    border: 1px;
    background-color: grey;
    margin-bottom: 20px;
    /* position: absolute; */
}

.publish_icon_camera {
    width: 40px;
    height: 34px;
    /* background-color: rgb(234, 192, 245); */
    float: left;
    margin-left: 43%;
    margin-top: 19% ;
    outline: none;
}

.publish_icon_camera02 {
    width: 40px;
    height: 34px;
    /* background-color: rgb(234, 192, 245); */
    float: left;
    margin-left: 74.5%;
    margin-top: -4% ;
    outline: none;
    position: absolute;
}

.icon-camera {
    float:left;
    font-size: 40px;
    /* margin-left: 43%; */
    margin-top: 0%;
    /* z-index: 99999999; */
    outline: none;
}



/* .btn {
    width: 10%;
    height: 10%;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 5px 10px;
    cursor: pointer;
} */

.publish_title {
    width: 100%;
}

.h3 {
    margin: 30px 0 15px;
    /* float: left; */
}

.input_title {
    float: left;
    width: 99.25%;
    margin-bottom: 1%;
    height: 30px;
}

.publish_content{
    width: 100%;
    height: auto;
}

#demo1 {
    width: 100%;
    /* margin-top: 1%; */
    /* height: 500px; */
    /* background-color: olivedrab; */
}

.pre_content {
    width: 100%;
    /* height: 100%; */
}

</style>