<template>
    <div class="file-list-panel">
        <ul>
            <!-- 文件列表不为空时渲染 -->
            <li v-for="file in currentSession.fileList" :key="file.id">
                <span class="file-name" title="{{file.name}}">{{ file.name }}</span>
            </li>
        </ul>
        <input type="file" ref="fileInput" style="display:none" @change="uploadFile">
        <button :class="['upload-button', { 'uploading': loading }]" :disabled="loading" @click="openFilePicker">
            {{ loading ? '上传中...' : '添加文件' }}
        </button>
    </div>
</template>
  
<script>
// 在export default之外声明uploadAPI函数
async function uploadAPI(file) {
    // 模拟上传文件的异步操作
    return new Promise(resolve => {
        setTimeout(() => {
            const fileId = String(Date.now()); // 文件 ID 赋值为当前时间戳
            resolve({ id: fileId }); // 返回上传后得到的文件 ID
        }, 2000);
    })
}

export default {
    name: 'FileListPanel',
    props: ['currentSession'],
    data() {
        return {
            loading: false // 添加loading状态
        }
    },
    computed: {
        uploadButtonClass() {
            return [
                'upload-button',
                { 'uploading': this.loading },
                { 'disabled': this.loading }
            ];
        }
    },
    methods: {
        openFilePicker() {
            // 打开文件选择器
            this.$refs.fileInput.click();
        },
        async uploadFile(event) {
            const file = event.target.files[0];
            // 设置loading状态为true，表示正在上传
            this.loading = true;
            // 调用上传 API 将文件上传至服务器
            const response = await uploadAPI(file);
            const newFile = {
                id: response.id, // 上传后得到的文件 ID
                name: file.name,
                size: file.size
                // 其他文件信息...
            };
            // 将新文件添加至文件列表
            this.currentSession.fileList.push(newFile);
            // 上传完成后将loading状态改回false
            this.loading = false;
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

.file-name {
    flex: 1;
    white-space: nowrap;
    /* 不换行 */
    overflow: hidden;
    /* 超出隐藏 */
    text-overflow: ellipsis;
    /* 显示省略号 */
}

.upload-button {
    width: 165px;
    padding: 10px;
    background-color: #409EFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    transition: all .3s ease;
}

.uploading {
    background-color: #c6c6c6;
    cursor: not-allowed;
}

.disabled {
    opacity: .5;
    cursor: not-allowed;
}
</style>
