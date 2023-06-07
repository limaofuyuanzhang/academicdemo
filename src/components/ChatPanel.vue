<template>
    <div class="chat-panel">
        <div class="chat-list">
            <div v-if="currentSession && Array.isArray(currentSession.chatList)">
                <div v-for="(chat, index) in currentSession.chatList" :key="index" class="chat-item">
                    <div v-if="chat.user === 'user'" class="question" v-html="chat.question" target="_blank"></div>
                    <div v-else class="answer" v-html="chat.answer" target="_blank"></div>
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
import axios from 'axios';
async function getOpenAIAnswer(question) {
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const prompt = `Please provide answer to the following question: ${question}`;
    const data = {
        prompt,
        max_tokens: 100,
        temperature: 0.5,
        n: 1,
        stop: '\n',
    };
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer api`,
    };
    const response = await axios.post(apiUrl, data, { headers });
    return response.data.choices[0].text.trim();
}

export default {
    name: 'ChatPanel',
    props: ['currentSession'],
    data() {
        return {
        }
    },
    computed: {
        currentChatList() {
            return this.currentSession && Array.isArray(this.currentSession.chatList) ? this.currentSession.chatList : [];
        }
    },
    methods: {
        scrollToBottom() {
            setTimeout(() => {
                const chatPanel = document.querySelector('.chat-list');
                chatPanel.scrollTop = chatPanel.scrollHeight;
            }, 0);
        },
        ask() {
            const question = this.currentQuestion.trim();
            if (question) {
                const answer = this.getAnswer(question);
                this.currentSession.chatList.push({ user: 'user', question });
                this.currentSession.chatList.push({ user: 'robot', answer });
                this.currentQuestion = '';
                this.scrollToBottom(); // 新答案显示时自动滚动到底部
            }
        },

        async getAnswer(question) {
            if (this.currentSession.fileList.length > 0) {
                if (question.includes('论文') && question.includes('核心内容')) {
                    return '好的，这篇论文是关于人工智能治理主题，作者总结了最近20年的相关研究进展，并且提出了以下新的治理思路。。。。'
                } else if (question.includes('书') && question.includes('核心内容')) {
                    return '好的…..'
                } else if (question.includes('具体说说')) {
                    return '好的…..'
                } else if (question.includes('人工智能') && question.includes('哪一页')) {
                    return '好的，来自第三章第五节，PDF第7页，这是原文。。。。'
                } else if (question.includes('定义') && question.includes('书里的定义')) {
                    return '有的，书里所说的人工智能是指。。。。（来源：提供注释，如果PDF版本，说明多少页，如果文本版本，说明第几章第几节，方便引用）'
                } else {
                    return '抱歉，该问题暂时无法回答';
                }
            } else {
                if (question.includes('民事法律关系')) {
                    return '民事法律关系是指平等主体之间的法律关系。——来源：本书编委会著.中国大百科全书 第2版 典藏版[M]. 北京：中国大百科全书出版社,2011.10.';
                } else if (question.includes('公共数据开放')) {
                    return '公共数据开放一般是指公共管理和服务机构面向自然人、法人和其他组织提供具备原始性、可机器读取、可供社会化再利用的数据集的公共服务[1]，其中政府数据开放是公共数据开放的重要组成部分。开放公共数据一般具有完整性、原始性、及时性、可获取性、机器可读性、非歧视性、非私有性、开放授权性的特点[2]。国内学者在多个领域对其进行了研究，包括常江提出公共数据开放应秉持正面清单开放、免费和收费并行、基于场景的分类开放原则，并提出了公共数据直接开放和间接开放两种路径模式。[3]宋烁提出公共数据授权运营与公共数据完全开放不矛盾，与公共数据有条件开放不重合，三者共同属于公共数据开放利用的主要机制，应当构建以授权运营为主渠道的公共数据开放利用机制。[4]程斌提出我国公共数据开放领域的地方立法存在诸多不足，需要通过制定公共数据开放专门立法、扩大责任主体范围和开放范围、完善开放形式及开放程序、加强制度保障建设等措施加以解决。[5]';
                } else if (question.includes('中国油画发展史')) {
                    return '抱歉，根据设定的学术伦理规范，我不能为您直接提供提纲。但您可以和我一起，一步步完成学术提纲。包括以下步骤：确定主题、收集资料、凝聚议题、明确逻辑线索、拟定框架。如果您需要，请点击此<a href="https://www.example.com">链接</a>，学习“学术论文框架课程”。';
                } else {
                    // 调用 OpenAI 接口获取回答
                    try {
                        const answer = await getOpenAIAnswer(question);
                        return answer;
                    } catch (error) {
                        console.error(error);
                        return '抱歉，无法获取答案';
                    }
                }
            }
        }

    },
    created() {

        // if (this.currentSession && Array.isArray(this.currentSession.chatList)) {
        //     this.currentSession.chatList.push(...this.chatList);
        // }
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
    height: 93%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px 20px;
    overflow: auto;

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
    left: 10px;
    right: 10px;
    /* width: 100%; */
    /* padding: 0 0px; */
}

.question-input {
    /* flex: 1; */
    width: 85%;
    height: 39px;
    padding: 0 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.ask-btn {
    width: 80px;
    padding: 10px;
    background-color: #409EFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    height: 39px;
    position: absolute;
    right: 0px;

}
</style>
  