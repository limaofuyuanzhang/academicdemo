<template>
    <div class="app">
        <div class="left-panel">
            <ConversationPanel />
        </div>
        <div class="middle-panel">
            <ChatPanel :currentSession="currentSession" />
        </div>
        <div class="right-panel">
            <FileListPanel :currentSession="currentSession" />
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
            currentSession: null
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
    min-height: 100%;
    max-height: 100%;
    max-width: 20%;
    flex: 1;
}

.middle-panel {
    min-height: 100%;
    max-width: 60%;
    flex: 1;
}

.right-panel {
    min-height: 100%;
    max-width: 20%;
    flex: 1;
}
</style>