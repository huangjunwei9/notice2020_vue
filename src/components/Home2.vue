<template> 
<div id="home2">
    <div class="header" ref="header">
        <div id="sys-label">
            <img id="sys-icon" src="../assets/通知.jpg" />
            <span id="sys-name">{{sysName}}</span>
            <div class="userInfo" type="info" >
                <b>{{user.nickname}}</b>
                <el-button class="changeRoleButton">
                    <span>切换角色</span>
                    <div class="rolesDropdown-content">
                        <p class="content" @click="getPermissionByRole()">1. xxx角色。响应：根据角色的Id获取对应的权限</p>
                        <p>2. xxx角色。响应：根据角色的Id获取对应的权限</p>
                    </div>
                </el-button>
                
                
                <el-button class="quitButton">退出</el-button>
            </div>
            
        </div>
    </div>

    <div class="aside" ref="aside">
        <div id="navgation-mean">
            <h1 @click="asideMeanControl()" >{{asideTitle}}</h1> 
            
            <!-- 遍历一级菜单 -->
            <div id="nav1" v-if="navgationBlean">
            <ul v-for="(parentSysPermission, index1) in parentSysPermissions" :key="index1">
                <!-- 展示一级菜单 -->
                <h2 class="mean1" @click="showMean(parentSysPermission, index1)" >
                {{index1 + 1}}. 
                {{parentSysPermission.permissionName}}
                </h2>
                <!-- 遍历二级菜单 -->
                <div v-if="parentSysPermission.needShow">
                <ul v-for="(sysPermission, index2) in sysPermissions.data" :key="index2" >
                    <template  v-if="sysPermission.parentId == parentSysPermission.id" >
                        <router-link id="mean2"  :to="sysPermission.url" exact>
                            {{sysPermission.permissionName}}             
                        </router-link>     
                    </template> 
                </ul>
                </div>    
               </ul>
            </div>
        </div>
    </div>

    <div class="main" ref="main">
        <div>
            <router-view/>   
        </div>
        <div>你好</div>
        <div>我好</div>
        <div>大家好</div>
        
    </div> 
    

</div>
</template>

<script>
export default {
  name: "home2",
  data() {
    return {
        user:{
            nickname: "一只小白鼠🐭"//昵称

        },
        roles:[{
            id: 1,
            
        }],
        sysName:'通知系统',
        asideTitle:"点这收起菜单",
        navgationBlean: true,
        isActive: true,
        parentSysPermissions: [
            {
                "id": 9,
                "permissionName": "用户管理",
                "url": null,
                "level": 1,
                "parentId": "9",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null,
                "needShow":true,
            },
            {
                "id": 7,
                "permissionName": "事务管理",
                "url": null,
                "level": 1,
                "parentId": "0",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null,
                "needShow":true,
            },
            {
                "id": 10,
                "permissionName": "标签管理",
                "url": null,
                "level": 1,
                "parentId": "0",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null,
                "needShow":true,
            },
            {
                "id": 8,
                "permissionName": "权限管理",
                "url": null,
                "level": 1,
                "parentId": "0",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null,
                "needShow":true,
            }
        ],
        sysPermissions:{
          "code": 200,
          "msg": "",
          "data": [
              {
            "id": 1,
            "permissionName": "创建事务",
            "url": "/thing/create",
            "level": 2,
            "parentId": "7",
            "createTime": null,
            "creatorId": null,
            "updateTime": null,
            "updatorId": null,
            "deleteFlg": null
            },
            {
                "id": 2,
                "permissionName": "自己创建的事务",
                "url": "/thing/myCreateList",
                "level": 2,
                "parentId": "7",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null
            },
            {
                "id": 3,
                "permissionName": "接收到的事务",
                "url": "/thing/myReceiveList",
                "level": 2,
                "parentId": "7",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null
            },
            {
                "id": 4,
                "permissionName": "创建角色",
                "url": "/permission/createRole",
                "level": 2,
                "parentId": "8",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null
            },
            {
                "id": 5,
                "permissionName": "创建用户",
                "url": "/permission/createUser",
                "level": 2,
                "parentId": "9",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null
            },
            {
                "id": 6,
                "permissionName": "创建权限",
                "url": "/permission/createPermission",
                "level": 2,
                "parentId": "8",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null
            },
            {
                "id": 11,
                "permissionName": "我的标签",
                "url": "/tag/myCreateList",
                "level": 2,
                "parentId": "10",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null
            }
          ]
        },
    };
  },
  computed:{
    showTest:{ 
      get(){},
      set(){} 
    },
    hellohuangjunwei9(){
      console.log('computed, hellohuangjunwei9')
    }
  },
  methods:{
    // 展开/收起某一级菜单
    showMean(parentSysPermission, index1){
      console.log('展开/收起某一级菜单')
      this.parentSysPermissions[index1].needShow = !parentSysPermission.needShow
      console.log(parentSysPermission.needShow)
    },
    // 展开/收起左侧菜单
    asideMeanControl(){
        console.log("改变菜单栏");
        this.navgationBlean = !this.navgationBlean;
        console.log(this.navgationBlean)
        if(this.navgationBlean == true){
            this.$refs.aside.style.width = '15%';
            this.$refs.main.style.width = '84.68%';
            this.$refs.main.style.margin = '0 0 0 15%'; 
            this.asideTitle = '点这收起菜单'
        }else{
            this.$refs.aside.style.width = '2%';
            this.$refs.main.style.width = '97.8%';
            this.$refs.main.style.margin = '0 0 0 2%';
            this.asideTitle = '点这展开菜单'
        }
        
    }
  },
};
</script>


<style scope>
html,body{
    height: 100%;
    margin: 0px;
}
#home2{
    height: 100%;
    box-sizing: border-box;
    padding: 50px 0 0;
}
.header{
    background-color: #303643;
    color: orange;
    height: 50px;
    width: 100%;
    margin: -50px 0px 0px;
    position: fixed;
}
.aside{
    background-color: #444244;
    color: rgb(255, 255, 255);
    width: 15%;
    display: inline-block;
    height: 100%;
    position: fixed;
}
.main{
    background-color: #DCE0E4;
    color: #333;
    width: 84.68%;
    display: inline-block;
    height: 100%;
    margin: 0 0 0 15%;
    overflow: scroll;
}


/**************** 头部  ****************/
/* 系统图标 */
#sys-icon{
    width: 50px;
}
/* “通知管理系统” */
#sys-name{
    color: orange;
    font-size: 40px;
    position: relative;
    top: -10px;
    margin: 0 0 0 0px;
}
/* 用户账号信息 */
.userInfo{
    color:green;
    letter-spacing: 3px; /* 字体间距 */
    margin-top: 0px;
    margin-left: 77%;
    position: relative;
    top: -55px;
    padding: 5px 10px;
}
/* 切换角色按钮 */
.changeRoleButton{
    background: khaki;
    color:green;
    letter-spacing: 3px; /* 字体间距 */
    position: relative;
    top: -5px;
    display: inline-block;
}
/* 切换角色按钮的下拉内容 */
.rolesDropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  margin: 12px 0 0 -20px;
  border: 1px solid red;
  padding: 1px;
  overflow: scroll;
  text-align: left;
}
.changeRoleButton:hover .rolesDropdown-content {
  display: block;
}
/* 退出按钮 */
.quitButton{
    background: khaki;
    color:green;
    letter-spacing: 3px; /* 字体间距 */
    position: relative;
    top: -5px;
}



/**************** 菜单栏 *****************/
#navgation-mean{
  margin: 0px 0px 0px 0px;  
}
/* “点这收齐菜单”四个字 */
#navgation-mean h1{
  font-size: 22px;
  color: rgb(158, 197, 126);
  display:block;
}
/* 一级菜单 */
.mean1{
  margin: 0px 0px 0px 0px;
  font-size: 17px;
  color: rgb(222, 233, 192);  
}
/* 二级菜单 */
#mean2{
  font-size: 15px;
  text-decoration: none;
  display:block;
}
:link {color: white}
a:visited {color: #00FF00}
a:hover {color: #FF00FF}
a:active {color: #0000FF}
/* 去掉下划线 */
.router-link-active {
  text-decoration: none;
}
</style>

