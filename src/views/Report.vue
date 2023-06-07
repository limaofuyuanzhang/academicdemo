<template>
    <div>
        <div v-if="file">
            <h2>文件名：{{ fileName }}</h2>
            <button @click="uploadFile">上传文件</button>
            <button @click="generateReport">生成报告</button>
        </div>
        <div v-else>
            <h2>文件名：论文待上传</h2>
            <button @click="uploadFile">上传文件</button>
        </div>
        <div v-html="report"></div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'Report',
    data() {
        return {
            file: null,
            fileName: '',
            report: '',
        };
    },
    methods: {
        async uploadFile() {
            try {
                const formData = new FormData();
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.onchange = () => {
                    if (fileInput.files.length > 0) {
                        formData.append('file', fileInput.files[0]);
                        this.file = fileInput.files[0];
                        this.fileName = this.file.name;
                    }
                };
                fileInput.click();

                await axios.post('/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${this.getToken()}`,
                    },
                });
            } catch (error) {
                console.error(error);
                alert('上传文件失败');
            }
        },
        async generateReport() {
            this.report = ''
            // try {
            //     const response = await axios.post('/api/generate-report', {
            //         fileName: this.file.name,
            //     }, {
            //         headers: {
            //             Authorization: `Bearer ${this.getToken()}`,
            //         },
            //     });

            //     this.report = response.data;
            // } catch (error) {
            //     console.error(error);
            //     alert('生成报告失败');
            // }
        },
        getToken() {
            // 获取授权令牌
            // ...
        },
    },
};
</script>
  