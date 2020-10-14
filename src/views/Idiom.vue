<template>
    <div style="padding-top: 150px">
        <h1 class="headline">成语资料库</h1>
        <div class="search_condition">
            <input v-model="param" placeholder="请输入成语"/>
            <button style="margin-left: 20px" @click="queryIdiom">查询</button>
        </div>
        <div class="search_result" v-show="Object.keys(value).length > 0">
            <div class="idiom-box" v-for="property in properties" :key="property.column">
                <div class="idiom-param">
                    <strong>{{property.title}}</strong>
                </div>
                <div class="idiom-param-explain">
                    <span>{{value[property.column]}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // 引入Axios
    import Axios from "axios";
    // 引入聚合数据的成语api所需的key
    import key from '../config/juhe-key'

    export default {
        name: "Idiom",
        data() {
            return {
                properties: [{
                    title: '汉语全拼',
                    column: 'pinyin'
                }, {
                    title: '释义寓意',
                    column: 'chengyujs'
                }, {
                    title: '出处',
                    column: 'from_'
                }, {
                    title: '同义成语',
                    column: 'tongyi'
                }, {
                    title: '反义成语',
                    column: 'fanyi'
                }],
                param: '',
                value: {}
            }
        },
        methods: {
            // 查询成语
            queryIdiom() {
                Axios.get(`/chengyu/query?key=${key.chengyu}&word=${this.param}`)
                .then( response => {
                    if (response.data.error_code === 0) {
                        this.value = response.data.result
                    } else {
                        console.error("成语查询失败", response.data)
                        alert("查询成语出错： 错误信息: " + response.data.reason)
                    }
                })
                .catch( error => {
                    console.error("成语查询失败", error.response)
                    alert("查询成语出错： 错误信息: " + error.response.data)
                })
            }
        }
    }
</script>

<style scoped>
    .headline {
        text-align: center;
        padding-bottom: 10px
    }
    .search_condition {
        line-height: 45px;
        width: 620px;
        padding-left: calc((100% - 620px)/2)
    }
    .search_result {
        width: 800px;
        padding-left: calc((100% - 800px)/2);
        padding-top: 40px
    }

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

    .idiom-box {
        clear: both;
        height: 25px
    }
    .idiom-param {
        width: 100px;
        float: left
    }
    .idiom-param-explain {
        width: 700px;
        float: left
    }
</style>