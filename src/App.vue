<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ElButton, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'

</script>

<!-- <template>
  <div class="wrapper">
    <router-link to="/editor">论文编辑</router-link>
    <router-link to="/assistant">问答助手</router-link>
    <router-link to="/other">其他功能</router-link>
    <router-link to="/account">个人中心</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped></style> -->
<template>
  <div class="wrapper">
    <el-menu class="menu" mode="vertical" background-color="#fff" text-color="#000" active-text-color="#f00" router>
      <el-menu-item index="/editor" class="menu-item">论文编辑</el-menu-item>
      <el-menu-item index="/assistant" class="menu-item">问答助手</el-menu-item>
      <el-menu-item index="/other" class="menu-item">其他功能</el-menu-item>
      <el-menu-item index="/account" class="menu-item">个人中心</el-menu-item>

    </el-menu>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}

.menu {
  width: 200px;
  border: 1px solid #ddd;
  min-height: 100%;
}

.menu-item {
  padding: 10px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: #eee;
}

.main {
  width: 1080px;
  height: 800px;
  /* padding: 20px; */
  border: 1px solid #ddd;
}
</style>