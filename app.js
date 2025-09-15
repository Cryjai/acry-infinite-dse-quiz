// Acry DSE Quiz - Interactive Learning Application

// Application Data
const APP_DATA = {
  "categories": [
    {
      "id": "economics",
      "name": "DSE Economics", 
      "icon": "📈",
      "color": "#00ff88"
    },
    {
      "id": "chinese", 
      "name": "中文",
      "icon": "📝", 
      "color": "#ff6b6b"
    },
    {
      "id": "english",
      "name": "English", 
      "icon": "🇬🇧",
      "color": "#4ecdc4"
    },
    {
      "id": "history",
      "name": "中史",
      "icon": "🏛️", 
      "color": "#ffe66d"
    }
  ],
  "questions": {
    "economics": [
      {
        "id": 1,
        "question": "What is the definition of 'Opportunity Cost'?",
        "answer": "The value of the next best alternative forgone when making a choice",
        "options": ["The cost of producing one more unit", "The value of the next best alternative forgone", "The total cost of production", "The average cost per unit"],
        "correct": 1,
        "category": "economics",
        "difficulty": "medium",
        "hints": ["Think about what you give up", "It's about alternatives", "The NEXT BEST option"],
        "notes": "機會成本係經濟學入面最基本嘅概念，記住係next best alternative，唔係all alternatives！",
        "explanation": "Opportunity cost measures the cost of any choice in terms of the next best alternative forgone. For example, if you choose to study instead of watching TV, the opportunity cost is the enjoyment from TV.",
        "media": {
          "image": "",
          "video": ""
        }
      },
      {
        "id": 2, 
        "question": "Define 'Price Elasticity of Demand'",
        "answer": "The responsiveness of quantity demanded to changes in price",
        "options": ["How price changes affect supply", "The responsiveness of quantity demanded to price changes", "The relationship between income and demand", "How demand affects market price"],
        "correct": 1,
        "category": "economics", 
        "difficulty": "medium",
        "hints": ["It's about responsiveness", "Quantity demanded vs Price", "How sensitive consumers are"],
        "notes": "PED = % change in Qd / % change in P。記住如果>1就係elastic，<1就係inelastic！",
        "explanation": "PED measures how responsive consumers are to price changes. Elastic demand (>1) means consumers are sensitive to price changes, inelastic (<1) means they're not very sensitive.",
        "media": {
          "image": "",
          "video": ""
        }
      },
      {
        "id": 3,
        "question": "What happens to consumer surplus when price increases?",
        "answer": "Consumer surplus decreases",
        "options": ["Increases", "Decreases", "Stays the same", "Becomes zero"], 
        "correct": 1,
        "category": "economics",
        "difficulty": "easy",
        "hints": ["Higher price = less benefit for consumers", "Think about the triangle area", "Consumers lose welfare"],
        "notes": "Consumer surplus = area below demand curve and above price line。Price上升，個area就細咗！",
        "explanation": "Consumer surplus is the difference between what consumers are willing to pay and what they actually pay. When price rises, this difference (and the triangle area) gets smaller.",
        "media": {
          "image": "",
          "video": ""
        }
      }
    ],
    "chinese": [
      {
        "id": 1,
        "question": "「山重水複疑無路，柳暗花明又一村」出自邊首詩？",
        "answer": "陸游《游山西村》",
        "options": ["杜甫《春望》", "陸游《游山西村》", "李白《靜夜思》", "蘇軾《水調歌頭》"],
        "correct": 1,
        "category": "chinese",
        "difficulty": "medium", 
        "hints": ["南宋詩人", "關於遊歷", "姓陸嘅詩人"],
        "notes": "呢句經常用嚟形容困境中見到希望，係DSE作文常用嘅名句！記住係陸游寫嘅。",
        "explanation": "這句詩比喻在困頓中往往蘊含着希望，常用於作文中表達逆境中的轉機。陸游通過描寫山村景色來表達人生哲理。",
        "media": {
          "image": "",
          "video": ""
        }
      },
      {
        "id": 2,
        "question": "形容文筆優美可以用邊個四字詞語？",
        "answer": "文采斐然",
        "options": ["文不加點", "文采斐然", "文過飾非", "文質彬彬"],
        "correct": 1, 
        "category": "chinese",
        "difficulty": "easy",
        "hints": ["關於文采", "形容寫得靚", "斐然係美好嘅意思"],
        "notes": "文采斐然 = 文章寫得好靚好有才華。DSE作文可以用嚟讚人寫得好！",
        "explanation": "文采斐然指文章富有文采，寫得很有才華和美感。斐然指有文采的樣子，常用來形容文章或詩詞的優美。",
        "media": {
          "image": "",
          "video": ""
        }
      },
      {
        "id": 3,
        "question": "《岳陽樓記》中「先天下之憂而憂，後天下之樂而樂」反映咗乜嘢精神？",
        "answer": "憂國憂民的精神",
        "options": ["個人主義", "憂國憂民的精神", "享樂主義", "消極避世"],
        "correct": 1,
        "category": "chinese", 
        "difficulty": "medium",
        "hints": ["關於愛國", "為咗人民", "犧牲精神"],
        "notes": "呢句係范仲淹嘅名句，表達古代士大夫以天下為己任嘅精神。DSE範文必考！",
        "explanation": "這句話體現了古代士大夫以天下為己任，把國家和人民的利益放在個人利益之前的崇高精神品格。",
        "media": {
          "image": "",
          "video": ""
        }
      }
    ],
    "english": [
      {
        "id": 1,
        "question": "What does 'break the ice' mean?",
        "answer": "To start a conversation or make people feel more relaxed", 
        "options": ["To literally break ice", "To start a conversation in an awkward situation", "To stop talking", "To make someone angry"],
        "correct": 1,
        "category": "english",
        "difficulty": "easy",
        "hints": ["About social situations", "Making things less awkward", "Starting communication"],
        "notes": "呢個idiom好常用！意思係打破沉默或者令氣氛輕鬆啲。",
        "explanation": "This idiom means to initiate conversation in a social setting or to make people feel more comfortable. Example: 'John told a funny joke to break the ice at the meeting.'",
        "media": {
          "image": "",
          "video": ""
        }
      },
      {
        "id": 2,
        "question": "Complete the idiom: 'When pigs ___'",
        "answer": "fly",
        "options": ["run", "fly", "swim", "dance"], 
        "correct": 1,
        "category": "english",
        "difficulty": "easy",
        "hints": ["Something impossible", "Pigs can't do this", "In the sky"],
        "notes": "'When pigs fly' = 絕對唔會發生嘅事。例如：I'll clean my room when pigs fly!",
        "explanation": "'When pigs fly' means something that will never happen or is impossible. Example: 'He'll apologize when pigs fly!' (meaning he'll never apologize)",
        "media": {
          "image": "",
          "video": ""
        }
      },
      {
        "id": 3,
        "question": "What's a synonym for 'ubiquitous'?",
        "answer": "Omnipresent / everywhere",
        "options": ["Rare", "Omnipresent", "Hidden", "Temporary"],
        "correct": 1,
        "category": "english",
        "difficulty": "hard", 
        "hints": ["Everywhere you look", "Present in all places", "Uni- means one, quitous means everywhere"],
        "notes": "Ubiquitous = 無處不在。好高級嘅vocab，DSE用到會加分！",
        "explanation": "Ubiquitous means present, appearing, or found everywhere. Example: 'Smartphones have become ubiquitous in modern society.'",
        "media": {
          "image": "",
          "video": ""
        }
      }
    ],
    "history": [
      {
        "id": 1,
        "question": "秦始皇統一六國係邊一年？",
        "answer": "公元前221年",
        "options": ["公元前220年", "公元前221年", "公元前222年", "公元前219年"],
        "correct": 1,
        "category": "history",
        "difficulty": "medium",
        "hints": ["公元前3世紀", "220幾年", "記住係221"],
        "notes": "221 BC，秦滅齊國，完成統一。呢個年份好重要，一定要記住！",
        "explanation": "公元前221年，秦國滅齊國，秦始皇完成統一六國的大業，建立了中國第一個統一的封建帝國。",
        "media": {
          "image": "",
          "video": ""
        }
      },
      {
        "id": 2, 
        "question": "漢武帝時期派邊個出使西域？",
        "answer": "張騫",
        "options": ["衛青", "張騫", "霍去病", "司馬遷"],
        "correct": 1,
        "category": "history",
        "difficulty": "easy",
        "hints": ["開通絲綢之路", "姓張", "出使任務"],
        "notes": "張騫兩次出使西域，開通咗絲綢之路，促進中西文化交流。",
        "explanation": "張騫在漢武帝時期兩次出使西域，第一次是為了聯合大月氏攻擊匈奴，第二次是為了加強與西域各國的聯繫，開闢了著名的絲綢之路。",
        "media": {
          "image": "",
          "video": ""
        }
      },
      {
        "id": 3,
        "question": "唐朝「貞觀之治」係邊個皇帝嘅年號？",
        "answer": "唐太宗李世民", 
        "options": ["唐高祖李淵", "唐太宗李世民", "唐玄宗李隆基", "唐高宗李治"],
        "correct": 1,
        "category": "history",
        "difficulty": "easy",
        "hints": ["李世民", "玄武門之變", "明君典範"],
        "notes": "貞觀之治(627-649)係唐太宗嘅治世，被譽為中國歷史上嘅盛世之一。",
        "explanation": "貞觀之治是唐太宗李世民統治時期(627-649年)的政治清明時期，以其政治開明、經濟繁榮、文化發達而著稱。",
        "media": {
          "image": "",
          "video": ""
        }
      }
    ]
  },
  "sarcastic_messages": {
    "correct": [
      "哇！居然答得啱，奇蹟呀！🎉",
      "終於開竅啦，繼續努力啦！💪", 
      "唔錯唔錯，但唔好驕傲住！😏",
      "識答呢題？睇嚟有料到喎！👏",
      "難得答啱一題，請繼續保持！✨"
    ],
    "incorrect": [
      "你都叫做Economics King？死啦咁都唔識！😱",
      "背唔出就唔好出門啦！📚", 
      "咁都答錯？返去重新學過啦！🤦‍♂️",
      "呢啲都唔識仲想入大學？💀",
      "慘啦，你呢個水準點考DSE？😭",
      "唔該你認真啲讀書好無？📖",
      "連呢題都唔識，我都替你擔心！😰"
    ]
  },
  "achievements": [
    {"name": "初學者", "description": "完成第一條問題", "icon": "🎯"},
    {"name": "連勝王", "description": "連續答啱5題", "icon": "🔥"}, 
    {"name": "學霸", "description": "單次測驗90%以上", "icon": "👑"},
    {"name": "全科王", "description": "四科都有練習過", "icon": "🏆"}
  ]
};

// Application State
class AppState {
  constructor() {
    this.currentCategory = null;
    this.currentMode = null;
    this.currentQuestions = [];
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.totalScore = this.loadTotalScore();
    this.userStats = this.loadUserStats();
    this.currentHintLevel = 0;
    this.questionAnswered = false;
    this.autoMode = false;
    this.autoTimer = null;
    this.achievements = this.loadAchievements();
    this.leaderboard = this.loadLeaderboard();
    this.studiedCategories = new Set();
  }

  loadTotalScore() {
    return parseInt(localStorage.getItem('acryDSE_totalScore') || '0');
  }

  saveTotalScore() {
    localStorage.setItem('acryDSE_totalScore', this.totalScore.toString());
    this.updateDisplay();
  }

  loadUserStats() {
    const stats = localStorage.getItem('acryDSE_userStats');
    return stats ? JSON.parse(stats) : {
      questionsAnswered: 0,
      correctAnswers: 0,
      streakRecord: 0,
      categoriesCompleted: []
    };
  }

  saveUserStats() {
    localStorage.setItem('acryDSE_userStats', JSON.stringify(this.userStats));
  }

  loadAchievements() {
    const achievements = localStorage.getItem('acryDSE_achievements');
    return achievements ? JSON.parse(achievements) : [];
  }

  saveAchievements() {
    localStorage.setItem('acryDSE_achievements', JSON.stringify(this.achievements));
  }

  loadLeaderboard() {
    const leaderboard = localStorage.getItem('acryDSE_leaderboard');
    return leaderboard ? JSON.parse(leaderboard) : [];
  }

  saveLeaderboard() {
    localStorage.setItem('acryDSE_leaderboard', JSON.stringify(this.leaderboard));
  }

  updateDisplay() {
    document.getElementById('totalScore').textContent = this.totalScore;
    document.getElementById('streak').textContent = this.streak;
  }

  addToLeaderboard(score, category, mode) {
    const entry = {
      score,
      category,
      mode,
      date: new Date().toISOString(),
      timestamp: Date.now()
    };
    this.leaderboard.push(entry);
    this.leaderboard.sort((a, b) => b.score - a.score);
    this.leaderboard = this.leaderboard.slice(0, 50); // Keep top 50
    this.saveLeaderboard();
  }

  checkAchievements() {
    const newAchievements = [];
    
    // 初學者 - First question completed
    if (this.userStats.questionsAnswered === 1 && !this.achievements.includes('初學者')) {
      newAchievements.push('初學者');
    }
    
    // 連勝王 - 5 consecutive correct answers
    if (this.streak >= 5 && !this.achievements.includes('連勝王')) {
      newAchievements.push('連勝王');
    }
    
    // 學霸 - 90%+ in a single quiz
    const accuracy = this.score / this.currentQuestions.length;
    if (accuracy >= 0.9 && !this.achievements.includes('學霸')) {
      newAchievements.push('學霸');
    }
    
    // 全科王 - Practiced all 4 categories
    if (this.studiedCategories.size === 4 && !this.achievements.includes('全科王')) {
      newAchievements.push('全科王');
    }
    
    newAchievements.forEach(achievement => {
      if (!this.achievements.includes(achievement)) {
        this.achievements.push(achievement);
        this.showAchievementNotification(achievement);
      }
    });
    
    if (newAchievements.length > 0) {
      this.saveAchievements();
    }
  }

  showAchievementNotification(achievementName) {
    const achievement = APP_DATA.achievements.find(a => a.name === achievementName);
    if (achievement) {
      // Create a temporary notification
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #bf00ff, #00ffff);
        color: white;
        padding: 16px;
        border-radius: 8px;
        font-weight: bold;
        z-index: 2000;
        animation: slideIn 0.5s ease-out;
      `;
      notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 24px;">${achievement.icon}</span>
          <div>
            <div>新成就解鎖！</div>
            <div style="font-size: 14px; opacity: 0.9;">${achievement.name}: ${achievement.description}</div>
          </div>
        </div>
      `;
      
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.remove();
      }, 3000);
    }
  }
}

// Initialize app state
const appState = new AppState();

// Navigation Functions
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.dashboard, .category-page, .quiz-page, .flashcard-page, .faq-page, .leaderboard, .add-question-form');
  pages.forEach(page => {
    page.classList.add('hidden');
    page.classList.remove('active');
  });
  
  // Show selected page
  const page = document.getElementById(pageId);
  if (page) {
    page.classList.remove('hidden');
    page.classList.add('active');
  }
}

function initializeDashboard() {
  const categoriesGrid = document.getElementById('categoriesGrid');
  if (!categoriesGrid) return;
  
  const categoriesHTML = APP_DATA.categories.map(category => {
    const questionCount = APP_DATA.questions[category.id] ? APP_DATA.questions[category.id].length : 0;
    return `
      <div class="category-card" data-category="${category.id}" style="border-color: ${category.color}20;">
        <div class="category-icon">${category.icon}</div>
        <div class="category-name">${category.name}</div>
        <div class="category-count">${questionCount} 條題目</div>
      </div>
    `;
  }).join('');
  
  categoriesGrid.innerHTML = categoriesHTML;
}

function selectCategory(categoryId) {
  const category = APP_DATA.categories.find(cat => cat.id === categoryId);
  if (category) {
    appState.currentCategory = categoryId;
    appState.studiedCategories.add(categoryId);
    
    const categoryTitle = document.getElementById('categoryTitle');
    if (categoryTitle) {
      categoryTitle.textContent = category.name;
      categoryTitle.style.color = category.color;
    }
    
    showPage('categoryPage');
  }
}

function selectMode(mode) {
  appState.currentMode = mode;
  const questions = APP_DATA.questions[appState.currentCategory] || [];
  appState.currentQuestions = [...questions];
  appState.currentQuestionIndex = 0;
  appState.score = 0;
  appState.questionAnswered = false;
  appState.currentHintLevel = 0;
  
  switch(mode) {
    case 'quiz':
      initializeQuiz();
      showPage('quizPage');
      break;
    case 'flashcard':
      initializeFlashcards();
      showPage('flashcardPage');
      break;
    case 'faq':
      initializeFAQ();
      showPage('faqPage');
      break;
  }
}

// Quiz Functions
function initializeQuiz() {
  shuffleArray(appState.currentQuestions);
  updateQuizDisplay();
  displayQuestion();
}

function updateQuizDisplay() {
  const current = appState.currentQuestionIndex + 1;
  const total = appState.currentQuestions.length;
  
  const questionCounter = document.getElementById('questionCounter');
  const progressFill = document.getElementById('progressFill');
  const quizScore = document.getElementById('quizScore');
  
  if (questionCounter) questionCounter.textContent = `${current} / ${total}`;
  if (progressFill) progressFill.style.width = `${(current / total) * 100}%`;
  if (quizScore) quizScore.textContent = `分數: ${appState.score}`;
}

function displayQuestion() {
  const question = appState.currentQuestions[appState.currentQuestionIndex];
  if (!question) return;
  
  const questionText = document.getElementById('questionText');
  const questionOptions = document.getElementById('questionOptions');
  
  if (questionText) questionText.textContent = question.question;
  
  if (questionOptions) {
    const optionsHTML = question.options.map((option, index) => `
      <button class="option-btn" data-index="${index}">
        ${String.fromCharCode(65 + index)}. ${option}
      </button>
    `).join('');
    
    questionOptions.innerHTML = optionsHTML;
  }
  
  appState.questionAnswered = false;
  appState.currentHintLevel = 0;
}

function selectAnswer(answerIndex) {
  if (appState.questionAnswered) return;
  
  const question = appState.currentQuestions[appState.currentQuestionIndex];
  const isCorrect = answerIndex === question.correct;
  
  // Update UI
  const questionOptions = document.getElementById('questionOptions');
  if (questionOptions) {
    const optionBtns = questionOptions.querySelectorAll('.option-btn');
    optionBtns.forEach((btn, index) => {
      if (index === question.correct) {
        btn.classList.add('correct');
      } else if (index === answerIndex && !isCorrect) {
        btn.classList.add('incorrect');
      }
      btn.disabled = true;
    });
  }
  
  // Update stats
  appState.questionAnswered = true;
  appState.userStats.questionsAnswered++;
  
  if (isCorrect) {
    appState.score++;
    appState.streak++;
    appState.totalScore += 10;
    appState.userStats.correctAnswers++;
    if (appState.streak > appState.userStats.streakRecord) {
      appState.userStats.streakRecord = appState.streak;
    }
  } else {
    appState.streak = 0;
  }
  
  // Show feedback
  showFeedback(isCorrect, question);
  
  // Save progress
  appState.saveTotalScore();
  appState.saveUserStats();
  appState.checkAchievements();
}

function showFeedback(isCorrect, question) {
  const feedbackModal = document.getElementById('feedbackModal');
  if (!feedbackModal) return;
  
  const messages = isCorrect ? APP_DATA.sarcastic_messages.correct : APP_DATA.sarcastic_messages.incorrect;
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  const feedbackEmoji = document.getElementById('feedbackEmoji');
  const feedbackMessage = document.getElementById('feedbackMessage');
  const feedbackExplanation = document.getElementById('feedbackExplanation');
  
  if (feedbackEmoji) feedbackEmoji.textContent = isCorrect ? '🎉' : '💀';
  if (feedbackMessage) feedbackMessage.textContent = randomMessage;
  if (feedbackExplanation) feedbackExplanation.textContent = question.explanation || question.notes || '';
  
  feedbackModal.classList.remove('hidden');
}

function nextQuestion() {
  const feedbackModal = document.getElementById('feedbackModal');
  if (feedbackModal) feedbackModal.classList.add('hidden');
  
  appState.currentQuestionIndex++;
  
  if (appState.currentQuestionIndex >= appState.currentQuestions.length) {
    showQuizResults();
  } else {
    updateQuizDisplay();
    displayQuestion();
  }
}

function showQuizResults() {
  const totalQuestions = appState.currentQuestions.length;
  const percentage = Math.round((appState.score / totalQuestions) * 100);
  const category = APP_DATA.categories.find(cat => cat.id === appState.currentCategory);
  
  // Add to leaderboard
  appState.addToLeaderboard(appState.score, category.name, 'Quiz');
  
  const resultsHTML = `
    <div class="text-center">
      <h2>測驗完成！</h2>
      <div style="font-size: 3rem; margin: 20px 0;">
        ${percentage >= 90 ? '🏆' : percentage >= 70 ? '🎯' : percentage >= 50 ? '📚' : '💀'}
      </div>
      <p>你答對了 <strong>${appState.score}/${totalQuestions}</strong> 題</p>
      <p>準確率: <strong>${percentage}%</strong></p>
      <p>獲得分數: <strong>+${appState.score * 10}</strong></p>
      ${appState.streak >= 5 ? '<p style="color: #00ffff;">🔥 連勝獎勵！</p>' : ''}
    </div>
  `;
  
  const resultsSummary = document.getElementById('resultsSummary');
  const resultsModal = document.getElementById('resultsModal');
  
  if (resultsSummary) resultsSummary.innerHTML = resultsHTML;
  if (resultsModal) resultsModal.classList.remove('hidden');
}

// Flashcard Functions
function initializeFlashcards() {
  shuffleArray(appState.currentQuestions);
  appState.currentQuestionIndex = 0;
  displayFlashcard();
}

function displayFlashcard() {
  const question = appState.currentQuestions[appState.currentQuestionIndex];
  if (!question) return;
  
  const flashcardQuestion = document.getElementById('flashcardQuestion');
  const flashcardAnswer = document.getElementById('flashcardAnswer');
  const flashcardNotes = document.getElementById('flashcardNotes');
  const cardCounter = document.getElementById('cardCounter');
  const flashcard = document.getElementById('flashcard');
  
  if (flashcardQuestion) flashcardQuestion.textContent = question.question;
  if (flashcardAnswer) flashcardAnswer.textContent = question.answer;
  if (flashcardNotes) flashcardNotes.textContent = question.notes || '';
  
  const current = appState.currentQuestionIndex + 1;
  const total = appState.currentQuestions.length;
  if (cardCounter) cardCounter.textContent = `${current} / ${total}`;
  
  // Reset flip state
  if (flashcard) flashcard.setAttribute('data-flipped', 'false');
}

function flipFlashcard() {
  const flashcard = document.getElementById('flashcard');
  if (!flashcard) return;
  
  const isFlipped = flashcard.getAttribute('data-flipped') === 'true';
  flashcard.setAttribute('data-flipped', (!isFlipped).toString());
}

function shuffleFlashcards() {
  shuffleArray(appState.currentQuestions);
  appState.currentQuestionIndex = 0;
  displayFlashcard();
}

function nextFlashcard() {
  appState.currentQuestionIndex = (appState.currentQuestionIndex + 1) % appState.currentQuestions.length;
  displayFlashcard();
}

function prevFlashcard() {
  appState.currentQuestionIndex = appState.currentQuestionIndex > 0 ? 
    appState.currentQuestionIndex - 1 : 
    appState.currentQuestions.length - 1;
  displayFlashcard();
}

function toggleAutoMode() {
  appState.autoMode = !appState.autoMode;
  const btn = document.getElementById('autoModeBtn');
  if (!btn) return;
  
  if (appState.autoMode) {
    btn.textContent = '⏸️ 停止';
    btn.style.background = '#ff0040';
    appState.autoTimer = setInterval(() => {
      const flashcard = document.getElementById('flashcard');
      if (flashcard && flashcard.getAttribute('data-flipped') === 'false') {
        flipFlashcard();
      } else {
        nextFlashcard();
      }
    }, 3000);
  } else {
    btn.textContent = '⏯️ 自動';
    btn.style.background = '';
    if (appState.autoTimer) {
      clearInterval(appState.autoTimer);
      appState.autoTimer = null;
    }
  }
}

// FAQ Functions
function initializeFAQ() {
  displayFAQItems(appState.currentQuestions);
}

function displayFAQItems(questions) {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;
  
  const faqHTML = questions.map((question, index) => `
    <div class="faq-item">
      <div class="faq-question" onclick="toggleFAQ(this)">
        <span>${question.question}</span>
        <span class="faq-toggle">▼</span>
      </div>
      <div class="faq-answer">
        <p><strong>答案:</strong> ${question.answer}</p>
        ${question.explanation ? `<p><strong>解釋:</strong> ${question.explanation}</p>` : ''}
        ${question.notes ? `<p><strong>筆記:</strong> ${question.notes}</p>` : ''}
      </div>
    </div>
  `).join('');
  
  faqList.innerHTML = faqHTML;
}

function toggleFAQ(element) {
  const faqItem = element.closest('.faq-item');
  if (faqItem) {
    faqItem.classList.toggle('expanded');
  }
}

function searchFAQ() {
  const faqSearch = document.getElementById('faqSearch');
  if (!faqSearch) return;
  
  const searchTerm = faqSearch.value.toLowerCase();
  const filteredQuestions = appState.currentQuestions.filter(question => 
    question.question.toLowerCase().includes(searchTerm) ||
    question.answer.toLowerCase().includes(searchTerm) ||
    (question.notes && question.notes.toLowerCase().includes(searchTerm))
  );
  displayFAQItems(filteredQuestions);
}

// Leaderboard Functions
function showLeaderboard() {
  showPage('leaderboard');
  displayLeaderboard('all');
}

function displayLeaderboard(period) {
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;
  
  let filteredData = [...appState.leaderboard];
  
  if (period === 'daily') {
    filteredData = filteredData.filter(entry => now - entry.timestamp <= oneDay);
  } else if (period === 'weekly') {
    filteredData = filteredData.filter(entry => now - entry.timestamp <= oneWeek);
  }
  
  const leaderboardHTML = filteredData.slice(0, 10).map((entry, index) => {
    const rank = index + 1;
    const rankClass = rank === 1 ? 'first' : rank === 2 ? 'second' : rank === 3 ? 'third' : '';
    const date = new Date(entry.date).toLocaleDateString('zh-HK');
    
    return `
      <div class="leaderboard-entry">
        <div class="rank ${rankClass}">#${rank}</div>
        <div class="user-info">
          <div>匿名用戶 #${entry.timestamp.toString().slice(-4)}</div>
          <div style="font-size: 12px; color: var(--color-text-secondary);">
            ${entry.category} - ${entry.mode} | ${date}
          </div>
        </div>
        <div class="score">${entry.score} 分</div>
      </div>
    `;
  }).join('');
  
  const leaderboardContent = document.getElementById('leaderboardContent');
  if (leaderboardContent) {
    leaderboardContent.innerHTML = leaderboardHTML || '<p class="text-center">暫無記錄</p>';
  }
  
  // Display achievements
  displayAchievements();
}

function displayAchievements() {
  const achievementsGrid = document.getElementById('achievementsGrid');
  if (!achievementsGrid) return;
  
  const achievementsHTML = APP_DATA.achievements.map(achievement => {
    const isUnlocked = appState.achievements.includes(achievement.name);
    return `
      <div class="achievement-card ${isUnlocked ? 'unlocked' : ''}">
        <div class="achievement-icon">${achievement.icon}</div>
        <div class="achievement-name">${achievement.name}</div>
        <div class="achievement-description">${achievement.description}</div>
      </div>
    `;
  }).join('');
  
  achievementsGrid.innerHTML = achievementsHTML;
}

// Add Question Functions
function showAddQuestionForm() {
  showPage('addQuestionForm');
}

function addQuestion(formData) {
  const newQuestion = {
    id: Date.now(),
    question: formData.question,
    answer: formData.answer,
    options: formData.options,
    correct: formData.options.indexOf(formData.answer),
    category: formData.category,
    difficulty: formData.difficulty,
    hints: formData.hints,
    notes: formData.notes,
    explanation: formData.explanation,
    media: { image: '', video: '' }
  };
  
  // Add to local data
  if (!APP_DATA.questions[formData.category]) {
    APP_DATA.questions[formData.category] = [];
  }
  APP_DATA.questions[formData.category].push(newQuestion);
  
  // Show success message
  alert('題目新增成功！🎉');
  
  // Reset form and return to dashboard
  const questionForm = document.getElementById('questionForm');
  if (questionForm) questionForm.reset();
  
  showPage('dashboard');
  initializeDashboard();
}

// Utility Functions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showHint() {
  const question = appState.currentQuestions[appState.currentQuestionIndex];
  if (!question || !question.hints) return;
  
  const hintIndex = Math.min(appState.currentHintLevel, question.hints.length - 1);
  const hint = question.hints[hintIndex];
  
  const hintContent = document.getElementById('hintContent');
  const hintModal = document.getElementById('hintModal');
  
  if (hintContent) {
    hintContent.innerHTML = `
      <p><strong>提示 ${appState.currentHintLevel + 1}:</strong></p>
      <p>${hint}</p>
      ${appState.currentHintLevel < question.hints.length - 1 ? 
        '<p style="font-size: 12px; color: var(--color-text-secondary);">點擊再次獲取更多提示</p>' : ''
      }
    `;
  }
  
  if (hintModal) hintModal.classList.remove('hidden');
  appState.currentHintLevel++;
}

function showNotes() {
  const question = appState.currentQuestions[appState.currentQuestionIndex];
  if (!question) return;
  
  const notesContent = document.getElementById('notesContent');
  const notesModal = document.getElementById('notesModal');
  
  if (notesContent) {
    notesContent.innerHTML = `
      <p><strong>筆記:</strong></p>
      <p>${question.notes || '此題目沒有額外筆記'}</p>
      ${question.explanation ? `<hr><p><strong>詳細解釋:</strong></p><p>${question.explanation}</p>` : ''}
    `;
  }
  
  if (notesModal) notesModal.classList.remove('hidden');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  // Initialize app
  initializeDashboard();
  appState.updateDisplay();
  
  // Dashboard category selection
  document.addEventListener('click', function(e) {
    const categoryCard = e.target.closest('.category-card');
    if (categoryCard) {
      const categoryId = categoryCard.dataset.category;
      selectCategory(categoryId);
      return;
    }
    
    const modeCard = e.target.closest('.mode-card');
    if (modeCard) {
      const mode = modeCard.dataset.mode;
      selectMode(mode);
      return;
    }
    
    const optionBtn = e.target.closest('.option-btn');
    if (optionBtn && !appState.questionAnswered) {
      const answerIndex = parseInt(optionBtn.dataset.index);
      selectAnswer(answerIndex);
      return;
    }
    
    // Close modals when clicking outside
    if (e.target.classList.contains('modal')) {
      e.target.classList.add('hidden');
    }
  });
  
  // Flashcard interactions
  const flashcard = document.getElementById('flashcard');
  if (flashcard) {
    flashcard.addEventListener('click', flipFlashcard);
  }
  
  // Search functionality
  const faqSearch = document.getElementById('faqSearch');
  if (faqSearch) {
    faqSearch.addEventListener('input', searchFAQ);
  }
  
  // Button event listeners
  const setupButton = (id, handler) => {
    const element = document.getElementById(id);
    if (element) element.addEventListener('click', handler);
  };
  
  setupButton('leaderboardBtn', showLeaderboard);
  setupButton('addQuestionBtn', showAddQuestionForm);
  setupButton('nextQuestionBtn', nextQuestion);
  setupButton('hintBtn', showHint);
  setupButton('notesBtn', showNotes);
  setupButton('shuffleBtn', shuffleFlashcards);
  setupButton('autoModeBtn', toggleAutoMode);
  setupButton('nextCardBtn', nextFlashcard);
  setupButton('prevCardBtn', prevFlashcard);
  
  // Back buttons
  setupButton('backToDashboard', () => showPage('dashboard'));
  setupButton('backToCategory', () => showPage('categoryPage'));
  setupButton('backToCategoryFlash', () => showPage('categoryPage'));
  setupButton('backToCategoryFaq', () => showPage('categoryPage'));
  setupButton('backFromLeaderboard', () => showPage('dashboard'));
  setupButton('backFromAddQuestion', () => showPage('dashboard'));
  setupButton('backToDashboardFromResults', () => {
    const resultsModal = document.getElementById('resultsModal');
    if (resultsModal) resultsModal.classList.add('hidden');
    showPage('dashboard');
  });
  
  // Modal close buttons
  setupButton('closeHint', () => {
    const hintModal = document.getElementById('hintModal');
    if (hintModal) hintModal.classList.add('hidden');
  });
  setupButton('closeNotes', () => {
    const notesModal = document.getElementById('notesModal');
    if (notesModal) notesModal.classList.add('hidden');
  });
  setupButton('closeResults', () => {
    const resultsModal = document.getElementById('resultsModal');
    if (resultsModal) resultsModal.classList.add('hidden');
  });
  
  // Retry quiz button
  setupButton('retryQuiz', () => {
    const resultsModal = document.getElementById('resultsModal');
    if (resultsModal) resultsModal.classList.add('hidden');
    selectMode('quiz');
  });
  
  // Leaderboard tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      displayLeaderboard(this.dataset.tab);
    });
  });
  
  // Flashcard difficulty buttons
  document.querySelectorAll('.btn--difficulty').forEach(btn => {
    btn.addEventListener('click', function() {
      // Visual feedback for difficulty selection
      this.style.background = 'currentColor';
      this.style.color = 'var(--color-dark-bg)';
      setTimeout(() => {
        this.style.background = '';
        this.style.color = '';
        nextFlashcard();
      }, 300);
    });
  });
  
  // Form submission
  const questionForm = document.getElementById('questionForm');
  if (questionForm) {
    questionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = {
        category: document.getElementById('questionCategory').value,
        question: document.getElementById('questionInput').value,
        answer: document.getElementById('answerInput').value,
        options: document.getElementById('optionsInput').value.split('|').map(s => s.trim()),
        difficulty: document.getElementById('difficultySelect').value,
        hints: document.getElementById('hintsInput').value.split('|').map(s => s.trim()).filter(s => s),
        notes: document.getElementById('notesInput').value,
        explanation: document.getElementById('explanationInput').value
      };
      
      // Validation
      if (!formData.question || !formData.answer) {
        alert('請填寫題目和答案');
        return;
      }
      
      if (formData.options.length < 2) {
        alert('請至少提供兩個選項');
        return;
      }
      
      if (!formData.options.includes(formData.answer)) {
        formData.options.unshift(formData.answer);
      }
      
      addQuestion(formData);
    });
  }
});

// Add CSS animation for achievement notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Make toggleFAQ available globally
window.toggleFAQ = toggleFAQ;