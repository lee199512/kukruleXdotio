<template>
    <div class="modal-card shadow ">
    <!-- 잠시 주석 처리 -->
    <!-- <button class="popBtn cursorPoint borderNone">핫!국룰</button>
    <button class="popBtn cursorPoint borderNone">최강 밸런스</button> -->
    <button class="popBtn cursorPoint nanumsquare borderNone" v-if=loginBool v-on:click="signout">로그아웃</button>
    <button class="popBtn cursorPoint nanumsquare borderNone" v-else v-on:click="signin">로그인</button>
    <button class="popBtn cursorPoint nanumsquare borderNone" v-on:click="myinfoMove">내 정보</button>
    <button class="popBtn cursorPoint nanumsquare borderNone">서비스 소개</button>
    </div>
</template>

<script>
export default {
    data:function(){
        return{
            loginBool:false
        }
    },
    methods:{
        myinfoLink: function(){
            //if loginBool이 true이면
            this.$router.push({path:'/myinfo'})
            //else
            //alert('로그인이 필요합니다');
        },
        signin: function(){
            this.$router.push({path:'/login'})
            this.loginBool=!this.loginBool
        },
        signout: function(){
            alert('로그아웃 되었습니다.');
            this.loginBool=!this.loginBool
        },
        myinfoMove: function(){
            setTimeout(this.myinfoLink, 500);
        }
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