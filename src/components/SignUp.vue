<template>
    <div id="SignUp">
        <el-card shadow="always" >
            <el-form label-position="left" size="small">
                <el-form-item label="用户名" label-width="60px">
                    <el-input @blur="usernameAlert" @focus="usernameInputFocus" type="text" v-model="username"></el-input>
                </el-form-item>
                <transition name="el-zoom-in-top">
                    <el-alert v-if="isUsernameAlert" :title="usernameAlertTitle" type="error" show-icon :closable="false"/>
                </transition>
                <el-form-item label="密码" label-width="60px">
                    <el-input @blur="passwordAlert" @focus="passwordInputFocus" type="password" v-model="password"></el-input>
                </el-form-item>
                <el-alert v-if="isPasswordAlert" :title="passwordAlertTitle" type="error" show-icon :closable="false"/>
                <el-alert id="passwordSpaceAlert" v-if="isPasswordSpaceAlert" :title="spaceAlertTitle" :type="spaceType" show-icon :closable="false"/>
                <el-alert id="passwordLengthAlert" v-if="isPasswordLengthAlert" :title="lengthAlertTitle" :type="lengthType" show-icon :closable="false"/>
                <el-alert v-if="isPasswordWordAlert" :title="wordAlertTitle" :type="wordType" show-icon :closable="false"/>
                <el-form-item>
                    <el-button id="signUpButton" v-on:click="signUp">注册</el-button>
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

            isPasswordSpaceAlert: false,
            isPasswordLengthAlert: false,
            isPasswordWordAlert: false,

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
            this.isPasswordSpaceAlert = false;
            this.isPasswordLengthAlert = false;
            this.isPasswordWordAlert = false;
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
            this.isPasswordSpaceAlert = true;
            this.isPasswordLengthAlert = true;
            this.isPasswordWordAlert = true;
        }
    }
}
</script>

<style lang="scss" scoped>

#SignUp{
    margin-top: 10%;

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

