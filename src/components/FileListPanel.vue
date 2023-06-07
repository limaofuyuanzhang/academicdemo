<template>
    <div class="file-list-panel">
        <ul>
            <!-- 文件列表不为空时渲染 -->
            <li v-if="fileList && fileList.length > 0" v-for="file in fileList" :key="file.id">{{ file.name }}</li>
            <!-- 文件列表为空时渲染 -->
            <li v-else>文件1</li>
            <li v-else>文件2</li>
        </ul>
        <input type="file" ref="fileInput" style="display:none" @change="uploadFile">
        <button @click="openFilePicker">添加文件</button>
    </div>
</template>
  
<script>
export default {
    name: 'FileListPanel',
    props: ['fileList'],
    methods: {
        openFilePicker() {
            // 打开文件选择器
            this.$refs.fileInput.click();
        },
        async uploadFile(event) {
            const file = event.target.files[0];
            // 调用上传 API 将文件上传至服务器
            // const response = await uploadAPI(file);
            const newFile = {
                id: response.id, // 上传后得到的文件 ID
                name: file.name,
                size: file.size
                // 其他文件信息...
            };
            // 将新文件添加至文件列表
            this.fileList.push(newFile);
        },
    }
};
</script>
  
<style scoped>
.file-list-panel {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border-right: 1px solid #ddd;
    overflow: auto;
    height: 100%;
    position: relative;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
}

li {
    display: flex;
    align-items: center;
    justify-content: left;
    height: 32px;
    padding: 0 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
}

button {
    width: 195px;
    padding: 10px;
    background-color: #409EFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
}
</style>
  