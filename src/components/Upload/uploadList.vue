<template>
  <div class="upload-container">

    <el-upload
      :action="action"
      list-type="picture-card"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :file-list="list"
      :limit="limit">
     <div style="display: flex;flex-direction: column">
       <i v-if="!title" class="el-icon-plus"></i>

       <span>{{title}}</span>
     </div>
    </el-upload>
    <!--<el-dialog :visible.sync="dialogVisible">-->
      <!--<img :src="dialogImageUrl" alt="">-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
  import { getArrByKey } from '@/utils'
  import myconfig from '@/config'

  export default {
    name: 'ImageUpload',
    props: {
      list: {
        type: Array,
        default: []
      },
      type:{
        type:String,
        default:'1'
      },
      title:{
        type:String,
        default:undefined
      },
      limit: {
        type: Number,
        default: 10
      }
    },
    data() {
      return {

        action: myconfig.uploadUrl.img

      }
    },
    computed: {},
    created() {

    },
    methods: {
      handleSuccess(file, fileList) {
        var temp = {
          file
        }
        this.$emit('HandelFile', temp)
      },
      handleRemove(file, fileList) {
        var arr = []
        for (let i = 0; i < fileList.length; i++) {

          arr.push({ url: fileList[i].url, shop_id: fileList[i].shop_id })
        }
        this.$emit('HandelRemove', arr)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      }

    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .upload-container > > > .el-upload--picture-card {
    width: 70px;
    height: 70px;
    line-height: 90px;
  }

  .upload-container > > > .el-upload-list--picture-card .el-upload-list__item {
    width: 70px;
    height: 70px;
  }

  .upload-container {
    /*width: 70px;*/
    height: 70px;
  }

  .image-uploader {
    .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      width: 70px;
      height: 70px;
      .el-upload-dragger {
        height: 100%;
      }
      &:hover {
        border-color: #409EFF;
      }
    }
    .el-upload-list__item {
      width: 160px;
      height: 160px;
    }
    .image {
      width: 178px;
      height: 178px;
      display: block;
    }
    .image-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 70px;
      height: 70px;
      line-height: 70px;
      text-align: center;
    }

  }
</style>
