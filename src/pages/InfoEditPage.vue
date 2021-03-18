<template>
    <div class="app">
        <h2 class="textCenter">내 정보 수정</h2>
        <div>
            <div class="box">
                <span >이메일: {{email}} </span>
            </div>
            
            <div class="box">
                <label>닉네임</label>
                <input class="userInput nanumsquare" type="text" placeholder="닉네임 입력" id="userid">
                <button>중복확인</button>
                <span class="checkTrue" v-if="emailCheck">사용가능</span>
                <span class="checkFalse" v-else>사용불가</span><br>
                <span class="space">현재 닉네임: {{nickname}}</span>
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
            <input class="bottomBtn" type="submit" value="정보 수정" v-on:click="completeClick" >
            <button class="bottomBtn" v-on:click="cancelClick">취소</button>
        </div>     
    </div>  
</template>


<script>

export default {
    data:function(){
        return{
            email:"abc123@google.com",
            nickname:"ABC123",
            birth:"2000-01-01",
            emailCheck:false,
            pwCheck:false,
            pwSame:false,
            nickCheck:false
        }
    },
    methods:{
        completeClick : function() {		
            //if 정보수정한 파트별로 bool값 체크
			alert('정보수정이 완료되었습니다.');
			this.$router.push({path:'/myinfo'});
            //if bool 한개라도 불만족
            //alert('회원가입이 조건을 확인해주세요');
		},
        cancelClick : function() {	
            alert('정보수정이 취소되었습니다.');		
			this.$router.push({path:'/myinfo'});
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
        margin-left:58px;
    }
    .bottomBtn{
        margin:0 2%;
    }
    
    
</style>
