<template>
    <div style="padding-top: 150px">
        <h1 class="headline">笑话资料库</h1>
        <div class="search_condition">
            <input type="datetime-local" v-model="time"/>
            <button style="margin-left: 20px" @click="queryJape">查询</button>
        </div>
    </div>
</template>

<script>
    // 导入ajax
    import Ajax from 'ajax'
    // 导入key
    import key from '../config/juhe-key'

    export default {
        name: "Jape",
        data() {
            return {
                time: '2015-09-24T13:59:59',
                sort: '',
            }
        },
        methods: {
            queryJape() {
                let dateTime = Date.parse(this.time).toString();
                let date = dateTime.substring(0, dateTime.length - 3);
                console.log(dateTime, date)

                Ajax.get(`http://v.juhe.cn/joke/content/list.php?key=${key}&page=1&pagesize=20&sort=${this.sort}&time=1418745237`)

            }
        }
    }
</script>

<style scoped>

</style>