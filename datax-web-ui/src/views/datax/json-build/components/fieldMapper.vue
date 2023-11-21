<template>
  <div class="app-container">
    <el-form label-position="left" label-width="80px" :model="readerForm" style="display: flex;">
      <el-form-item label="源端字段">
        <el-checkbox
          v-model="readerForm.lcheckAll"
          :indeterminate="readerForm.lIsIndeterminate"
          @change="lHandleCheckAllChange"
        >全选</el-checkbox>
        <div style="margin: 15px 0;" />
        <div class="box-group">
          <el-checkbox-group v-model="fromChosedList" style="text-align: left;" @change="lHandleCheckedChange">
            <el-checkbox v-for="c in fromColumnsList" :key="c" style="display: block;" :label="c" :disabled="fromChosedList.length >= toColumnsList.length">{{ c }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form-item>
      <!-- <el-form-item label="目标字段">
        <el-checkbox
          v-model="readerForm.rcheckAll"
          :indeterminate="readerForm.rIsIndeterminate"
          @change="rHandleCheckAllChange"
        >全选</el-checkbox>
        <div style="margin: 20px 0;" />
        <div class="box-group">
          <el-checkbox-group v-model="readerForm.rcolumns" style="text-align: left;" @change="rHandleCheckedChange">
            <el-checkbox v-for="c in readerForm.rcolumns" :key="c" style="display: block;" :label="c">{{ c }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form-item> -->
      <div class="auto-map-btn">
        <!-- <el-button type="primary" style="margin-top: 30px;" @click="autoSort">一键排序</el-button> -->
        <el-button type="primary" style="margin-top: 30px;margin-left: 10px;" @click="autoMap">智能映射</el-button>
        <!-- <el-button type="primary" style="margin-top: 30px;" @click="autoMap">开启拖拽</el-button> -->

      </div>
      <div class="map-box">
        <div class="map-table">
          <div class="rlist">
            <div class="divider" />
            <div class="item-name" style="margin-top: 10px;text-align: center;">目标字段</div>
            <div class="divider" />
            <draggable v-model="toColumnsList" :scroll="true" chosen-class="chosen" class="list-group" animation="100" @start="onrStart" @end="onrEnd">
              <div v-for="(c,index) in toColumnsList" :key="index" :style="mapedList.includes(index) ? 'background-color: beige;':''" draggable="true" class="item">
                <div class="divider" />
                <div class="item-content">
                  <div class="item-name" style="margin-left: 15px;">{{ c }}</div>
                </div>
                <div class="divider" />
              </div>
            </draggable>
          </div>
          <div class="llist">
            <div class="divider" />
            <div class="item-name" style="margin-top: 10px;text-align: center;">源端字段</div>
            <div class="divider" />
            <draggable v-model="fromChosedList" :scroll="true" chosen-class="chosen" class="list-group" animation="100" @start="onlStart" @end="onlEnd">
              <div v-for="(c,index) in fromChosedList" :key="c" :style="mapedList.includes(index) ? 'background-color: beige;':''" draggable="true" class="item">
                <div class="divider" />
                <div class="item-content">
                  <div class="item-name" style="margin-left: 15px;">{{ c }}</div>
                  <el-button type="primary" size="mini" style="margin-right: 15px;" @click="editItem(c, 'l')">编辑</el-button>
                  <i class="el-icon-close" style="margin-right: 15px;cursor: pointer;" @click="toggleSelection(c, 'l')" />
                </div>
                <div class="divider" />
              </div>
            </draggable>
            <div v-if="fromChosedList.length < toColumnsList.length" class="item-content" style="display: block;text-align: center;padding-top: 10px;">
              <i class="el-icon-plus" style="cursor: pointer;" @click="addItem();" />
            </div>
            <div class="divider" />
          </div>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'FieldMapper',
  data() {
    return {
      mapperJson: {},
      fromColumnsList: [],
      fromChosedList: [],
      toColumnsList: [],
      toChosedList: [],
      readerForm: {
        lcolumns: [],
        rcolumns: [],
        lcheckAll: false,
        rcheckAll: false,
        lIsIndeterminate: true,
        rIsIndeterminate: true
      },
      mapedList: []
    }
  },
  mounted() {
  },
  methods: {
    lHandleCheckAllChange(val) {
      this.readerForm.lcolumns = val ? this.fromColumnsList : []
      this.fromChosedList = val ? this.fromColumnsList : []
      this.readerForm.lIsIndeterminate = false
      this.compareFromTo()
    },
    // rHandleCheckAllChange(val) {
    //   this.readerForm.rcolumns = val ? this.toColumnsList : []
    //   this.toChosedList = val ? this.toColumnsList : []
    //   this.readerForm.rIsIndeterminate = false
    // },
    lHandleCheckedChange(value) {
      const checkedCount = value.length
      this.readerForm.checkAll = checkedCount === this.fromColumnsList.length
      this.readerForm.lIsIndeterminate = checkedCount > 0 && checkedCount < this.fromColumnsList.length
      this.fromChosedList = value
      this.compareFromTo()
    },
    // rHandleCheckedChange(value) {
    //   const checkedCount = value.length
    //   this.readerForm.checkAll = checkedCount === this.toColumnsList.length
    //   this.readerForm.rIsIndeterminate = checkedCount > 0 && checkedCount < this.toColumnsList.length
    //   this.toChosedList = value
    // },
    toggleSelection(column, listType) {
      // if (listType === 'l') {
      // // 左侧列表
      //   const index = this.readerForm.lcolumns.indexOf(column)
      //   if (index !== -1) {
      //     this.fromChosedList.splice(index, 1)
      //     this.lHandleCheckedChange(this.fromChosedList)
      //   }
      // } else if (listType === 'r') {
      //   // 右侧列表
      //   const index = this.readerForm.rcolumns.indexOf(column)
      //   if (index !== -1) {
      //     this.toChosedList.splice(index, 1)
      //     this.rHandleCheckedChange(this.toChosedList)
      //   }
      // }
      const index = this.fromChosedList.indexOf(column)
      if (index !== -1) {
        this.fromChosedList.splice(index, 1)
        this.lHandleCheckedChange(this.fromChosedList)
      }

      // 更新全选状态和不确定状态
      this.updateCheckAllAndIndeterminate()
    },

    // 示例：更新全选状态和不确定状态的方法
    updateCheckAllAndIndeterminate() {
      const lCheckedCount = this.readerForm.lcolumns.length
      this.readerForm.lcheckAll = lCheckedCount === this.fromColumnsList.length
      this.readerForm.lIsIndeterminate = lCheckedCount > 0 && lCheckedCount < this.fromColumnsList.length

      // const rCheckedCount = this.readerForm.rcolumns.length
      // this.readerForm.rcheckAll = rCheckedCount === this.toColumnsList.length
      // this.readerForm.rIsIndeterminate = rCheckedCount > 0 && rCheckedCount < this.toColumnsList.length
    },
    autoMap() {
      if (this.fromChosedList.length === 0) {
        this.$message({
          message: '请先选择需要映射的字段'
        })
        return
      }
      this.mapedList = []
      this.autoSort()
      let count = 0
      for (let i = 0; i < this.toColumnsList.length; i++) {
        for (let j = 0; j < this.fromChosedList.length; j++) {
          if (this.compareStr(this.toColumnsList[i], this.fromChosedList[j])) {
            [this.toColumnsList[i], this.toColumnsList[count]] = [this.toColumnsList[count], this.toColumnsList[i]];
            [this.fromChosedList[j], this.fromChosedList[count]] = [this.fromChosedList[count], this.fromChosedList[j]]
            count++
          }
        }
      }
      this.lHandleCheckedChange(this.fromChosedList)
      this.compareFromTo()
    },
    autoSort() {
      this.fromColumnsList = this.fromColumnsList.sort()
      this.toColumnsList = this.toColumnsList.sort()
      if (this.fromChosedList.length > 0) {
        this.fromChosedList = this.fromChosedList.sort()
      }
    },
    onlStart() {
      console.log(this.fromChosedList)
    },
    onlEnd() {
      this.compareFromTo()
    },
    onrStart() {
      console.log(this.toChosedList)
    },
    onrEnd() {
      this.compareFromTo()
      console.log((this.mapedList))
    },
    editItem(column, listType) {
      this.open(column, listType)
      // if (listType === 'l') {
      // // 左侧列表
      //   const index = this.readerForm.lcolumns.indexOf(column)
      //   if (index !== -1) {
      //     this.fromChosedList.splice(index, 1)
      //     this.lHandleCheckedChange(this.fromChosedList)
      //   }
      // } else if (listType === 'r') {
      //   // 右侧列表
      //   const index = this.readerForm.rcolumns.indexOf(column)
      //   if (index !== -1) {
      //     this.toChosedList.splice(index, 1)
      //     this.rHandleCheckedChange(this.toChosedList)
      //   }
      // }
    },
    addItem() {
      this.fromChosedList.push('')
    },
    compareFromTo() {
      this.mapedList = []
      for (let i = 0; i < this.fromChosedList.length; i++) {
        if (this.compareStr(this.fromChosedList[i], this.toColumnsList[i])) {
          this.mapedList.push(i)
        }
      }
    },
    compareStr(str1, str2) {
      const lstr = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
      const rstr = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
      return lstr === rstr
    },
    open(column, listType) {
      this.$prompt('请输入修改字段', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: column
      }).then(({ value }) => {
        // if (listType === 'l') {
        //   const index = this.readerForm.lcolumns.indexOf(column)
        //   this.fromChosedList[index] = value
        // } else if (listType === 'r') {
        //   const index = this.readerForm.rcolumns.indexOf(column)
        //   this.toChosedList[index] = value
        // }
        const index = this.fromChosedList.indexOf(column)
        if (index !== -1) {
          this.fromChosedList[index] = value
          this.$forceUpdate()
          this.$message({
            type: 'success',
            message: '修改成功'
          })
        } else {
          this.fromChosedList.push(value)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    getLColumns() {
      return this.fromChosedList
    },
    getRColumns() {
      return this.toColumnsList
    }
  }
}
</script>
<style lan="scss" scoped>

.app-container {
  width: 100%;
  height: 100%;
  text-align: center;
}
.box-group {
  max-height: 700px;
  overflow: auto;
}
.auto-map-btn {
  margin-left: 55px;
}
.map-box {
  width: 70%;
  margin-left: 100px;
}
.map-table {
  display: flex;
  max-height: 700px;
  overflow: auto;
}
.rlist {
  border-right: 1px solid #ccc;
}
.item {
  width: 400px;
  cursor: move;
}
.item-content {
  display: flex;
  height: 40px;
  align-items: center;
}
.item-name {
  width: 380px;
  max-width: 380px;
  overflow: auto;
  text-align: left;
}
.divider {
  height: 1px; /* 分割线高度 */
  background-color: #ccc; /* 分割线颜色 */
}
.list-item.moving{
  background-color: transparent;
  border: 2px dashed #ccc;
}
.list-item.moving img,
.list-item.moving span{
  display: none;
}
.chosen {
  background-color: transparent;
  border: 2px dashed #ccc;
}
</style>
