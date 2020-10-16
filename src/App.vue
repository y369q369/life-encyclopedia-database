<template>
    <div>
        <Idiom></Idiom>
        <Jape></Jape>
    </div>
</template>

<script>

import Idiom from "./views/Idiom";
import Jape from "./views/Jape";

export default {
    name: 'App',
    components: {
        Idiom,
        Jape
    }
}
</script>

<style>
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
</style>
