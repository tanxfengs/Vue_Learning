<template>
    <div>
        <h1>这是Account组件</h1>
        <router-link to="/account/login">Login</router-link>
        <router-link to="/account/register">Register</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

</script>


<style lang="scss" scope>
/*普通的style只支持普通样式, 如果想要启用scss或者less需要
设置lang属性
*/
/*
只要style标签是在 vue组件中定义的, 那么推荐为style开启scoped属性
*/ 

body{
    div{
        font-style: italic
        
    }
}
    

</style>


