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
                        { user: 'user', question: '你好' },
                        { user: 'robot', answer: '您好，有什么可以帮到您的吗？' },
                        { user: 'user', question: '什么是民事法律关系？' },
                        { user: 'robot', answer: '民事法律关系是指公民、法人或其他组织因民事行为而发生的相互关系。在民事法律关系中，各方之间应当遵守法律规定，履行自己的权利和义务。民事法律关系的各方主体可以是自然人、法人、非法人组织等，其主要内容包括财产权利、人身权利、合同关系和侵权责任关系等多方面内容。<br><br>财产权利是民事法律关系中最重要的一个方面，包括所有权、用益物权和担保物权等权利。人身权利则是指个人的身体、生命、健康以及名誉、荣誉、隐私等方面的权利。合同关系是指各当事人之间通过协商达成的法律关系，是最常见的民事法律关系类型之一。侵权责任关系则指违反法律规定、侵犯他人合法权益而导致的法律关系，包括侵权行为、侵权损害和侵权责任等内容。<br><br>参考文献：<br>中华人民共和国民法典：<a href="http://www.npc.gov.cn/npc/c30834/202006/75ba6483b8344591abd07917e1d25cc8.shtml" target="_blank" style ="color:blue">中华人民共和国民法典链接</a>' },
                        { user: 'user', question: '关于公共数据开放的现有研究情况如何？' },
                        { user: 'robot', answer: '首先，公共数据开放对经济社会发展具有积极的推动作用和经济效益。例如，政府开放数据可以促进市场竞争和新业态的发展，提高社会效率和创新能力[1]。此外，开放数据还可以促进政府治理的公开透明，增强政府与公众之间的互动和信任度[1]。<br><br>其次，在公共数据开放的过程中，也需要考虑数据质量和数据安全问题。由于公共数据的来源和性质的多样性，公共数据中存在的问题也较为复杂，如数据缺失、数据质量不高等问题。同时，数据安全问题也是公共数据开放过程中必须要解决的一个问题[2]。<br><br>因此，研究者提出了数据治理的概念，以解决公共数据开放过程中的问题。数据治理包括数据质量管理、数据分类管理、数据安全管理等一系列管理措施，旨在保证公共数据的质量和安全，并为数据的开放和利用提供保障和便利[3]。<br><br>最后，在公共数据开放过程中，涉及到多方利益相关者，如政府、企业、个人等。各方的利益会产生冲突，需要进行合理的利益调整和权衡[4]。因此，需要建立合理的利益调整机制，协调各方的合法权益，实现公共数据得到有效利用和管理，并为社会经济发展提供有力支持[4]。<br><br>综上所述，公共数据开放既有积极的推动作用和经济效益，也存在数据质量和数据安全等问题，需要进行有效的数据治理，同时需要建立合理的利益调整机制，以实现公共数据的有效利用和管理，为社会经济发展提供有力支持。<br><br>[1] 李琳,葛玉波. 评估政府开放数据对城市可持续发展的影响机制[J]. 环境科学, 2017, 38(1):81-88.<br><br>[2] 杨福海,卢杏花. 政府数据安全与保护问题厘析[J]. 政务信息化, 2018, (10):48-51.<br><br>[3] 李居仁,鲁晓玲. 数据治理研究综述[J]. 图书情报工作, 2016, (5):22-29.<br><br>[4] 赵东旭,胡遂林. 开放数据的利益相关者及其关系与合理调整[J]. 图书情报工作, 2016, (15):95-99.' },
                        { user: 'user', question: '我想写一篇题为“中国油画发展史”的论文，请给我提供一份提纲' },
                        { user: 'robot', answer: '抱歉，根据设定的学术伦理规范，我不能为您直接提供提纲。但您可以和我一起，一步步完成学术提纲。包括以下步骤：确定主题、收集资料、凝聚议题、明确逻辑线索、拟定框架。如果您需要，请点击此<a href="https://zhuanlan.zhihu.com/p/44697626 target="_blank" style ="color:blue">链接</a>，学习“学术论文框架课程”。 ' }
                    ],
                    fileList: []
                },
                {
                    id: 2,
                    title: '对话2-论文',
                    chatList: [
                        { user: 'user', question: '你好' },
                        { user: 'robot', answer: '您好，有什么可以帮助您的吗？' },
                        { user: 'user', question: '请阅读论文，并为我整理出论文表达的核心观点；' },
                        { user: 'robot', answer: '这篇论文的标题是"An Overview of Artificial Intelligence Ethics"，它主要讨论了人工智能伦理的各个方面。以下是我从论文中提取的一些核心观点：<br><br>人工智能（AI）伦理的共识尚未达成，不同的公司甚至在同一领域内对AI伦理有不同的观点。AI应遵循的共同原则和价值观尚不明确。此外，当AI应用于不同领域时，可能需要不同的伦理原则。因此，通过不同组织、领域和政府之间的讨论和合作，达成并建立AI的基本和共同的伦理原则是至关重要和必要的。[1]<br><br>在实施AI伦理时，存在许多挑战。这些挑战可能在实践中采用不同类型的伦理理论时遇到。例如，实施德性伦理、义务伦理、结果伦理以及协调不同伦理标准等方面都存在挑战。[1]<br><br>AI对个人、社会和环境的影响引发了许多伦理问题。例如，AI可能会导致就业机会的减少，增加社会不平等，影响隐私、人权和尊严，引发偏见，威胁民主，影响人类心理，对金融系统产生影响，对法律系统产生影响，对环境和地球产生影响，以及对信任产生影响等。[2]<br><br>AI伦理问题可以从个人、社会和环境三个主要层面进行分类。无论AI在哪个领域或部门使用，我们都可以从这三个层面考虑相应的伦理问题。[3]<br><br>在AI系统的生命周期的不同阶段，都可能涉及到伦理问题。如果我们知道现有的伦理问题容易在AI系统生命周期的哪个阶段或步骤中产生，这将对我们消除这些问题非常有益。[4]<br><br>引用位置：<br><br>[1] ABSTRACT，Page1<br><br>[2] II. ETHICAL ISSUES OF AI，Page5-6<br><br>[3] III. CATEGORIZATION OF AI ETHICAL ISSUES，Page8<br><br>[4] III. C. Key Ethical Issues Associated with each Stage of the AI System’s Lifecycle，Page9' },
                        { user: 'user', question: '请为我详细解释这篇论文的结构 ' },
                        { user: 'robot', answer: '这篇论文的结构如下：<br><br>1. 引言（Introduction）：在这一部分，作者介绍了论文的主题和目的，并概述了论文的组织结构。<br><br>2. 研究范围和方法（Scope and Methodology）：这一部分首先阐明了本文的研究范围和主题，然后描述了进行这项调查的方法，包括文献搜索策略和选择标准。<br><br>3. AI伦理问题的全面总结（A comprehensive summary of the ethical issues and risks raised from AI）：在这一部分，作者详细讨论了AI引发的伦理问题和风险。<br><br>4. AI伦理指南和原则的回顾和分析（Review and analysis of the AI ethical guidelines and principles）：这一部分回顾和分析了过去几年中发布的AI伦理指南和原则。<br><br>5. 解决AI伦理问题的范例或方法（Paradigms or approaches for addressing ethical issues in AI）：这一部分描述了解决AI伦理问题的范例或方法。<br><br>6. 评估AI系统或产品的道德或伦理的方法（Approaches to evaluate the morality or ethics of AI systems or products）：这一部分讨论了评估AI系统或产品的道德或伦理的方法。<br><br>7. 实施AI伦理的挑战和未来的设计伦理AI的观点（Challenges in implementing ethics in AI and future perspectives on designing ethical AI）：这一部分概述了实施AI伦理的挑战，并给出了未来设计伦理AI的观点。<br><br>8. 结论（Conclusion）：这一部分简要总结了论文的主要内容。<br><br>引用位置：<br><br>[1] INTRODUCTION，Page1<br><br>[2] II. SCOPE AND METHODOLOGY，Page1<br><br>[3] III. A comprehensive summary of the ethical issues and risks raised from AI，Page5<br><br>[4] IV. Review and analysis of the AI ethical guidelines and principles，Page8<br><br>[5] V. Paradigms or approaches for addressing ethical issues in AI，Page8<br><br>[6] VI. Approaches to evaluate the morality or ethics of AI systems or products，Page8<br><br>[7] VII. Challenges in implementing ethics in AI and future perspectives on designing ethical AI，Page16<br><br>[8] VIII. Conclusion，Page16' },
                        { user: 'user', question: '请为我详细解释这篇论文中“评估AI系统或产品的道德或伦理性方面”的内容' },
                        { user: 'robot', answer: '在评估AI系统或产品的道德或伦理性方面，这篇论文提出了一些方法和理论。以下是我从论文中找到的一些关键信息：<br><br>伦理理论：论文讨论了三种主要的伦理理论，包括德性伦理、义务伦理和结果伦理，这些理论可以用来评估AI系统的道德和伦理性（第11页）。<br><br>实施伦理的方法：论文讨论了三种主要的实施伦理的方法，包括自上而下的方法、自下而上的方法和混合方法。这些方法可以用来设计和实现道德AI系统（第13页）。<br><br>技术方法：论文简要总结了一些技术方法来解决AI伦理问题，这些方法仍处于初级发展阶段。例如，ACM（计算机协会）自2018年以来每年都会举办ACM FAccT会议，该会议汇集了对社会技术系统中的公平性、问责性和透明度感兴趣的研究人员和从业人员（第13页）。<br><br>AI伦理问题的分类：论文提出了一种新的分类方法，将AI伦理问题分为个人级别、社会级别和环境级别的问题。这种分类方法不仅清晰易懂，而且全面覆盖了讨论的伦理问题（第2页和第6页）。<br><br>AI伦理风险的分类：论文提出了一种新的分类方法，将AI伦理风险分为与算法相关的风险、与数据相关的风险、与应用相关的风险以及长期和间接的伦理风险（第4页和第6页）。' }
                    ],
                    fileList: [
                        { name: '人工智能史综述.pdf', size: '100KB', type: 'PDF' }
                    ]
                },
                {
                    id: 3,
                    title: '对话3-书籍',
                    chatList: [
                        { user: 'robot', answer: '有什么可以帮你的吗' },
                        { user: 'user', question: '请帮我总结出周志华《机器学习》这本书的核心内容' },
                        { user: 'robot', answer: '周志华《机器学习》一书共分为11章，下面是每个部分的主要内容以及在书本中的位置：<br><br>第1章：绪论。介绍机器学习的基本概念和应用，以及机器学习的发展历程。该部分位于书本的第1章。<br><br>第2章：模型评估与选择。介绍模型评估的基本概念和方法，以及如何选择最优模型。该部分位于书本的第2章。<br><br>第3章：线性模型。介绍线性模型的基本概念、分类和回归方法，以及线性模型的正则化方法。该部分位于书本的第3章。<br><br>第4章：决策树。介绍决策树的基本概念、分类和回归方法，以及决策树的剪枝方法。该部分位于书本的第4章。<br><br>第5章：神经网络。介绍神经网络的基本概念、前向传播和反向传播算法，以及深度学习的应用。该部分位于书本的第5章。<br><br>第6章：支持向量机。介绍支持向量机的基本概念、分类和回归方法，以及核函数的应用。该部分位于书本的第6章。<br><br>第7章：贝叶斯分类器。介绍贝叶斯分类器的基本概念、朴素贝叶斯和高斯混合模型等方法。该部分位于书本的第7章。<br><br>第8章：集成学习。介绍集成学习的基本概念、Bagging和Boosting等方法，以及随机森林和Adaboost等算法。该部分位于书本的第8章。<br><br>第9章：聚类。介绍聚类的基本概念、K均值、层次聚类和谱聚类等方法。该部分位于书本的第9章。<br><br>第10章：降维与度量学习。介绍降维和度量学习的基本概念、主成分分析和流形学习等方法。该部分位于书本的第10章。<br><br>第11章：特征选择与稀疏学习。介绍特征选择和稀疏学习的基本概念、Lasso和Elastic Net等方法。该部分位于书本的第11章<br><br>除了以上11章外，该书还包括附录和参考文献。' },
                        { user: 'user', question: '请向我解释书中“聚类”方面的知识' },
                        { user: 'robot', answer: '好的，聚类是机器学习中的一种无监督学习方法，其目的是将数据集中的样本分成若干个类别，使得同一个类别中的样本具有较高的相似性，不同类别中的样本具有较大的差异性。聚类算法通常不需要任何关于样本的先验知识，只需要根据样本之间的相似性或距离来进行分类。<br><br>在《机器学习》这本书中，聚类是第9章的主题，该章节主要包括以下内容：<br><br>聚类的基本概念和方法：介绍聚类的定义、目标和常用的聚类方法，如K均值聚类、层次聚类、密度聚类等。<br><br>聚类算法的评价：介绍如何评价聚类算法的性能，包括聚类效果、聚类稳定性、聚类时间等指标。<br><br>聚类算法的应用：介绍聚类算法在数据挖掘、图像处理、生物信息学等领域的应用，以及如何将聚类算法与其他机器学习算法相结合，如聚类与分类、聚类与降维等。<br><br>总的来说，本章节主要介绍了聚类算法的基本概念、方法和应用，以及如何评价聚类算法的性能。如果您想深入了解聚类算法的具体实现和应用，可以查看该章节的详细内容。' },
                        { user: 'user', question: '里面介绍的聚类方法有哪些呢？请将他们列出来并简要说明' },
                        { user: 'robot', answer: '好的，下面是《机器学习》中介绍的几种聚类方法：<br><br>1. K均值聚类（K-Means Clustering）：将数据集分成K个簇，每个簇的中心点是该簇中所有样本点的平均值。K均值聚类算法的目标是最小化所有簇内样本点与簇中心点的距离之和。<br><br>2. 层次聚类（Hierarchical Clustering）：将数据集中的样本逐步合并成越来越大的簇。层次聚类算法分为自上而下的凝聚层次聚类和自下而上的分裂层次聚类两种方法。<br><br>3. 密度聚类（Density-Based Clustering）：将样本空间划分成若干个密度相连的区域，每个区域对应一个簇。密度聚类算法的核心思想是将簇定义为密度相连的样本集合。<br><br>4. 基于模型的聚类（Model-Based Clustering）：将数据集中的样本看作是由若干个概率分布生成的，然后通过对概率分布进行参数估计来确定簇的数量和形状。<br><br>5. 谱聚类（Spectral Clustering）：将数据集中的样本看作是图中的节点，通过计算节点之间的相似性来构建图，并将图分解成若干个子图，每个子图对应一个簇。<br><br>以上是《机器学习》中介绍的几种聚类方法，每种方法都有其特点和适用范围。如果您想深入了解每种聚类方法的具体实现和优缺点，可以查看该书的第9章节。' },
                        
                        { user: 'user', question: '请详细介绍k聚类' },
                        { user: 'robot', answer: 'K均值聚类是一种常用的无监督学习算法，用于将一组数据分成K个不同的簇。该算法的目标是最小化每个簇内的平均距离平方，同时最大化不同簇之间的距离。<br><br>具体来说，K均值聚类的步骤如下：<br><br>1. 随机选择K个数据点作为初始簇中心<br><br>2. 将每个数据点分配到距离它最近的簇中心<br><br>3. 更新每个簇的中心为该簇内所有数据点的平均值。<br><br>4. 重复步骤2和3，直到簇中心不再发生变化或达到预定的迭代次数。<br><br>K均值聚类的优点是简单易用，适用于大规模数据集。它的缺点是对于不同形状、大小、密度的簇效果不佳，并且对于初始簇中心的选择比较敏感。<br><br>在《机器学习》这本书中，K均值聚类算法的详细介绍在第9章，包括算法流程、优化目标、算法的收敛性和局限性等方面的内容。' },

                        { user: 'user', question: '这本书与人工智能、人工智能领域有怎样的关系呢' },
                        { user: 'robot', answer: '周志华的《机器学习》这本书与人工智能和人工智能领域有着密切的关系。事实上，机器学习是人工智能领域的一个重要分支，它通过让计算机从数据中自动学习规律和模式，从而实现智能化的功能。<br><br>在书中，作者对机器学习的基本概念、方法和应用进行了全面的介绍，并通过大量的实例和案例，展示了机器学习在人工智能领域中的广泛应用。例如，机器学习可以用于图像识别、语音识别、自然语言处理、智能推荐、智能问答等领域，这些应用都是人工智能领域的重要组成部分。<br><br>此外，书中还涉及到了一些与人工智能相关的话题，如神经网络、决策树、支持向量机等。这些算法和模型都是人工智能领域的重要组成部分，它们被广泛应用于各种人工智能应用中，为人工智能的发展做出了重要贡献。因此，可以说周志华的《机器学习》这本书是人工智能领域的重要参考书籍之一。' }
                    ],
                    fileList: [
                        { name: '《机器学习》.pdf', size: '100KB', type: 'PDF' }
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
                                作者有27处文字与数据库现有文献重复，但未标明注释，具体内容可点击本<a href="https://zhuanlan.zhihu.com/p/44697626 ">链接</a>展开。<br><br>

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