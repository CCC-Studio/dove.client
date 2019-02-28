<template>
    <div id="topScreen">
        <div id="discription">
            <div id="title">Dove</div>
            <div id="subTitle">——中央授权系统</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopScreen',
    data() {
        return {

        }
    }
}
</script>>

<style lang="scss" scoped>

#topScreen {
    margin-top: 100px;
    height: 100vh;
    background: url("../../assets/top-background.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    
    #discription {
        padding-bottom: 50px;
        background-color: white;

        #title {
            animation: titleShow 2s;
            font-size: 36px;
        }

        #subTitle {
            animation: titleShow 2s;
            font-size: 30px;
        }
    }

}

@keyframes titleShow {
    from{ 
        transform: translateX(100px);
        opacity: 0;
    }
    to{
        transform: translateX(0px);
        opacity: 1;
    }
}

</style>
