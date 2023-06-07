<template>
    <div class="conversation-panel">
        <!-- <h2>会话列表</h2> -->
        <div class="conversation-list">
            <div v-for="(session, index) in sessionList" :key="index" class="conversation-item"
                @click="changeCurrentSession(session)">
                {{ session.title }}
            </div>
        </div>
        <button class="new-conversation-btn" @click="createNewSession">新建会话</button>
    </div>
</template>
  
<script>
export default {
    name: 'ConversationPanel',
    props: ['sessionList'],
    methods: {
        createNewSession() {
            try {
                const newSession = {
                    id: this.sessionList.length + 1,
                    title: `对话${this.sessionList.length + 1}`,
                    chatList: [],
                    fileList: []
                };
                console.log(newSession)
                // 在父组件中调用 refreshSessionList 方法
                this.$emit('refreshSessionList', newSession);
            } catch (error) {
                console.error(error);
                // 在这里可以添加错误处理的逻辑
            }
        },
        changeCurrentSession(session) {
            try {
                this.$emit('changeCurrentSession', session);
                console.log(session);
            } catch (error) {
                console.error(error);
                // 在这里可以添加错误处理的逻辑
            }
        },
        refresh() {
            // 强制重新渲染组件
            this.$forceUpdate();
        }
    }
};
</script>
  
<style scoped>
.conversation-panel {
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border-right: 1px solid #ddd;
    overflow: auto;
    height: 100%;
    position: relative;
}

.conversation-list {
    margin-bottom: 10px;
}

.conversation-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: 0 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
}

.new-conversation-btn {
    width: 165px;
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
  