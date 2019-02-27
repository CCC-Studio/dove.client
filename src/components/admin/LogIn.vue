<template>
    <div id="login">
        <el-card shadow="always" >
            <el-form label-position="left" size="small">
                <el-form-item label="用户名" label-width="60px">
                    <el-input type="text" v-model="username"></el-input>
                </el-form-item>
                <el-form-item label="密码" label-width="60px">
                    <el-input type="password" v-model="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button id="loginButton" v-on:click="logIn">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    name: "LogIn",
    data(){
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        // 登录按钮事件
        logIn: function(){
        }
    }
}
</script>

<style lang="scss" scoped>

#login{
    height: 100%;
    width: 100%;

    .el-card{
        width: 300px;
        padding: 5px;
        margin: auto;

        .el-form{
            .el-form-item{
                #loginButton{
                    width: 100%;
                }
            }
        }
    }
}

</style>

