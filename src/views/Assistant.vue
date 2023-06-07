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
                {
                    id: 1,
                    title: '对话1-概念问答',
                    chatList: [
                        { user: 'robot', answer: '您好，有什么可以帮助您的吗？' },
                        { user: 'user', question: '什么是民事法律关系？' },
                        { user: 'robot', answer: '民事法律关系是指平等主体之间的法律关系。——来源：本书编委会著.中国大百科全书 第2版 典藏版[M]. 北京：中国大百科全书出版社,2011.10.' },
                        { user: 'user', question: '关于公共数据开放的现有研究情况如何？' },
                        { user: 'robot', answer: '公共数据开放一般是指公共管理和服务机构面向自然人、法人和其他组织提供具备原始性、可机器读取、可供社会化再利用的数据集的公共服务[1]，其中政府数据开放是公共数据开放的重要组成部分。开放公共数据一般具有完整性、原始性、及时性、可获取性、机器可读性、非歧视性、非私有性、开放授权性的特点[2]。国内学者在多个领域对其进行了研究，包括常江提出公共数据开放应秉持正面清单开放、免费和收费并行、基于场景的分类开放原则，并提出了公共数据直接开放和间接开放两种路径模式。[3]宋烁提出公共数据授权运营与公共数据完全开放不矛盾，与公共数据有条件开放不重合，三者共同属于公共数据开放利用的主要机制，应当构建以授权运营为主渠道的公共数据开放利用机制。[4]程斌提出我国公共数据开放领域的地方立法存在诸多不足，需要通过制定公共数据开放专门立法、扩大责任主体范围和开放范围、完善开放形式及开放程序、加强制度保障建设等措施加以解决。[5]' },
                        { user: 'user', question: '我想写一篇题为“中国油画发展史”的论文，请给我提供一份提纲' },
                        { user: 'robot', answer: '抱歉，根据设定的学术伦理规范，我不能为您直接提供提纲。但您可以和我一起，一步步完成学术提纲。包括以下步骤：确定主题、收集资料、凝聚议题、明确逻辑线索、拟定框架。如果您需要，请点击此<a href="https://zhuanlan.zhihu.com/p/44697626 target="_blank">链接</a>，学习“学术论文框架课程”。 ' }
                    ],
                    fileList: []
                },
                {
                    id: 2,
                    title: '对话2-论文',
                    chatList: [
                        { user: 'robot', answer: '您好，有什么可以帮助您的吗？' },
                        { user: 'user', question: '我上传了一篇论文，请帮我总结一下其中的核心内容。' },
                        { user: 'robot', answer: '好的，这篇论文是关于人工智能治理主题，作者总结了最近20年的相关研究进展，并且提出了以下新的治理思路。。。。' }
                    ],
                    fileList: [
                        { name: '人工智能史综述.pdf', size: '100KB', type: 'PDF' }
                    ]
                },
                {
                    id: 3,
                    title: '对话2-书籍',
                    chatList: [
                        { user: 'robot', answer: '您好，有什么可以帮助您的吗？' },
                        { user: 'user', question: '我上传了一本书，帮我总结一下核心内容' },
                        { user: 'robot', answer: '好的…..' },
                        { user: 'user', question: '其中第三章挺有意思的，和我具体说说。' },
                        { user: 'robot', answer: '好的，。。。。。' },
                        { user: 'user', question: '作者认为人工智能可能破坏发展公平，这个观点来自哪一页，把原文给我看看。' },
                        { user: 'robot', answer: '好的，来自第三章第五节，PDF第7页，这是原文。。。。' },
                        { user: 'user', question: '书里面有没有对人工智能进行定义？书里的定义是什么样的？' },
                        { user: 'robot', answer: '有的，书里所说的人工智能是指。。。。（来源：提供注释，如果PDF版本，说明多少页，如果文本版本，说明第几章第几节，方便引用）' },
                    ],
                    fileList: [
                        { name: '人工智能伦理.pdf', size: '100KB', type: 'PDF' }
                    ]
                },
                {
                    id: 4,
                    title: '对话4-学术报告',
                    chatList: [
                        { user: 'robot', answer: '您好，有什么可以帮助您的吗？' },
                        { user: 'user', question: '这是我的论文终稿，请帮我输出AIGC使用情况学术规范审查报告' },
                        {
                            user: 'robot', answer: `
好的。<br>

<h>1.基本情况<h>
论文字数：21405<br>
通过AI助手收集论文149篇，书籍11本，其中作者自行阅读全文13篇、11本，具体内容可点击本<a href="https://zhuanlan.zhihu.com/p/44697626 target="_blank">链接</a>展开。论文终稿中直接使用AIGC生成的文字共2349字,文献综述涉及的文献共50篇，其中作者亲自阅读了11篇原文。作者使用AI助手进行了校对，修改了45处语法错误与12处错别字。<br><br>

<h>2.Anti-AI检查<h><br>
作者除本AI助手生成的内容外，还有4200字疑似使用了其他AIGC工具，疑似度94.5%，具体内容可点击本<a href="https://zhuanlan.zhihu.com/p/44697626 target="_blank">链接</a>展开。<br><br>

<h>3.其他学术规范检查：<h><br>
作者有27处文字与数据库现有文献重复，但未标明注释，具体内容可点击本<a href="https://zhuanlan.zhihu.com/p/44697626 target="_blank">链接</a>展开。<br><br>

<h>4.总结建议<h><br>
（1）作者对于原始文献的查阅确认不足，建议加强。<br>（2）作者语法错误较多，建议加强语法训练。点击本链接跳转“学术论文写作语法课程”。<br>（3）作者部分内容怀疑通过其他AIGC工具生成，建议作者提出解释。<br>（4）作者有部分文献重复但并未标明出处，建议完善学术规范。<br><br>

<h>5.详细情况<h><br>
类似知网查重报告，全文展开。用不同颜色标明了，哪些是作者原文复制的AI助手生成材料，其中哪些部分作者看了原文，哪些没看原文直接复制；哪些是作者疑似使用的其他AIGC工具生成的文字；哪些是AI助手帮作者校对的；哪些是作者和其他文献有重复但是没有标明注释的。<br><br>
                        ` },

                    ],
                    fileList: [
                        { name: '中国陶瓷史研究.pdf', size: '100KB', type: 'PDF' }
                    ]
                },

            ],
            currentSession: {

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
        // this.sessionList.push(this.currentSession);
        this.currentSession = this.sessionList[0]
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
    max-height: 600px;
    flex: 1;
}

.middle-panel {
    max-width: 60%;
    max-height: 600px;
    flex: 1;
}

.right-panel {
    max-width: 20%;
    max-height: 600px;
    flex: 1;
}
</style>