<template>
    <div class="app">
        <h2 class="textCenter">비밀번호 변경</h2>
        <div>
            
            <div class="box">
                <label>현재 비밀번호</label>
                <input class="userInput nanumsquare" type="password" placeholder="비밀번호 입력" id="userpw">
                <br>
                <br>
                <label>변경할 비밀번호</label>
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
        <div class="box textCenter ">
            <input class="bottomBtn" type="submit" value="비밀번호 변경" v-on:click="completeClick" >
            <button class="bottomBtn" v-on:click="cancelClick">취소</button>
        </div>     
    </div>  
</template>


<script>

export default {
    data:function(){
        return{
            pwCheck:false,
            pwSame:false,
        }
    },
    methods:{
        completeClick : function() {		
            //if 정보수정한 파트별로 bool값 체크
			alert('비밀번호 변경이 완료되었습니다.');
			this.$router.push({path:'/myinfo'});
            //if bool 한개라도 불만족
            //alert('비밀번호 조건을 확인해주세요');
		},
        cancelClick : function() {	
            alert('비밀번호 변경이 취소되었습니다.');		
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
        margin-left:110px;
    }
    .bottomBtn{
        margin:0 2%;
    }
    
    
</style>
