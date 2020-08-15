<template> 
<div id="home">
    <div class="header" ref="header">
            <img id="sys-icon" src="../assets/通知.jpg" />
            <span id="sys-name">{{sysName}}</span>
            <div class="userInfo" type="info" >
                <b>{{user.nickname}}</b>
                <el-select class="selectOption" v-model="chooseRole.roleName"  placeholder="切换角色（提示）">
                    <el-option 
                    v-for="role in roles"
                    :key="role.id"
                    :value="role.id"
                    :label="role.roleName"
                    >
                    </el-option>
                </el-select>   

                <el-button class="quitButton">退出</el-button>
            </div>
    </div>

    <div class="asideAndMain">
        <div class="aside" ref="aside">
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
                <ul v-for="(sysPermission, index2) in sysPermissions.data" :key="index2" >
                    <template  v-if="sysPermission.parentId == parentSysPermission.id" >
                        <router-link id="mean2"  :to="sysPermission.url" exact>
                            {{sysPermission.permissionName}}             
                        </router-link>     
                    </template> 
                </ul>   
            </ul>
            </div>
        </div>

        <div class="main" ref="main">
            <h1>（一）main里的路由组件展示</h1>


            <div>
                <router-view/>   
            </div>
            
            <br/><br/><br/>
           _______________________________________________________________

            <h1>（二）main里的路由组件展示</h1>
            <router-view/>   

            <br><br><br>
           _______________________________________________________________
            
            
            <br><br><br>
            <h1>（三）main里的自带内容展示</h1>

            <p>你好，不要看Home2.vue了，它被作废</p>
            <p>我好</p>

            <el-popover
                placement="bottom"
                title="标题"
                width="200"
                trigger="click"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <el-button slot="reference">click 激活</el-button>
            </el-popover>


            <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

            <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
                <el-table :data="gridData">
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="name" label="姓名" width="200"></el-table-column>
                    <el-table-column property="address" label="地址"></el-table-column>
                </el-table>
            </el-dialog>



            <p>大家好菜鸟教程 - 学的不仅是技术，
            </p>
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>大家好菜鸟教程 - 学的不仅是技术
            </p>
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>大家好菜鸟教程 - 学的不仅是技术
            </p>
            <br>
            <br>
            <br>
            <br>
            <br>
            <p>大家好菜鸟教程 - 学的不仅是技术
            </p>
            <br>
            <br>
            <br>
            <br>
            <br>
            
        </div> 
    </div>
   

    <!-- <div>
        
    </div> -->

    

</div>
</template>

<script>
</script>

<script>
export default {
  name: "home",
  data() {
    return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],

        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',



        user:{
            nickname: "一只大白鼠1🐭一只大白鼠2🐭一只大白鼠3🐭"//昵称

        },
        roles:[
            {
                "id": 1,
                "roleName": "事务管理者（小白鼠管理试养员1号）",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null
            },
            {
                "id": 2,
                "roleName": "事务创建者（大白鼠管理试养员1号）",
                "createTime": null,
                "creatorId": null,
                "updateTime": null,
                "updatorId": null,
                "deleteFlg": null
            }
        ],
        chooseRole:{
            "id": 0,
            "roleName": "",
        },
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
    }
  },
  methods:{
    // 展开/收起某一级菜单
    showMean(parentSysPermission, index1){
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
            this.$refs.main.style.width = '85%';
            this.$refs.main.style.margin = '0 0 0 15%'; 
            this.$refs.aside.style.overflow = "scroll";
            this.asideTitle = '点这收起菜单'
        }else{
            this.$refs.aside.style.width = '2%';
            this.$refs.main.style.width = '98%';
            this.$refs.main.style.margin = '0 0 0 2%'; 
            this.$refs.aside.style.overflow = "hidden";
            this.asideTitle = '点这展开菜单'
        }
        
    }
  },
};
</script>


<style scope>
/* 隐藏右侧html自带滚动条 */
html,body{
    width: 100%;
    height: 100%;
    margin: 0px;
    overflow-y: hidden
}
#home{
    height: 100%;
    box-sizing: border-box;
}

/**********  头部 **************/
/* 滚动条滚动时，头部固定 */
.header{
    background-color: #303643;
    color: orange;
    height: 50px;
    width: 100%;
    margin: 0px 0px 0px 0px;
    position: fixed;
}
/* 系统图标 */
#sys-icon{
    width: 50px;
    display: inline-block;
}
/* “通知管理系统” */
#sys-name{
    color: orange;
    font-size: 40px;
    position: relative;
    top: -10px;
    margin: 0 0 0 0px;
    display: inline-block;
}
/* 用户账号信息div：靠右，内部元素居一行 */
.userInfo{
    color:green;
    letter-spacing: 2px; /* 字体间距 */
    position: absolute;
    right: 0px;
    top: 7px;
    display: inline-flex;
}
.userInfo b{
    position: relative;
    top: 7px;
}
/* 切换角色div：切换角色按钮+下拉角色列表 */
.selectOption{
    width: auto;
    margin: 0px 2px ;
}
/* 下拉字体和选中字体的颜色 */
.el-input--suffix .el-input__inner {
    background:rgb(109, 64, 46);
    color: #409EFF;
}
.el-select-dropdown__item{
    color: green;
}
/* 退出按钮 */
.quitButton{
    background: khaki;
    color:green;
    letter-spacing: 1px; /* 字体间距 */
    width: fit-content;
    font-size: large;
    padding: 2px;
}


/**********  菜单栏和main **************/
.asideAndMain{
    display: flex;
    width: 100%;
    height: 100%;
    padding: 50px 0px 0px 0px;
}
/********** 菜单栏 **************/
.aside{
    background-color: #444244;
    color: rgb(146, 65, 65);
    width: 15%;
    height: 100%;
    margin: 0px 0px 0px 0px; 
    position: fixed;
    overflow: scroll;
}
/* “点这收齐菜单”四个字 */
.aside h1{
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



/*******************main ****************/
.main{
    background-color: #DCE0E4;
    color: #333;
    width: 85%;
    height: 100%;
    margin: 0 0 0 15%;
    overflow: scroll;
}

</style>

