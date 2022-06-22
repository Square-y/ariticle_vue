<template>
    <div id="message">
        <!-- 遮罩层 也是整个组件的容器-->
        <div class="pop-container" v-if="isShow">
            <div class="message-container">
            <!-- 两个icon放在一个容器中，但是只显示一个 -->
            <!-- <div class="icon-container">
                <div class="icon-container-success" v-if="type === 'success'"> -->
                <!-- 引用了iview的Icon组件 -->
                <!-- <Icon class="icon-checkmark" type="md-checkmark" size="30" color="#D8DCE9" />
                </div>
                <div class="icon-container-error" v-if="type === 'error'">
                <Icon class="icon-close" type="md-close" size="30" color="#D8DCE9" />
                </div> -->
            <!-- </div> -->
            <span class="message-text">{{ text }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "message",
    props: {
    type: {               // type控制是成功还是失败
      type: String,
      default: 'success',
    },
    text: {              // 弹窗的文字信息
      type: String,
      default: '',
    },
    isShow: {             // 整个遮罩和弹窗是否显示
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style>
.pop-container {
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(24, 30, 53, 0.7);
  backdrop-filter: blur(10px);
}
.message-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 384px;
  padding: 0 30px;
  height: 170px;
  background: #303e62;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}
/* .icon-container {
  position: relative;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  &-error {
    background-color: #fe1b1b;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    .icon-close {
      position: absolute;
      right: 5px;
      bottom: 5px;
      font-weight: 900;
    }
  }
  &-success {
    background-color: #4ad991;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    .icon-checkmark {
      position: absolute;
      right: 4px;
      bottom: 5px;
      font-weight: 900;
    }
  }
} */
.message-text {
  margin-left: 12px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
}
</style>