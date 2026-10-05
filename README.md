# agentra

Bare-minimum agent + workflows

This is an experiment notebook to answer the following questions:
1. How agentic systems work?
2. How to build such systems across different industries? 
3. How to optimize agents to achieve an intended goal?

Currenlty, engineers and industry experts collaboarte to build such systems 
on Agent building platforms. 
The final outcome of this project will be an agent who can build these 
agentic systemson its own. 
It may ask to user to provide tools required to build the system which can be
access to proprietary information sources and more. 

Will build all these:
The rate limiter
Input schema validation
Evaluation system
How to handle long running tasks
    - if network fails
    - if one llm call fails
    - if system crashes
The cache check
The request queue
LLM Call
Response Validation layer
The circuit breaker (fallback)
Monitoring
    - Logs
    - Cost

## Setup

```sh
npm install
```

Add to `.env`:

```
LLM_URL=
LLM_KEY=
```

## Dev

```sh
npm run dev
```
