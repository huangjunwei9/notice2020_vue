<template>
    <div id="permissionCreateUser">
        创建用户123

        <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <el-table :data="gridData">
            <el-table-column property="date" label="日期" width="150"></el-table-column>
            <el-table-column property="name" label="姓名" width="200"></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
        </el-dialog>

        <!-- Form -->
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
        </el-dialog>


       <el-button  type="primary" @click="stepProgressVisible = true">生成任务清单</el-button>

<!-- style="height: 900px auto !important" -->
        <el-dialog class="abow_dialog" title="任务清单" :visible.sync="stepProgressVisible" >
            
            <!-- 共一组任务列表时 -->
            <div v-if="progressDTOListGroupList.length == 1" >
                <!-- 提示 -->
                <p style="margin:0px 0px 0px 90%; color:green">已完成</p>
                <p style="margin:0px 0px 0px 90%; color:red">未完成</p>
                
                <!-- 步骤条 -->
                <el-steps :active="1">
                    <el-step style="float:left; margin:0px 0px 0px 40%;"></el-step>
                </el-steps>
                <br/>

                <!-- 第一组任务列表 -->
                <div style="float:left; width:25%; margin:0px 0% 0px 40%; padding:0% 0 10% 0; ">
                    <div style="font-weight:bold">
                        {{progressDTOListGroupList[0].groupName}}
                    </div>
                    <div v-for="(progress, i) in progressDTOListGroupList[0].progressDTOList" :key="i">
                        <p v-if="progress.successState == 1" style="color:green">
                        <br/>{{progress.name}}
                        </p>
                        <p v-if="progress.successState == 0" style="color:red">
                        <br/>{{progress.name}}
                        </p>
                    </div>
                </div>
            </div>


            <!-- 共两组任务列表时 -->
            <div v-if="progressDTOListGroupList.length == 2" >
                <!-- 提示 -->
                <p style="margin:0px 0px 0px 90%; color:green">已完成</p>
                <p style="margin:0px 0px 0px 90%; color:red">未完成</p>
                
                <!-- 步骤条 -->
                <el-steps :active="2">
                    <el-step style="float:left; margin:0px 0px 0px 25%;"></el-step>
                    <el-step style="float:left; margin:0px 25% 0px 0px;"></el-step>
                </el-steps>
                <br/>

                <!-- 第一组任务列表 -->
                <div style="float:left; width:25%; margin:0px 0% 0px 25%; padding:0% 0 10% 0; ">
                    <div style="font-weight:bold">
                        {{progressDTOListGroupList[0].groupName}}
                    </div>
                    <div v-for="(progress, i) in progressDTOListGroupList[0].progressDTOList" :key="i">
                        <p v-if="progress.successState == 1" style="color:green">
                        <br/>{{progress.name}}
                        </p>
                        <p v-if="progress.successState == 0" style="color:red">
                        <br/>{{progress.name}}
                        </p>
                    </div>
                </div>

                <!-- 第二组任务列表 -->
                <div style="float:left; width:25%; margin:0px 0% 0px 22%;">
                    <div style="font-weight:bold">
                        {{progressDTOListGroupList[1].groupName}}
                    </div>
                    <div v-for="(progress, i) in progressDTOListGroupList[1].progressDTOList" :key="i">
                        <p v-if="progress.successState == 1" style="color:green">
                        <br/>{{progress.name}}
                        </p>
                        <p v-if="progress.successState == 0" style="color:red">
                        <br/>{{progress.name}}
                        </p>
                    </div>
                </div>
            </div>

            <!-- 共三组任务列表时 -->
            <div v-if="progressDTOListGroupList.length == 3" class="el_steps">
                <!-- 提示 -->
                <p style="margin:0px 0px 0px 90%; color:green">已完成</p>
                <p style="margin:0px 0px 0px 90%; color:red">未完成</p>
                
                <!-- 步骤条 需要调用函数计算并返回步骤完成数 -->
                <el-steps  :active="3">
                    <el-step style="float:left; margin:0px 0px 0px 20%;"></el-step>
                    <el-step style="float:left; margin:0px 0px 0px 0px;"></el-step>
                    <el-step style="float:left; margin:0px 20% 0px 0px;"></el-step>
                </el-steps>
                <br/>

                <!-- 第一组任务列表 -->
                <div style="float:left; width:20%; margin:0px 0% 0px 20%; padding:0% 0 10% 0">
                    <div style="font-weight:bold">
                        {{progressDTOListGroupList[0].groupName}}
                    </div>
                    <div v-for="(progress, i) in progressDTOListGroupList[0].progressDTOList" :key="i">
                        <p v-if="progress.successState == 1" style="color:green">
                        <br/>{{progress.name}}
                        </p>
                        <p v-if="progress.successState == 0" style="color:red">
                        <br/>{{progress.name}}
                        </p>
                    </div>
                </div>

                <!-- 第二组任务列表 -->
                <div style="float:left; width:20%; margin:0px 8% 0px 9%; ">
                    <div style="font-weight:bold">
                        {{progressDTOListGroupList[1].groupName}}
                    </div>
                    <div v-for="(progress, i) in progressDTOListGroupList[1].progressDTOList" :key="i">
                        <p v-if="progress.successState == 1" style="color:green">
                        <br/>{{progress.name}}
                        </p>
                        <p v-if="progress.successState == 0" style="color:red">
                        <br/>{{progress.name}}
                        </p>
                    </div>
                </div>

                <!-- 第三组任务列表 -->
                <div style="float:left; width:20%; margin:0px 0px 0px 0%;">
                    <div style="font-weight:bold">
                        {{progressDTOListGroupList[2].groupName}}
                    </div>
                    <div v-for="(progress, i) in progressDTOListGroupList[2].progressDTOList" :key="i">
                        <p v-if="progress.successState == 1" style="color:green">
                            <br/>{{progress.name}}
                        </p>
                        <p v-if="progress.successState == 0" style="color:red">
                            <br/>{{progress.name}}
                        </p>
                    </div>
                </div>
            </div>
        </el-dialog>

    <p v-text="nihao"/>
    <el-button type="text" @click="showObject">修改变量</el-button>
    <p v-text="tempObject.key1"/>
    <p v-text="tempObject"/>
    <el-form>
        <el-form-item label="有京东企业钱包吗？" prop="aboolean" class="is-required">
            <el-radio-group v-model="aInt">
                <el-radio :label="1" >有</el-radio>
                <el-radio :label="0" >没有</el-radio>
            </el-radio-group>
            &emsp; &emsp; &emsp; &emsp;
            <a v-if="aInt == 0" href="http://www.baidu.com" style="color:red" target="_blank">点这里去拥有钱包</a>
        </el-form-item>
    </el-form>
    
    


    <el-radio :label="1" v-model="aInt">有</el-radio>
    <el-radio :label="0" v-model="aInt">
        没有
    </el-radio>
     &emsp; &emsp; &emsp; &emsp;
    <a v-if="aInt == 0" href="http://www.baidu.com" style="color:red" target="_blank">点这里去拥有钱包</a>
    <el-button @click="dianwoshowradio">点我显示选中的是哪个</el-button>
<!--  -->
        <!-- <div v-if="progressDTOListGroupList.length == 3" style="margin:5px 0px 10px 0px">
            <el-steps :active="3">
                <el-step style="float:left; margin:0px 0px 0px 200px;"></el-step>
                <el-step style="float:left; margin:0px 0px 0px 0px;"></el-step>
                <el-step style="float:left; margin:0px 200px 0px 0px;"></el-step>
            </el-steps>
            
            <br/> -->
            <!-- 第一组任务列表 -->
            <!-- <div style="float:left; margin:0px 0px 0px 200px;">
                <div>
                    {{progressDTOListGroupList[0].groupName}}
                </div>

                <div v-for="(progress, i) in progressDTOListGroupList[0].progressDTOList" :key="i">
                    <br/>{{progress.name}}
                </div>
            </div> -->

            <!-- 第二组任务列表 -->
           
            
            <!-- <div style="float:left; margin:0px 0px 0px 360px;">
                <div>
                    {{progressDTOListGroupList[1].groupName}}
                </div>

                <div v-for="(progress, i) in progressDTOListGroupList[1].progressDTOList" :key="i">
                    <br/>{{progress.name}}
                </div>
            </div> -->

            <!-- 第三组任务列表 -->
            <!-- <div style="float:left; margin:0px 0px 0px 360px;">
                <div>
                    {{progressDTOListGroupList[2].groupName}}
                </div>

                <div v-for="(progress, i) in progressDTOListGroupList[1].progressDTOList" :key="i">
                    <br/>{{progress.name}}
                </div>
            </div>



        </div> -->






        <!-- <div v-if="2 == 2" style="margin:10px 0px 0px 0px">
            <el-steps :active="2">
                <el-step ></el-step>
                <el-step ></el-step>
                <el-step ></el-step>
            </el-steps>
        </div> -->
        





    </div>
</template>

<script>
export default {
    name: "permissionCreateUser",
    data() {
        return {
            nihao:"你好吗，我是一个变量哦 ",
            tempObject:{},
            aboolean: true,
            aInt: 0,
            gridData: [
                {
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
                }
            ],
            dialogTableVisible: false,
            dialogFormVisible: false,
            stepProgressVisible:false,
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

            progressDTOListGroupList:[{ //存储：全部小组的全部任务列表
                groupOrderNum: 1,
                groupName: "第一组",
                progressDTOList:[{
                    id:1,
                    name:"任务1名称123457898082837289734",
                    progressOrderNum:1,
                    successState:1
                },
                {
                    id:2,
                    name:"任务2名称",
                    progressOrderNum:2,
                    successState:1
                },
                {
                    id:3,
                    name:"任务3名称",
                    progressOrderNum:3,
                    successState:1
                }]
            }
            , {
                groupOrderNum: 2,
                groupName: "第二组",
                progressDTOList:[{
                    id:4,
                    name:"任务4名称撒旦法撒旦法撒旦发射霜冻废墟",
                    progressOrderNum:4,
                    successState:1
                },
                {
                    id:5,
                    name:"任务5名称",
                    progressOrderNum:5,
                    successState:1
                },
                {
                    id:6,
                    name:"任务6名称",
                    progressOrderNum:6,
                    successState:1
                }]
            }

            , {
                groupOrderNum: 3,
                groupName: "第三组",
                progressDTOList:[{
                    id:7,
                    name:"任务7名称平平平平平平平平平平平平平平平平平平平平平平平平平",
                    progressOrderNum:7,
                    successState:1
                },
                {
                    id:8,
                    name:"任务8名称",
                    progressOrderNum:8,
                    successState:0
                },
                {
                    id:9,
                    name:"任务9名称",
                    progressOrderNum:9,
                    successState:0
                }]
            }
            ]



        };
    },
    created: function(){
            // console.log('sdf');
            // this.showObject();
    },
    methods:{
        dianwoshowradio(){
            alert(this.aInt)
        },
        showObject(){
            var _this = this;
            var tempObject={key1: 'value1', key2: 'value2'};
            this.tempObject = tempObject;
            this.nihao = tempObject;
            tempObject.key1 = 'hasChange';
            tempObject = {}
            if(tempObject == {}){
                alert('tempObject == {}')
            }
            if(tempObject == null){
                alert('tempObject == null')
            }
            if(tempObject){
                alert('tempObject != {}, tempObject=', tempObject)
            }
            this.tempMethod1(100);
            _this.tempMethod1(300);
            this[tempObject] = tempObject;
            console.log(this[tempObject]);


        },
        tempMethod1: function(index){
            alert(index);
        }
    }

}



</script>

<style scoped >
#user-list{
    color: indianred;
}

.abow_dialog {
    display: flex;
    justify-content: center;
    align-items: Center;
    overflow: hidden;
}
/* .el_steps{

} */

</style>
<style>
#permissionCreateUser .el-dialog__body{
    padding:0;
}
</style>