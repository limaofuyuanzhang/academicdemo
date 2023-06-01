<template>
    <div class="chat-panel">
        <div class="chat-list">
            <div v-if="currentSession && Array.isArray(currentSession.chatList)">
                <div v-for="(chat, index) in currentSession.chatList" :key="index" class="chat-item">
                    <div v-if="chat.user === 'user'" class="question">{{ chat.question }}</div>
                    <div v-else class="answer">{{ chat.answer }}</div>
                </div>
            </div>
        </div>
        <div class="ask-panel">
            <input type="text" v-model="currentQuestion" class="question-input" placeholder="请输入问题">
            <button @click="ask" class="ask-btn">提问</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ChatPanel',
    props: ['currentSession'],
    data() {
        return {
            currentQuestion: ''
        }
    },
    computed: {
        currentChatList() {
            return this.currentSession && Array.isArray(this.currentSession.chatList) ? this.currentSession.chatList : [];
        }
    },
    methods: {
        ask() {
            const question = this.currentQuestion.trim();
            if (question) {
                const answer = this.getAnswer(question);
                this.currentSession.chatList.push({ user: 'user', question });
                this.currentSession.chatList.push({ user: 'robot', answer });
                this.currentQuestion = '';
            }
        },
        getAnswer(question) {
            switch (question) {
                case '问题1':
                    return '回答1';
                case '问题2':
                    return '回答2';
                case '问题3':
                    return '回答3';
                case '问题4':
                    return '回答4';
                default:
                    return '抱歉，该问题暂时无法回答';
            }
        }
    }
}
</script>
  
<style scoped>
.chat-panel {
    flex: 1;
    padding: 10px;
    overflow: auto;
    height: 100%;
    position: relative;
}

.chat-list {
    margin-bottom: 10px;
    height: 90%;
    border: 1px solid #999;
    /* padding: 0 20px; */

}

.chat-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

.question {
    align-self: flex-start;
    background-color: #ddd;
    padding: 5px;
    border-radius: 4px;
    max-width: 80%;
}

.answer {
    align-self: flex-end;
    background-color: #409EFF;
    color: #fff;
    padding: 5px;
    border-radius: 4px;
    max-width: 80%;
}

.ask-panel {
    display: flex;
    /* align-items: center; */
    position: absolute;
    bottom: 10px;
    width: 100%;
    padding: 0 0px;
}

.question-input {
    flex: 1;
    height: 39px;
    padding: 0 10px;
    border: 1px solid #999;
    border-radius: 4px;
    margin-right: 10px;
}

.ask-btn {
    width: 50px;
    padding: 10px;
    background-color: #409EFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    height: 39px;

}
</style>
  