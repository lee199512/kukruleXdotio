<template>
<div class="app">
    <TopHeader v-bind:propsdata="title" v-bind:icondata="icon" v-on:backPage="backMove"></TopHeader>
    <div class="text-align">
        <div class="border margin">제목</div>
        <div class="border margin">본문</div>
        <div >사진</div>
        <div >
            <div class="border marginItem">항목1</div>
            <div class="border marginItem">항목2</div>
        </div>
    </div>
    
    <Option></Option>
</div>
</template>

<script>
import TopHeader from '../components/TopHeader.vue';
import Option from '../components/Option.vue';

export default {
    data:function(){
        return{
            title:'국룰 편집하기',
            icon:'저장' 
        }
    },
    components: {
        TopHeader,
        Option
    },
    methods:{
        backLink: function(){
            this.$router.go(-1);
        },
        backMove: function(){
            setTimeout(this.backLink, 500);
        },
        scrollTop: function(){
            window.scrollTo(0,0);
        }
    },
    beforeMount(){
        this.scrollTop();
    }
}
</script>

<style>
    .text-align {
        text-align: center;
    }
    .border {
        
		padding:20px;
		background:rgb(211, 211, 211);
    }
    .margin {
        margin: 10px 3%;
    }
    .marginItem{
        margin: 10px 10%;
    }
</style>