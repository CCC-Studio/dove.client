<template>
    <div id="SignUp">
        <el-card shadow="always" >
            <el-form label-position="left" size="small">
                <el-form-item label="用户名" label-width="60px">
                    <el-input @blur="usernameAlert" @focus="usernameInputFocus" type="text" v-model="username"></el-input>
                </el-form-item>
                <transition name="el-zoom-in-top">
                    <el-alert v-show="isUsernameAlert" :title="usernameAlertTitle" type="error" show-icon :closable="false"/>
                </transition>
                <el-form-item label="密码" label-width="60px">
                    <el-input @input="validatePassword" @blur="passwordAlert" @focus="passwordInputFocus" type="password" v-model="password"></el-input>
                </el-form-item>
                <transition name="el-zoom-in-top">
                    <el-alert v-if="isPasswordAlert" :title="passwordAlertTitle" type="error" show-icon :closable="false"/>
                    <el-alert v-else-if="isTipAlert" id="passwordSpaceAlert" :title="spaceAlertTitle" :type="spaceType" show-icon :closable="false"/>
                </transition>
                <transition name="el-zoom-in-top">
                    <el-alert v-show="isTipAlert" id="passwordLengthAlert" :title="lengthAlertTitle" :type="lengthType" show-icon :closable="false"/>
                </transition>
                <transition name="el-zoom-in-top">
                    <el-alert v-show="isTipAlert" :title="wordAlertTitle" :type="wordType" show-icon :closable="false"/>
                </transition>
                <el-form-item>
                    <el-button id="signUpButton" v-on:click="signUp" type="primary" :disabled="isButtonDisabled">注册</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "SignUp",
    data(){
        return {
            username: "",
            password: "",

            isUsernameAlert: false,
            isPasswordAlert: false,

            usernameAlertTitle: "",
            passwordAlertTitle: "",

            isTipAlert: false,

            spaceAlertTitle: "不含空格",
            lengthAlertTitle: "长度8-16个字符",
            wordAlertTitle: "包含字母、数字、符号中至少2种",

            spaceType: "info",
            lengthType: "info",
            wordType: "info"
        }
    },
    methods: {
        signUp: function(){
            
        },
        usernameAlert: function(){
            if(this.username.length == 0){
                this.isUsernameAlert = true;
                this.usernameAlertTitle = "用户名不能为空";
            }
        },
        passwordAlert: function(){
            this.isTipAlert = false;
            if(this.password.length == 0){
                this.isPasswordAlert = true;
                this.passwordAlertTitle = "密码不能为空";
            }
        },
        usernameInputFocus: function(){
            this.isUsernameAlert = false;
        },
        passwordInputFocus: function(){
            this.isPasswordAlert = false;
            this.isTipAlert = true;
        },
        validatePassword: function(){
            // 是否含空格
            if(this.password.indexOf(" ") == -1 && this.password.length > 0){
                this.spaceType = "success";
            } else {
                this.spaceType = "info";
            }
            // 长度是否8-16
            if(this.password.length >= 8 && this.password.length <= 16){
                this.lengthType = "success";
            } else {
                this.lengthType = "info";
            }

            // 是否包含至少两种
            var count = 0;
            
            var regLetter = /[a-z]/;
            if(regLetter.test(this.password)){
                count ++;
            }
            
            var regNumber = /[0-9]/;
            if(regNumber.test(this.password)){
                count ++;
            }

            var regSymbol = /[`~!@#$^&*()=|{}':;',[\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]/
            if(regSymbol.test(this.password)){
                count ++;
            }

            if(count >= 2){
                this.wordType = "success";
            } else {
                this.wordType = "info";
            }
        },
    },
    computed: {
        isButtonDisabled: function(){
            return !(this.wordType == "success" && this.lengthType == "success" && this.wordType == "success" && this.username.length > 0);
        }
    }
}
</script>

<style lang="scss" scoped>

#SignUp{

    .el-card{
        width: 300px;
        padding: 5px;
        margin: auto;

        .el-form{

            .el-alert{
                height: 30px;
                margin-bottom: 15px;
            }

            #passwordSpaceAlert, #passwordLengthAlert{
                margin-bottom: 5px;
            }

            .el-form-item{
                
                #signUpButton{
                    width: 100%;
                }
            }
        }
    }
}

</style>

