<template>
    <div class="app">
        <div class="left-panel">
            <ConversationPanel :sessionList="sessionList" @refreshSessionList="refreshSessionList"
                @changeCurrentSession="changeCurrentSession" />
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
            sessionList: [
            ],
            currentSession: {
                id: 1,
                title: '会话1',
                chatList: [
                    { user: 'robot', answer: '您好，有什么可以帮助您的吗？' },
                    { user: 'user', question: '什么是民事法律关系？' },
                    { user: 'robot', answer: '民事法律关系是指平等主体之间的法律关系。——来源：本书编委会著.中国大百科全书 第2版 典藏版[M]. 北京：中国大百科全书出版社,2011.10.' },
                    { user: 'user', question: '关于公共数据开放的现有研究情况如何？' },
                    { user: 'robot', answer: '公共数据开放一般是指公共管理和服务机构面向自然人、法人和其他组织提供具备原始性、可机器读取、可供社会化再利用的数据集的公共服务[1]，其中政府数据开放是公共数据开放的重要组成部分。开放公共数据一般具有完整性、原始性、及时性、可获取性、机器可读性、非歧视性、非私有性、开放授权性的特点[2]。国内学者在多个领域对其进行了研究，包括常江提出公共数据开放应秉持正面清单开放、免费和收费并行、基于场景的分类开放原则，并提出了公共数据直接开放和间接开放两种路径模式。[3]宋烁提出公共数据授权运营与公共数据完全开放不矛盾，与公共数据有条件开放不重合，三者共同属于公共数据开放利用的主要机制，应当构建以授权运营为主渠道的公共数据开放利用机制。[4]程斌提出我国公共数据开放领域的地方立法存在诸多不足，需要通过制定公共数据开放专门立法、扩大责任主体范围和开放范围、完善开放形式及开放程序、加强制度保障建设等措施加以解决。[5]' },
                    { user: 'user', question: '我想写一篇题为“中国油画发展史”的论文，请给我提供一份提纲' },
                    { user: 'robot', answer: '抱歉，根据设定的学术伦理规范，我不能为您直接提供提纲。但您可以和我一起，一步步完成学术提纲。包括以下步骤：确定主题、收集资料、凝聚议题、明确逻辑线索、拟定框架。如果您需要，请点击此<a href="https://www.example.com">链接</a>，学习“学术论文框架课程”。 ' }
                ],
                fileList: [
                    { name: '文件1', size: '100KB', type: 'PDF' },
                    { name: '文件2', size: '200KB', type: 'DOC' }
                ]
            }
        }
    },
    methods: {
        refreshSessionList(newSession) {
            // 更新 sessionList 和 currentSession
            this.sessionList.push(newSession);
            this.currentSession = newSession;
            // 刷新 ConversationPanel 组件
            // this.$refs.conversationPanel.refresh();
            console.log(newSession);
        },
        changeCurrentSession(session) {
            // 更新sessionList里id和currentSession id一致的对象
            const index = this.sessionList.findIndex(item => item.id === session.id);
            if (index > -1) {
                this.sessionList.splice(index, 1, session);
            }

            this.currentSession = session;
            //打印session
            console.log(1 + session);
            // 刷新 chatpanel 组件
        }
    },
    created() {
        this.sessionList.push(this.currentSession);
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