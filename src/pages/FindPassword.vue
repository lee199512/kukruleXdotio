<template>
    <div class="app">
        <h2 class="textCenter">비밀번호 찾기</h2>
        <div>
            <div class="box">
                <label>이메일</label>
                <input class="userInput nanumsquare" type="text" placeholder="이메일주소 입력" id="userid">
                <button class="">이메일로 인증번호 보내기</button>
                <br>
                <input class="userInput nanumsquare space" type="text" placeholder="인증번호 입력" id="userid">
                <button >인증번호 확인</button>
                <span class="checkTrue" v-if="emailCheck">일치</span>
                <span class="checkFalse" v-else>불일치</span>
            </div>
            <div class="box">
                <label>비밀번호</label>
                <input class="userInput nanumsquare" type="password" placeholder="비밀번호 입력" id="userpw">
                <span class="checkTrue" v-if="pwCheck">충족</span>
                <span class="checkFalse" v-else>불충족</span>
                <br>
                <input class="userInput nanumsquare space" type="password" placeholder="비밀번호 재확인" id="userpw2">
                <span class="checkTrue" v-if="emailCheck">일치</span>
                <span class="checkFalse" v-else>불일치</span>
                <br>
                <label class="space">*비밀번호는 영문,숫자,특수문자 3가지 모두 포함 및 10자리 이상</label>
            </div>
           
        </div>

        <div class="box textCenter">
            <input class="bottomBtn" type="submit" value="비밀번호 재설정" v-on:click="completeClick" >
            <button class="bottomBtn" v-on:click="cancelClick">취소</button>
        </div>     
    </div>  
</template>



<script>

export default {
    data:function(){
        return{
            emailCheck:false,
            pwCheck:false,
            pwSame:false
        }
    },
    methods:{
        completeClick : function() {			
			alert('비밀번호가 재설정 되었습니다.');
			this.$router.push({path:'/login'});
		},
        cancelClick : function() {			
			alert('비밀번호 재설정을 취소하겠습니까?');
			this.$router.push({path:'/signup'});
		}		
        
    }
}
</script>

<style scoped>
    .box {
        margin-top: 30px;
    }
    .checkTrue {
        color:blue;
    }
    .checkFalse {
        color:red;
    }
    .textCenter{
        text-align: center;
    }
    .space{
        margin-left:45px;
    }
    .bottomBtn{
        margin:0 2%;
    }
</style>
