<template>
    <div class="app">
        <h2 class="textCenter">이메일 회원가입</h2>
        <div>
            <div class="box">
                <label>이메일</label>
                <input class="userInput nanumsquare" type="text" placeholder="이메일주소 입력" id="userid">
                <span class="checkTrue" v-if="emailCheck">사용가능</span>
                <span class="checkFalse" v-else>사용불가</span>
            </div>
            <div class="box">
                <label>비밀번호</label>
                <input class="userInput nanumsquare" type="password" placeholder="비밀번호 입력" id="userpw">
                <span class="checkTrue" v-if="pwCheck">충족</span>
                <span class="checkFalse" v-else>불충족</span>
                <br>
                <input class="userInput nanumsquare space" type="password" placeholder="비밀번호 재확인" id="userpw2">
                <span class="checkTrue" v-if="pwSame">일치</span>
                <span class="checkFalse" v-else>불일치</span>
                <br>
                <label class="space">*비밀번호는 영문,숫자,특수문자 3가지 모두 포함 및 10자리 이상</label>
            </div>
            <div class="box">
                <label>닉네임</label>
                <input class="userInput nanumsquare" type="text" placeholder="닉네임 입력" id="userid">
                <button >중복확인</button>
                <span class="checkTrue" v-if="nickCheck">사용가능</span>
                <span class="checkFalse" v-else>사용불가</span>
            </div>
            
            
            <div class="box">
                <label>생년월일</label>
                <input type="date" name="birth_info"><br>
                <label>성별</label>
                <input type="radio" name="sex_info" value="man">남
                <input type="radio" name="sex_info" value="woman">여
            </div>
        </div>

        <div class="box textCenter ">
            <input class=" bottomBtn" type="submit" value="회원가입" v-on:click="completeClick" >
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
            pwSame:false,
            nickCheck:false
        }
    },
    methods:{
        completeClick : function() {		
            //if bool모두만족	
			alert('abc123@goggle.com 메일주소로 가입 안내 메일을 확인하시면 회원가입이 완료됩니다.');
			this.$router.push({path:'/login'});
            //if bool 한개라도 불만족
            //alert('회원가입이 조건을 확인해주세요');
		},
        cancelClick : function() {			
			alert('회원가입이 취소되었습니다.');
			this.$router.push({path:'/signup'});
		}		
        
    }
}
</script>

<style scoped>
    .box {
        margin-top: 30px;
        /* text-align: center; */
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
