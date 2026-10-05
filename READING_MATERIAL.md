# Building Agentic Systems: A Curated Bibliography

Building agentic systems requires a shift from static "chat" interfaces to autonomous entities capable of reasoning, tool use, and long-term memory. This document provides a structured list of 50 influential articles, papers, and blog posts from industry-leading labs (OpenAI, Anthropic, Google DeepMind) and renowned researchers.

---

## I. Foundational Concepts & Surveys
*The mental models required to understand the shift from LLMs to AI Agents.*

1.  **LLM Powered Autonomous Agents** (Lillian Weng, OpenAI) – The foundational framework defining agents through the lens of Brain (Reasoning), Planning, Memory, and Tool Use.
2.  **The Agentic Turn in Artificial Intelligence** (Frontiers, 2025) – A philosophical and technical look at how AI is shifting from reactive outputs to goal-directed agency.
3.  **Agentic Design Patterns** (Andrew Ng, DeepLearning.AI) – A seminal blog series categorizing patterns like Reflection, Tool Use, Planning, and Multi-Agent Collaboration.
4.  **The 2025 AI Agent Index** (MIT/Stanford/Cambridge) – A comprehensive technical tracking of 30+ state-of-the-art agents and their safety architectures.
5.  **A Personal Agentic OS** (Andrej Karpathy) – A vision for agents as an operating system that maintains persistent context and manages digital life.
6.  **Agentic AI: A Quantitative Analysis of Performance** (Sawant, 2025) – Data-driven evidence on how agentic workflows outperform standard prompting.
7.  **What Are AI Agents?** (IBM Think) – A high-level guide distinguishing between simple bots, assistive agents, and autonomous agents.
8.  **The Ethics of Using AI in Scientific Research** (Resnik & Hosseini) – Discusses the "responsibility gap" and ethical considerations of autonomous discovery.
9.  **Artificial Intelligence Agents in Healthcare: A Scoping Review** (PMC) – Review of 50+ agent types used in high-stakes, regulated environments.
10. **A Technical Research Agenda for Normative Competence** (Knight Institute) – Research on building agents that can understand and follow social and legal norms.

---

## II. The "Brain": Reasoning & Planning
*How agents break down complex goals into executable steps and handle errors.*

11. **Chain of Thought Prompting (CoT)** (Wei et al., Google Research) – The seminal paper on enabling models to "think step-by-step."
12. **ReAct: Synergizing Reasoning and Acting** (Yao et al., 2023) – The core pattern for agents that interleave reasoning traces and action execution.
13. **Tree of Thoughts (ToT)** (Yao et al., 2023) – A framework for agents to explore multiple reasoning branches and backtrack when necessary.
14. **Reflexion: Language Agents with Verbal Reinforcement Learning** (Shinn et al.) – Methods for agents to learn from their own mistakes through self-reflection.
15. **Self-Refine: Iterative Refinement with Self-Feedback** (Madaan et al.) – How models can improve their own outputs through recursive loops.
16. **Plan-and-Solve Prompting** (Wang et al.) – Techniques for reducing errors by generating a global plan before executing local steps.
17. **Chain-of-Verification (CoVe)** (Meta AI) – A method to reduce hallucinations by having the agent verify its own factual claims.
18. **Magentic-One: A Generalist Multi-Agent System** (Microsoft Research) – Uses a "Lead Agent" to orchestrate complex, multi-step task trees.
19. **The AI Scientist: Fully Automated Scientific Discovery** (Sakana AI) – Agents capable of generating, testing, and peer-reviewing original scientific hypotheses.
20. **Accelerating Scientific Breakthroughs with an AI Co-Scientist** (Google Research) – Google’s framework for agentic scientific inquiry.

---

## III. Tool Use & Interaction
*Standardizing how agents manipulate APIs, browse the web, and use software.*

21. **Model Context Protocol (MCP)** (Anthropic, 2025) – A major industry standard for connecting agents to any external data source or tool.
22. **Toolformer: Language Models Can Teach Themselves to Use Tools** (Meta AI) – How models learn to use APIs without explicit human supervision.
23. **BrowseComp: A Benchmark for Browsing Agents** (OpenAI, 2025) – Evaluates an agent's persistence and creativity in navigating the live web.
24. **Introducing Deep Research** (OpenAI, 2025) – An analysis of agents capable of multi-step, hour-long research and synthesis tasks.
25. **Gorilla: Large Language Model Connected with Massive APIs** (Patil et al.) – Teaching models to interact correctly with over 1,600 real-world APIs.
26. **WebArena: A Realistic Web Environment for Agents** (Zhou et al.) – A benchmark for agents performing tasks (shopping, social media) on live websites.
27. **AppAgent: Multimodal Agents as Smartphone Users** (Tencent) – Exploring how agents use visual interfaces to operate mobile apps.
28. **Tool-use in Claude** (Anthropic Blog) – A practical engineering guide for developers to implement reliable tool calling.
29. **Claude Code & Source Analysis** (Community Analysis) – Insights into how production-grade coding agents manage large-scale codebases.
30. **OS-World: Benchmarking Multimodal Agents on Desktop OS** (Xie et al.) – Testing agents that can control entire operating systems (Windows/Linux).

---

## IV. Multi-Agent Systems & Orchestration
*When one agent isn't enough: teams, debates, and hierarchical workflows.*

31. **AutoGen: Enabling Next-Gen LLM Applications** (Microsoft) – The framework that popularized the concept of multi-agent "conversations" to solve tasks.
32. **Generative Agents: Interactive Simulacra of Human Behavior** (Park et al.) – The "Smallville" paper; agents with lives, memories, and emergent social interactions.
33. **MetaGPT: Meta Programming for Multi-Agent Collaboration** (Hong et al.) – Software engineering agents that follow specific professional roles (CEO, Coder, Reviewer).
34. **ChatDev: Communicative Agents for Software Development** (Qian et al.) – Operating a "virtual software company" using a team of specialized agents.
35. **Teams of LLM Agents can Exploit Zero-Day Vulnerabilities** (ACL, 2026) – Research on how specialized "Expert Agents" collaborate to find security flaws.
36. **Camel: Communicative Agents for "Mind" Exploration** (Li et al.) – Using role-playing to study how agents can cooperatively solve problems.
37. **LLM Multi-Agent Systems: Challenges and Open Problems** (Han et al.) – Identifies the limits of communication and coordination in agent teams.
38. **The Moltbook Illusion** (Tsinghua University) – A study on emergent social behaviors and cyclic behavior in agent societies.
39. **Cognitive Architectures for LLM Agents** (Sumers et al.) – A deep-dive into mapping AI agent systems to human-like memory structures (Episodic vs. Procedural).
40. **LangGraph: Multi-Agent Workflows** (LangChain Blog) – Building complex, cyclic state machines for sophisticated agent loops.

---

## V. Memory, Safety, & Evaluation
*Ensuring agents are reliable, persistent, and safe.*

41. **MemGPT: Towards LLMs as Operating Systems** (Packer et al.) – Using virtual memory paging to provide agents with effectively infinite context.
42. **Memory Management in Multi-Agent Systems** (Han et al.) – Techniques for managing layered context and interaction history in long-running systems.
43. **The Anthropic Economic Index** (Anthropic, 2026) – Measuring the actual productivity gains and task automation levels of agents in the economy.
44. **Measuring Biological Risks of AI Agents** (RAND) – Evaluation of whether agents can assist in creating high-consequence biological threats.
45. **GAIA: A Benchmark for General AI Assistants** (MSR/Meta) – A benchmark focusing on tasks that are conceptually simple for humans but hard for AI.
46. **SWE-bench: Resolving Real-World GitHub Issues** (OpenAI/Princeton) – The gold standard for evaluating coding agents on real software bugs.
47. **Jailbreaking LLM Agents via Path Planning** (Paper, 2025) – Investigating how an agent's planning logic can be manipulated to bypass safety filters.
48. **Eliciting Problem Specifications via LLMs** (Wray et al.) – Using agents to help humans define complex, ambiguous problems before solving them.
49. **EduPulse: Practical LLM Opinion Mining** (ACL) – Case study on using agents for robust analysis of real-world, noisy human feedback.
50. **The Future of Human-Agent Collaboration** (Chip Huyen Blog) – A look at the "Agent-First" UX paradigm and how software will change.

---

## References & Further Reading
* **Anthropic Research:** [anthropic.com/research](https://www.anthropic.com/research)
* **OpenAI Blog:** [openai.com/blog](https://openai.com/blog)
* **Lillian Weng’s Blog:** [lilianweng.github.io/posts](https://lilianweng.github.io/posts/2023-06-23-agent/)
* **Microsoft Research:** [microsoft.com/en-us/research](https://www.microsoft.com/en-us/research/project/autogen/)