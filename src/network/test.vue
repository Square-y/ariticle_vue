{
          title: "雪国",
          _image: require("./assets/photo/img004.jpg"),
          highlight:"穿过县界长长的隧道，便是雪国。夜空下一片白茫茫。火车在信号所前停了下来。"
        },
        {
          title: "秋夜",
          _image: require("./assets/photo/img003.jpg"),
          highlight:"在我的后园，可以看见墙外有两株树，一株是枣树，还有一株也是枣树。这上面的夜的天空，奇怪而高，我生平没有见过这样奇怪而高的天空。"

        },
        {
          title: "围城",
          _image: require("./assets/photo/img003.jpg"),
          highlight:"里面的人想出来，外面的人想进去"

        }



         onChange(e) {
                // 监测input传入file文件
                let files = e.target.files
                let file = e.target.files[0]
                if (files.length > 1) {
                console.log('最多只能上传一张图片，请重新选择')
                return false

                }
                if (['image/jpg','image/jpeg','image/png','image/gif'].indexOf(file.type)<0) {
                    console.log('请上传图片')
                    return false
                }
                if (file.size > 10*1024*1024) {
                    console.log('请上传不超过10M的图片')
                    return false
                }
                let url = ImageUtil.getObjectURL(file) 
                this.filename = file.name
                this.destroyInput = true
                setTimeout (
                    () => {
                        this.destroyInput = false
                    },20
                )
                
                const image = {}
                image.getObjectURL = function(file) {
                    //获取图片
                    let URL =window.URL ||  window.webketURL || window.mozURL
                    let url = URL.createObjectURL(file)
                    return url
                }

                let t = this
                Exif.getData(file, function(){
                    let Orientation = Exif.getTag(file, 'Orientation')
                    t.Orientation =  Orientation
                    let url = ImageUtil.getObjectURL(file)
                    t.showCrop = true
                    t.$refs.cropWrapper.initCrop(url, this.Orientation)
                })
