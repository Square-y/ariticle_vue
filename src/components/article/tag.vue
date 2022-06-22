<template>
    <div id="tag">
        <div class="tag" ref="tag">
            <router-link class="commend" @click.native="flush_commend"  tag="div" to="/commend">推荐</router-link>
            <router-link tag="div" @click.native="flush_commend" class="hot" to="/hot">热点</router-link>
            <div class="focus">关注</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "tag",
    data() {
        return {

        }
    }

}
</script>


<style>
.tag {
    width: 100%;
    height: 39.6330275px;
    background-color:  rgb(195, 176, 145);
    float: left;
}

.tag .commend {
    width: 5.6306%;
    height:66.6667%;
    /* background-color: limegreen; */
    margin-left: 5.6306%;
    margin-top: 1.054514%;
    float: left;
    text-align: center;
    line-height: 26.417px;
    cursor: pointer;
    /* color: grey; */
}

.tag .hot {
    width: 5.6306%;
    height:66.6667%;
    /* background-color: limegreen; */
    margin-left: 3.9414%;
    margin-top: 1.054514%;
    float: left;
    text-align: center;
    line-height: 26.417px;
    cursor: pointer;
    /* color: grey; */
}

.tag .focus {
    width: 5.6306%;
    height:66.6667%;
    /* background-color: limegreen; */
    margin-left: 3.9414%;
    margin-top: 1.054514%;
    float: left;
    text-align: center;
    line-height: 26.417px;
    cursor: pointer;
    /* color: grey; */

}
</style>