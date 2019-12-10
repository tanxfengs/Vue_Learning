<template>
    <div>
        <h1>这是App组件</h1>

        <mt-button type="danger">default</mt-button>
        
        <mt-button type="danger" size="small">default</mt-button>
        
        <mt-button type="danger" size="large">default</mt-button>
       
        <mt-button type="danger" size="large" disabled>default</mt-button>
       
        <mt-button type="danger" size="large" plain>default</mt-button>
        <mt-button @click.native="getList">default</mt-button>

        <button type="button" class="mui-btn mui-btn-royal">
					紫色
        </button>


        <router-link to="/account">account</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>
        
    </div>
</template>
<script>
    //导入Toast组件
    import {Toast} from "mint-ui"

    export default {
        data: function(){
            return {
                toastInstance: null
            }
        },
        created() {
            this.getList()
        },
        methods: {
            //模拟Ajax请求获取数据
            // 在获取数据之前, 立即弹出Toast提示用户, 正在加载数据
            getList(){
                this.show()
                setTimeout(()=>{
                    this.toastInstance.close()// 关闭toast
                }, 
                    3000 //3s暂停
                    )
            }
            ,

            show(){
                this.toastInstance = Toast({
                    message:"我是消息",
                    duration: -1, //如果是-1 弹窗不消失 (s)
                    position: "top",
                    iconClass: "glyphicon glyphicon-heart",// 弹窗图标需要自行准备, 这里是bootstrap图标 需要导入css
                    className: "mytoast" //自定义样式
                })
            }
        },
    }
</script>

<style>
    
</style>

