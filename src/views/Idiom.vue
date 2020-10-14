<template>
    <div style="padding-top: 150px">
        <h1 style="text-align: center; padding-bottom: 10px">成语资料库</h1>
        <div style="line-height: 45px; width: 620px; padding-left: calc((100% - 620px)/2)">
            <input v-model="param" placeholder="请输入成语"/>
            <button style="margin-left: 20px" @click="queryIdiom">查询</button>
        </div>
        <div style="width: 800px; padding-left: calc((100% - 800px)/2); padding-top: 40px">
            <div>
                <div class="idiom-param">
                    <strong>汉语全拼</strong>
                </div>
                <div class="idiom-param-explain">
                    <span>ngyujs":" 除草时要连根除掉，使草不能再长。比喻除去祸根，以免后患。",
                        "from_":" 《左传·隐公六年》：“为国家者，见恶如农夫之务去草焉，芟夷蕰崇之，绝其本根，勿使能殖，则善者信矣。”北齐·魏收《为侯景叛移梁朝文》：“若抽薪止沸，剪草除根。”",
                        "example":" ～，萌芽不发；斩草若不除根，春至萌芽再发。 明·冯梦龙《警世通言》卷三十七",
                        "yufa":" 连动式；作谓语、宾语；指彻底成事",
                        "ciyujs":"[cut the weeds and dig up the roots—destroy root and branch] 比喻铲除祸根,以免留下后患",
                        "yinzhengjs":"比喻彻底去除祸根</span>
                </div>
            </div>
            <div>
                <div class="idiom-param">
                    <strong>释义寓意</strong>
                </div>
                <div class="idiom-param-explain">
                    <span >ngyujs":" 除草时要连根除掉，使草不能再长。比喻除去祸根，以免后患。",
                        "from_":" 《左传·隐公六年》：“为国家者，见恶如农夫之务去草焉，芟夷蕰崇之，绝其本根，勿使能殖，则善者信矣。”北齐·魏收《为侯景叛移梁朝文》：“若抽薪止沸，剪草除根。”",
                        "example":" ～，萌芽不发；斩草若不除根，春至萌芽再发。 明·冯梦龙《警世通言》卷三十七",
                        "yufa":" 连动式；作谓语、宾语；指彻底成事",
                        "ciyujs":"[cut the weeds and dig up the roots—destroy root and branch] 比喻铲除祸根,以免留下后患",
                        "yinzhengjs":"比喻彻底去除祸根</span>
                </div>
            </div>
            <div>
                <div class="idiom-param">
                    <strong>来源出处</strong>
                </div>
                <div class="idiom-param-explain">
                <span style="margin-left: 10px">ngyujs":" 除草时要连根除掉，使草不能再长。比喻除去祸根，以免后患。",
                        "from_":" 《左传·隐公六年》：“为国家者，见恶如农夫之务去草焉，芟夷蕰崇之，绝其本根，勿使能殖，则善者信矣。”北齐·魏收《为侯景叛移梁朝文》：“若抽薪止沸，剪草除根。”",
                        "example":" ～，萌芽不发；斩草若不除根，春至萌芽再发。 明·冯梦龙《警世通言》卷三十七",
                        "yufa":" 连动式；作谓语、宾语；指彻底成事",
                        "ciyujs":"[cut the weeds and dig up the roots—destroy root and branch] 比喻铲除祸根,以免留下后患",
                        "yinzhengjs":"比喻彻底去除祸根</span>
                </div>
            </div>
            <div>
                <div class="idiom-param">
                    <strong>同义成语</strong>
                </div>
                <div class="idiom-param-explain">
                    <span style="margin-left: 10px">ngyujs":" 除草时要连根除掉，使草不能再长。比喻除去祸根，以免后患。",
                            "from_":" 《左传·隐公六年》：“为国家者，见恶如农夫之务去草焉，芟夷蕰崇之，绝其本根，勿使能殖，则善者信矣。”北齐·魏收《为侯景叛移梁朝文》：“若抽薪止沸，剪草除根。”",
                            "example":" ～，萌芽不发；斩草若不除根，春至萌芽再发。 明·冯梦龙《警世通言》卷三十七",
                            "yufa":" 连动式；作谓语、宾语；指彻底成事",
                            "ciyujs":"[cut the weeds and dig up the roots—destroy root and branch] 比喻铲除祸根,以免留下后患",
                            "yinzhengjs":"比喻彻底去除祸根</span>
                </div>
                <div style=""></div>
            </div>
            <div>
                <div class="idiom-param">
                    <strong>反义成语</strong>
                </div>
                <div class="idiom-param-explain">
                <span style="margin-left: 10px">ngyujs":" 除草时要连根除掉，使草不能再长。比喻除去祸根，以免后患。",
                        "from_":" 《左传·隐公六年》：“为国家者，见恶如农夫之务去草焉，芟夷蕰崇之，绝其本根，勿使能殖，则善者信矣。”北齐·魏收《为侯景叛移梁朝文》：“若抽薪止沸，剪草除根。”",
                        "example":" ～，萌芽不发；斩草若不除根，春至萌芽再发。 明·冯梦龙《警世通言》卷三十七",
                        "yufa":" 连动式；作谓语、宾语；指彻底成事",
                        "ciyujs":"[cut the weeds and dig up the roots—destroy root and branch] 比喻铲除祸根,以免留下后患",
                        "yinzhengjs":"比喻彻底去除祸根</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Idiom",
        data() {
            return {
                param: '',
                value: []
            }
        },
        methods: {
            // 查询成语
            queryIdiom() {
                this.Axios.get("/demo2/restTemplate/restTemplateGetList")
                .then( response => {
                    console.log("成语查询结果", response)
                })
                .catch( error => {
                    console.error("成语查询失败", error)
                })
            }
        }
    }
</script>

<style scoped>
    input {
        outline: none;                          /** 去除选中时边框样式 */
        caret-color: red;                       /** 修改光标颜色 */
        border: 1px solid #C3C3C3;              /** 修改表框颜色及粗细 */
        padding: 7px 12px;
        height: 25px;
        border-radius: 5px;
        width: 500px;
    }
    input:focus {
        border-color: #95c6f8;
    }

    button {
        border: 1px solid #409eff;
        background: #409eff;
        color: #ffffff;
        cursor: pointer;
        font-size: 14px;
        border-radius: 4px;
        padding: 9px 20px;
    }
    button:hover {
        background: #62b0ff;
        border-color: #62b0ff;
    }

    .idiom-param {
        width: 100px;
        float: left
    }
    .idiom-param-explain {
        width: 650px;
        float: left
    }
</style>