<template>
    <div class="app">
        <div class="left-panel">
            <ConversationPanel />
        </div>
        <div class="middle-panel">
            <ChatPanel :currentSession="currentSession" />
        </div>
        <div class="right-panel">
            <FileListPanel :fileList="currentSession.fileList" />
        </div>
    </div>
</template>
  
<script>
import ConversationPanel from '../components/ConversationPanel.vue';
import ChatPanel from '../components/ChatPanel.vue';
import FileListPanel from '../components/FileListPanel.vue';

export default {
    name: 'Assistant',
    components: { ConversationPanel, ChatPanel, FileListPanel },
    data() {
        return {
            currentSession: {
                id: 1,
                title: '会话1',
                chatList: [],
                fileList: []
            }
        }
    }
}
</script>
  
<style scoped>
.app {
    display: flex;
    flex-direction: row;
    min-height: 100%;
    width: 100%;
}

.left-panel {
    max-width: 20%;
    max-height: 800px;
    flex: 1;
}

.middle-panel {
    max-width: 60%;
    max-height: 800px;
    flex: 1;
}

.right-panel {
    max-width: 20%;
    max-height: 800px;
    flex: 1;
}
</style>