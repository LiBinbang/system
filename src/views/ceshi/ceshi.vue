<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="94px"
      label-position="left">
      <el-form-item label="下拉选择" prop="field116">
        <el-select v-model="formData.field116" placeholder="请选择下拉选择" clearable :style="{width: '100%'}">
          <el-option v-for="(item, index) in field116Options" :key="index" :label="item.label"
            :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="多选框组" prop="field113">
        <el-checkbox-group v-model="formData.field113" size="medium">
          <el-checkbox v-for="(item, index) in field113Options" :key="index" :label="item.value"
            :disabled="item.disabled">{{item.label}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      
      <el-form-item label="级联选择" prop="field112">
        <el-cascader v-model="formData.field112" :options="field112Options" :props="field112Props"
          :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
      </el-form-item>
      <el-row gutter="19">
        <el-col :span="17">
          <el-row type="flex" justify="space-between" align="top" gutter="24">
            <el-col :span="10">
              <el-form-item label="计数器" prop="field124">
                <el-input-number v-model="formData.field124" placeholder="计数器"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="计数器" prop="field125">
                <el-input-number v-model="formData.field125" placeholder="计数器"></el-input-number>
              </el-form-item>
            </el-col>
          </el-row>
        </el-col>
        <el-row gutter="19">
        </el-row>
        <el-form-item label="颜色选择" prop="field115" required>
          <el-color-picker v-model="formData.field115" size="medium"></el-color-picker>
        </el-form-item>
      </el-row>
      <el-form-item label="多行文本" prop="field117">
        <el-input v-model="formData.field117" type="textarea" placeholder="请输入多行文本"
          :autosize="{minRows: 4, maxRows: 4}" :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        field116: undefined,
        field113: [],
        field114: ["14:37:38", "15:37:38"],
        field118: [],
        field121: '00:14:40',
        field112: [],
        field124: undefined,
        field125: undefined,
        field115: '#551E1E',
        field117: undefined,
      },
      rules: {
        field116: [{
          required: true,
          message: '请选择下拉选择',
          trigger: 'change'
        }],
        field113: [{
          required: true,
          type: 'array',
          message: '请至少选择一个field113',
          trigger: 'change'
        }],
        field114: [{
          required: true,
          type: 'array',
          message: '请至少选择一个field114',
          trigger: 'change'
        }],
        field118: [{
          required: true,
          type: 'array',
          message: '请至少选择一个field118',
          trigger: 'change'
        }],
        field121: [{
          required: true,
          message: '请选择时间选择',
          trigger: 'change'
        }],
        field112: [{
          required: true,
          type: 'array',
          message: '请至少选择一个field112',
          trigger: 'change'
        }],
        field124: [{
          required: true,
          message: '计数器',
          trigger: 'blur'
        }],
        field125: [{
          required: true,
          message: '计数器',
          trigger: 'blur'
        }],
        field117: [{
          required: true,
          message: '请输入多行文本',
          trigger: 'blur'
        }],
      },
      field116Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field113Options: [{
        "label": "选项一",
        "value": 1
      }, {
        "label": "选项二",
        "value": 2
      }],
      field118Options: [],
      field112Options: [],
      field118Props: {
        "multiple": false
      },
      field112Props: {
        "multiple": false
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
    getField118Options() {
      // TODO 发起请求获取数据
      this.field118Options
    },
    getField112Options() {
      // TODO 发起请求获取数据
      this.field112Options
    },
  }
}

</script>
<style>
</style>
