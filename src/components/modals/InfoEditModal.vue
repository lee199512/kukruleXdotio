<template>
    <div class="modal-card shadow ">
        <button class="popBtn cursorPoint nanumsquare borderNone" v-on:click="infoEditMove">내 정보 수정</button>
    <!-- <button class="popBtn cursorPoint nanumsquare borderNone" v-on:click="pwEditMove">비밀번호 변경</button>
    <button class="popBtn cursorPoint nanumsquare borderNone" v-on:click="deleteaccount">회원 탈퇴</button>
    <button class="popBtn cursorPoint nanumsquare borderNone" >고객센터</button> -->
    </div>
</template>

<script>
export default {
    methods:{
        infoEditMove:function(){
            this.$router.push({path:'/infoedit'});
        }
        // pwEditMove:function(){
        // this.$router.push({path:'/pwedit'});
        // },
        // deleteAccountMove:function(){
        // this.$router.push({path:'/deleteaccount'});
        // }
    }
}
</script>

<style scoped>
.modal-card {
    position: absolute;
    right:2px;
    top:2px;
    /* margin:0;
    position: relative;
    right: 0px;
    top:0px; */
    background-color: black;
    width: 120px;
    float:right;
    height: 150px;
    /* z-index: 10;  */
    opacity: 0.8; 
}
.popBtn{
    width: 100%;
    height: 25%;
    margin:0;
    color:white;
    font-size:15px;
    background: none;
    border:none;
    text-align: left;
    padding-left:10px;
}
</style>
--!>