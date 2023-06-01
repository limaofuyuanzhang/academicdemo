<template>
    <div class="conversation-panel">
        <!-- <h2>会话列表</h2> -->
        <div class="conversation-list">
            <div v-for="(session, index) in sessionList" :key="index" class="conversation-item"
                @click="changeSession(session)">
                {{ session.title }}
            </div>
        </div>
        <button class="new-conversation-btn" @click="createNewSession">新建会话</button>
    </div>
</template>
  
<script>
export default {
    name: 'ConversationPanel',
    data() {
        return {
            sessionList: [
                {
                    id: 1,
                    title: '会话1',
                    chatList: [
                        { question: '问题1', answer: '回答1' },
                        { question: '问题2', answer: '回答2' }
                    ],
                    fileList: [
                        { name: '文件1', size: '100KB', type: 'PDF' },
                        { name: '文件2', size: '200KB', type: 'DOC' }
                    ]
                },
                {
                    id: 2,
                    title: '会话2',
                    chatList: [
                        { question: '问题3', answer: '回答3' },
                        { question: '问题4', answer: '回答4' }
                    ],
                    fileList: []
                }
            ]
        }
    },
    methods: {
        createNewSession() {
            const newSession = {
                id: this.sessionList.length + 1,
                title: `会话${this.sessionList.length + 1}`,
                chatList: [],
                fileList: []
            };
            this.sessionList.push(newSession);
            this.changeSession(newSession);
        },
        changeSession(session) {
            this.$emit('changeSession', session);
        }
    }
}
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
  