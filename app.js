const STORAGE_KEY = 'study_checklist_v1';

const plan = [
  {
    day: '24 Oct (Fri)',
    sessions: [
      { title: 'S1 (09:00–12:00) — TOC: DFA fundamentals', notes: 'FINITE AUTOMATA (FA): Introduction, Proof Techniques, Deterministic Finite Automata (DFA) - Formal definition, simpler notations (state transition diagram, transition table), language of a DFA.' },
      { title: 'S2 (13:00–16:00) — TOC: NFA & ε-transitions, Moore & Mealy', notes: 'Nondeterministic Finite Automata (NFA)- Definition of NFA, language of an NFA, Equivalence of Deterministic and Nondeterministic Finite Automata, Applications of Finite Automata, Finite Automata with Epsilon Transitions, Eliminating Epsilon transitions. Finite automata with output (Moore and Mealy machines).' },
      { title: 'S3 (17:00–20:00) — ADSA: Algorithmic complexity', notes: 'Theory Review of Algorithmic Complexity: Definition and significance of algorithmic complexity. Time and space complexity, Big O notation, Omega, and Theta notations, analyzing basic algorithms, solve problems on basic time complexity analysis.' }
    ]
  },
  {
    day: '25 Oct (Sat)',
    sessions: [
      { title: 'S1 — ADSA: Arrays', notes: 'Arrays: Static vs. dynamic arrays. Find the Maximum and Minimum Elements in an Array, Reverse an Array, Find the Kth Smallest/Largest Element in an Array.' },
      { title: 'S2 — ADSA: Linked lists', notes: 'Linked lists: Implementation of Singly Linked Lists, doubly linked list, and circular linked list. Operations on Linked List. Insertion, Deletion, Traversal.' },
      { title: 'S3 — ML: ML fundamentals', notes: 'Basic concepts: Learning, Types of Learning, History of ML, Life Cycle of ML, Performance metrices. Introduction of Machine Learning Approaches – (Regression, Classification, Clustering, Reinforcement Learning, Genetic Algorithm), Programming Vs Machine Learning. Issues in Machine Learning, Data Science Vs Machine Learning, Deep Learning vs Machine Learning. Learning Types- Supervised learning, unsupervised learning and reinforcement learning.' }
    ]
  },
  {
    day: '26 Oct (Sun)',
    sessions: [
      { title: 'S1 — ML: Regression', notes: 'Supervised Learning- Regression and Classification: regression and classification problems, simple linear regression, multiple linear regression, ridge and Lasso Regression, Exponential family, Likelihood estimation, maximum likelihood. Small derivation + one mini problem.' },
      { title: 'S2 — DL Unit I: Perceptron/MLP', notes: 'UNIT I: Introduction to Deep Learning and Neural Networks. Overview of Machine Learning vs Deep Learning- History and motivation behind deep learning - Perceptron and Multi-Layer Perceptron (MLP) - Activation Functions: Sigmoid, Tanh, ReLU, Leaky ReLU, softmax - Loss Functions: MSE, Binary Cross Entropy, Categorical Cross Entropy - Gradient Descent and Backpropagation -Implementation of simple neural networks (e.g., MNIST classification).' },
      { title: 'S3 — TOC: Regular Expressions & RE→Automata', notes: 'REGULAR EXPRESSIONS (RE): Introduction, Identities of Regular Expressions, Finite Automata and Regular Expressions- Converting from DFAs to Regular Expressions, Converting Regular Expressions to Automata, applications of Regular Expressions.' }
    ]
  },
  {
    day: '27 Oct (Mon)',
    sessions: [
      { title: 'S1 — ADSA: Stacks & Recursion', notes: 'Stacks: Implementation of Stack using linked list, Application of stack: infix, Prefix and Postfix Expressions, infix to postfix expression, Evaluation of postfix expression. Recursion- Principles of recursion, Tail recursion, problem solving using recursion, Fibonacci numbers, a^n, reverse of a string.' },
      { title: 'S2 — ADSA: Queues & Priority Queue (Heap)', notes: 'Queues: Implementation and operations on Queue using linked list. Priority queue (heap) - heap operations and practice.' },
      { title: 'S3 — Communication', notes: 'Unit 1: Advanced Grammar - Noun, Pronouns, Articles, Subject Verb Agreement, Tenses, Contextual Vocabulary, Thematic Vocabulary, Synonyms/Antonym, Phrasal Verbs.' }
    ]
  },
  {
    day: '28 Oct (Tue)',
    sessions: [
      { title: 'S1 — DL: Backpropagation & Gradient Descent', notes: 'Gradient Descent and Backpropagation - derivation sketch, intuition, learning rate effects; small backprop hand-trace.' },
      { title: 'S2 — ML: Classification basics', notes: 'Overview of classification: setup, training, test, validation dataset, over fitting. Supervised Learning- Classification: logistic regression, Naïve Bayes, Naive Bayes classification, Naïve Bayes Classifier, linear discriminant analysis, support vector machine, bias variance trade-off, cross-validation, Classification Accuracy.' },
      { title: 'S3 — ADSA: Hashing & Trees intro', notes: 'Hashing: Concept of Hashing & Collision resolution Techniques used in Hashing. Tree: Linked List Representation, Binary Search Tree, Tree Traversal algorithms: In-order, Preorder, and Post-order, Constructing Binary Tree from given Tree Traversal.' }
    ]
  },
  {
    day: '29 Oct (Wed)',
    sessions: [
      { title: 'S1 — TOC: DFA minimization & equivalence', notes: 'Minimization of Deterministic Finite Automata, Equivalence of Deterministic and Nondeterministic Finite Automata, partitioning algorithm; exercises and one minimization proof.' },
      { title: 'S2 — System Design: Fundamentals', notes: 'Basics of System Design: Functional vs Non Functional Requirements, Components of System Design, System Design Life Cycle (SDLC), Structured Analysis and Structured Design (SA/SD), System Design Strategy, Object-Oriented Analysis and Design, Difference between Structured and Object-Oriented Analysis.' },
      { title: 'S3 — Communication & Aptitude', notes: 'Aptitude topics: Set-Theory, Syllogism, Permutation & Combination, Probability, LR- Seating/Data Arrangement, Data Interpretation.' }
    ]
  },
  {
    day: '30 Oct (Thu)',
    sessions: [
      { title: 'S1 — ML: SVM & kernels', notes: 'Support vector machine (SVM) intuition (max-margin), kernel idea, hyperparameter tuning, interpretation of metrics; short problem set.' },
      { title: 'S2 — DL Unit II: Deep networks & optimization', notes: 'Unit 2: Deep Neural Networks and Optimization Techniques - Deep Neural Networks: Vanishing/exploding gradients - Weight initialization techniques - Optimization Algorithms: SGD, Momentum, RMSProp, Adam - Regularization: L1, L2, Dropout, Early Stopping - Batch Normalization - Hyperparameter tuning and cross-validation - Performance metrics: confusion matrix, Accuracy, Precision, Recall, F1 Score, ROC-AUC.' },
      { title: 'S3 — ADSA: Trees advanced', notes: 'Tree: Constructing Binary Tree from given Tree Traversal. Binary Search Tree operations (insert/delete/search) + complexity analysis.' }
    ]
  },
  {
    day: '31 Oct (Fri)',
    sessions: [
      { title: 'S1 — TOC: Regular Grammars & Pumping Lemma', notes: 'REGULAR GRAMMARS: Definition, regular grammars and FA, FA for regular grammar, Regular grammar for FA. Proving languages to be non-regular -Pumping lemma.' },
      { title: 'S2 — System Design: Scalability & Databases', notes: 'System Design – Horizontal and Vertical Scaling, Load Balancer in System Design, Routing requests through Load Balancer, Latency and Throughput in System Design. Scalability in System Design: Achieving scalability, Scalability approaches for an Application, Primary Bottlenecks that Hurt the Scalability of an Application. Databases in Designing Systems: Choosing Database while designing a system – SQL or NoSQL, Database Sharding, File and Database Storage Systems in System Design, Database Replication in System Design, Block, Object, and File Storage.' },
      { title: 'S3 — ML: Clustering, RL & GA', notes: 'Machine Learning advanced topics: Clustering, Reinforcement Learning, Genetic Algorithm. Comparisons: Programming Vs Machine Learning, Data Science Vs Machine Learning, Deep Learning vs Machine Learning.' }
    ]
  },
  {
    day: '1 Nov (Sat) — Final consolidation (exam 2 Nov)',
    sessions: [
      { title: 'S1 — TOC (final timed practice)', notes: 'Timed practice: DFA/NFA conversions, DFA minimization, one pumping lemma proof. Review TOC proof templates.' },
      { title: 'S2 — DL & ML final quicks', notes: 'DL recap: activations, loss, backprop, optimizers, regularization. ML recap: regression/classification, SVM, metrics. Practice interpreting training curves and metric troubleshooting.' },
      { title: 'S3 — Mixed rapid-fire review', notes: 'Rapid-fire review across all subjects: ADSA (top 10 flashcards), TOC (10 flashcards), ML/DL (10 flashcards), System Design, Communication & Aptitude. Timed mini-mocks and final AR.' }
    ]
  }
];

// syllabus canonical items to check coverage against (lowercase keywords)
const syllabus = [
  // ADSA
  'algorithmic complexity','big-o','omega','theta','arrays','static array','dynamic array','find max','find min','reverse array','kth smallest','kth largest','quickselect','linked list','singly linked list','doubly linked list','circular linked list','insertion','deletion','traversal','stacks','stack','infix to postfix','postfix evaluation','recursion','tail recursion','fibonacci','exponentiation','queues','priority queue','heap','heapify','build-heap','hashing','hash','collision','chaining','open addressing','trees','binary search tree','bst','inorder','preorder','postorder','construct binary tree',
  // Communication & Aptitude
  'noun','pronoun','article','subject verb agreement','tenses','contextual vocabulary','thematic vocabulary','phrasal verb','set theory','syllogism','permutation','combination','probability','seating','data arrangement','data interpretation',
  // Deep Learning
  'perceptron','mlp','activation','sigmoid','tanh','relu','leaky relu','softmax','loss','mse','binary cross entropy','categorical cross entropy','gradient descent','backprop','weight initialization','vanishing','exploding','sgd','momentum','rmsprop','adam','batch normalization','batch norm','dropout','regularization','l1','l2','early stopping','hyperparameter','cross-validation','metrics','confusion matrix','precision','recall','f1','roc-auc',
  // Machine Learning
  'machine learning','learning types','regression','linear regression','multiple linear regression','ridge','lasso','likelihood','mle','logistic regression','naive bayes','lda','svm','support vector','bias variance','overfitting','cross-validation','clustering','k-means','hierarchical clustering','reinforcement learning','genetic algorithm','programming vs machine learning','data science vs machine learning',
  // System Design
  'system design','functional requirement','non-functional requirement','sdlc','sa/sd','ooa','ood','scalability','horizontal scaling','vertical scaling','load balancer','routing','latency','throughput','bottleneck','sql','nosql','sharding','replication','file storage','object storage','block storage',
  // TOC
  'finite automata','dfa','nfa','epsilon','epsilon transition','moore','mealy','regular expression','regex','re','re->nfa','nfa->dfa','dfa minimization','minimization','regular grammar','pumping lemma'
];

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return null;
    return JSON.parse(raw);
  }catch(e){console.error('loadState',e);return null}
}

function saveState(state){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function buildInitialState(){
  const days = plan.map(d=>({ day: d.day, sessions: d.sessions.map(s=>({ title: s.title, notes: s.notes, done:false })) }));
  return { created: new Date().toISOString(), days };
}

function render(){
  const container = document.getElementById('checklist');
  container.innerHTML = '';
  const state = loadState() || buildInitialState();
  let total = 0, done = 0;

  state.days.forEach((d, di)=>{
    const dayEl = document.createElement('div'); dayEl.className='card day';
    const h = document.createElement('h2'); h.textContent = d.day; dayEl.appendChild(h);

    d.sessions.forEach((s, si)=>{
      total++;
      if(s.done) done++;
      const ses = document.createElement('div'); ses.className='session';
      const hdr = document.createElement('div'); hdr.className='hdr';
      const left = document.createElement('div'); left.innerHTML = `<strong>${s.title}</strong>`;
      const toggle = document.createElement('button'); toggle.className='toggle-btn'; toggle.textContent='Show details';
      hdr.appendChild(left); hdr.appendChild(toggle);

      const task = document.createElement('div'); task.className='task';
      const cb = document.createElement('input'); cb.type='checkbox'; cb.checked = !!s.done;
      cb.addEventListener('change', ()=>{
        const st = loadState() || buildInitialState();
        st.days[di].sessions[si].done = cb.checked;
        saveState(st);
        render();
      });
      const label = document.createElement('label');
      const notes = document.createElement('div'); notes.className='notes'; notes.textContent = s.notes || '';
      label.appendChild(hdr); label.appendChild(notes);
      task.appendChild(cb); task.appendChild(label);

      // start expanded by default so all topics are visible
      notes.style.display = 'block';
      toggle.textContent = 'Hide details';
      toggle.addEventListener('click', ()=>{
        const showing = notes.style.display !== 'none';
        notes.style.display = showing ? 'none' : 'block';
        toggle.textContent = showing ? 'Show details' : 'Hide details';
      });

      ses.appendChild(task);
      dayEl.appendChild(ses);
    });

    container.appendChild(dayEl);
  });

  const prog = document.getElementById('progress');
  const pct = total? Math.round(done/total*100) : 0;
  prog.textContent = `Progress: ${done} / ${total} (${pct}%)`;

  const bar = document.querySelector('.progress-bar > i');
  if(!bar){
    const pb = document.createElement('div'); pb.className='progress-bar';
    const pi = document.createElement('i'); pi.style.width = pct + '%'; pb.appendChild(pi);
    document.getElementById('controls').appendChild(pb);
  }else{ bar.style.width = pct + '%'; }
}

function expandAll(show=true){
  document.querySelectorAll('.session .notes').forEach(n=>{
    n.style.display = show ? 'block' : 'none';
  });
  document.querySelectorAll('.session .toggle-btn').forEach(b=> b.textContent = show ? 'Hide details' : 'Show details');
}

function runCoverageCheck(){
  const state = loadState() || buildInitialState();
  const sessionTexts = state.days.flatMap(d=>d.sessions.map((s,si)=>({ day:d.day, title:s.title, notes:s.notes || '', text:(s.title + ' ' + (s.notes||'')).toLowerCase() })));
  const covered = [];
  const missing = [];
  syllabus.forEach(item=>{
    const key = item.toLowerCase();
    const matches = sessionTexts.filter(st=> st.text.includes(key));
    if(matches.length) covered.push({ item, matches })
    else missing.push(item);
  });
  const reportEl = document.getElementById('coverageReport');
  let html = '<div class="coverage"><strong>Syllabus coverage report</strong>';
  html += `<div style="margin-top:6px"><strong>Covered: </strong>${covered.length} / ${syllabus.length}</div>`;
  if(covered.length){
    html += '<details><summary>See covered items</summary><ul>' + covered.map(c=>`<li><strong>${c.item}</strong> — matched in ${c.matches.length} session(s): ${c.matches.map(m=>`<em>${m.day} / ${m.title}</em>`).join(', ')}</li>`).join('') + '</ul></details>';
  }
  if(missing.length){
    html += '<details open><summary>Missing (keyword-level)</summary><ul>' + missing.map(m=>`<li>${m}</li>`).join('') + '</ul><small>Note: matching is keyword-based. Some topics may be covered using different wording — review manually.</small></details>';
  }
  html += '</div>';
  reportEl.innerHTML = html;
}

function wireControls(){
  document.getElementById('exportBtn').addEventListener('click', ()=>{
    const state = loadState() || buildInitialState();
    const blob = new Blob([JSON.stringify(state, null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'study-checklist-export.json';
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  });

  document.getElementById('importBtn').addEventListener('click', ()=>{
    document.getElementById('importFile').click();
  });

  document.getElementById('importFile').addEventListener('change', (ev)=>{
    const f = ev.target.files[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = e=>{
      try{
        const data = JSON.parse(e.target.result);
  if(data && data.days) { saveState(data); render(); runCoverageCheck(); alert('Imported successfully'); }
        else alert('Invalid file format');
      }catch(err){ alert('Invalid JSON file') }
    };
    reader.readAsText(f);
  });

  document.getElementById('resetBtn').addEventListener('click', ()=>{
    if(!confirm('Reset all progress? This cannot be undone unless you exported a backup.')) return;
    const s = buildInitialState(); saveState(s); render();
    runCoverageCheck();
  });
  document.getElementById('expandAll').addEventListener('click', ()=> expandAll(true));
  document.getElementById('collapseAll').addEventListener('click', ()=> expandAll(false));
}

// init
(function(){
  if(!loadState()) saveState(buildInitialState());
  wireControls(); render();
  runCoverageCheck();
})();
