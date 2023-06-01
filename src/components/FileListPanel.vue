<template>
    <div class="file-list-panel">
        <ul>
            <li v-for="file in fileList" :key="file.id">{{ file.name }}</li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'FileListPanel',
    props: ['fileList']
}
</script>
  
<style scoped>
.file-list-panel {
    padding: 10px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #eee;
    border-radius: 4px;
    cursor: pointer;
}
</style>
  