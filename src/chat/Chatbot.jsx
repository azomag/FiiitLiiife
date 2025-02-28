import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Info, ArrowDown } from 'lucide-react';

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showCategories, setShowCategories] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const chatContentRef = useRef(null);

  // Enhanced FAQ with categories and more detailed answers
  const faq = {
    exercise: [
      {
        question: "What are the benefits of regular exercise?",
        answer: "Regular exercise offers numerous benefits:\n• Improves cardiovascular health\n• Boosts mental well-being\n• Increases strength and endurance\n• Helps maintain healthy weight\n• Reduces risk of chronic diseases\n• Improves sleep quality"
      },
      {
        question: "How often should I exercise?",
        answer: "For optimal health benefits, aim for:\n• 150 minutes of moderate activity or 75 minutes of vigorous activity per week\n• 2-3 strength training sessions per week\n• Daily stretching and mobility work"
      },
      {
        question: "What's a good beginner workout routine?",
        answer: "A balanced beginner routine includes:\n• 2-3 days of full-body strength training\n• 2-3 days of moderate cardio (walking, cycling)\n• 1-2 days of active recovery (yoga, light stretching)\n• Start with shorter sessions (20-30 minutes) and gradually increase duration"
      }
    ],
    nutrition: [
      {
        question: "How much water should I drink?",
        answer: "Water intake needs vary by individual, but general guidelines suggest:\n• 2-3 liters (8-10 glasses) per day\n• More during exercise or hot weather\n• Monitor urine color - should be light yellow"
      },
      {
        question: "What should I eat before and after workouts?",
        answer: "Pre-workout (1-2 hours before):\n• Complex carbs\n• Lean protein\n• Low fat\n\nPost-workout (within 30 minutes):\n• Protein for muscle recovery\n• Simple carbs to replenish glycogen"
      },
      {
        question: "How can I eat healthier on a budget?",
        answer: "Budget-friendly healthy eating tips:\n• Plan meals and shop with a list\n• Buy seasonal produce\n• Use frozen fruits and vegetables\n• Purchase beans, lentils, and whole grains in bulk\n• Prep meals at home rather than eating out\n• Use cheaper protein sources like eggs and canned tuna"
      }
    ],
    wellness: [
      {
        question: "How can I improve sleep quality?",
        answer: "Follow these sleep hygiene tips:\n• Consistent sleep schedule\n• Dark, cool bedroom environment\n• No screens 1 hour before bed\n• Regular exercise (but not right before bed)\n• Limit caffeine after 2pm"
      },
      {
        question: "How can I reduce stress?",
        answer: "Try these stress management techniques:\n• Regular meditation\n• Deep breathing exercises\n• Regular physical activity\n• Time in nature\n• Proper sleep habits\n• Setting boundaries"
      },
      {
        question: "What are good recovery strategies?",
        answer: "Effective recovery methods include:\n• Quality sleep (7-9 hours)\n• Proper hydration\n• Balanced nutrition\n• Active recovery (light movement)\n• Foam rolling and stretching\n• Contrast therapy (alternating hot and cold)\n• Regular rest days between intense workouts"
      }
    ]
  };

  // Initial greeting message
  const initialGreeting = "Hi! I'm your Fitness Coach. How can I help you today? Feel free to ask questions about exercise, nutrition, or wellness!";

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([{
        content: initialGreeting,
        role: 'assistant',
      }]);
    }
  }, [isChatOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isChatOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isChatOpen]);

  // Improved keyword matching algorithm
  const calculateRelevance = (input, question) => {
    // Convert to lowercase and split into words
    const inputWords = input.toLowerCase().split(/\W+/).filter(word => word.length > 2);
    const questionWords = question.toLowerCase().split(/\W+/).filter(word => word.length > 2);
    
    let matchCount = 0;
    const inputWordSet = new Set(inputWords);
    
    // Count matching words
    questionWords.forEach(word => {
      if (inputWordSet.has(word)) matchCount++;
      
      // Partial match for longer words (more than 5 chars)
      if (word.length > 5) {
        inputWords.forEach(inputWord => {
          if (inputWord.length > 5 && (word.includes(inputWord) || inputWord.includes(word))) {
            matchCount += 0.5;
          }
        });
      }
    });
    
    // Consider input length for better matching
    return matchCount / (0.5 * (inputWords.length + questionWords.length));
  };

  const handleUserInput = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = userInput.trim();
    setUserInput('');
    setMessages(prev => [...prev, { content: userMessage, role: 'user' }]);
    setIsLoading(true);

    // Find best matching FAQ
    let bestMatch = null;
    let highestScore = 0;
    let categoryMatches = {};

    // Initialize categories score
    Object.keys(faq).forEach(category => {
      categoryMatches[category] = 0;
    });

    // Search through all FAQs
    Object.entries(faq).forEach(([category, questions]) => {
      questions.forEach(qa => {
        const score = calculateRelevance(userMessage, qa.question);
        
        // Add to category score
        categoryMatches[category] += score * 0.5;
        
        if (score > highestScore) {
          highestScore = score;
          bestMatch = qa;
        }
      });
    });

    // Fallback responses based on category detection
    let fallbackResponse = "I'm not sure about that. Could you try rephrasing your question or select one from the suggested topics below?";
    
    // Find highest scoring category
    let topCategory = Object.entries(categoryMatches).sort((a, b) => b[1] - a[1])[0];
    
    if (topCategory[1] > 0.2) {
      switch(topCategory[0]) {
        case 'exercise':
          fallbackResponse = "That seems to be about exercise. While I don't have a specific answer, I recommend starting with consistent activity that you enjoy, whether it's walking, swimming, or strength training. Would you like to see some of our exercise-related questions?";
          break;
        case 'nutrition':
          fallbackResponse = "I understand you're asking about nutrition. A balanced diet with plenty of vegetables, lean proteins, and whole grains is generally recommended. Would you like to explore our nutrition questions?";
          break;
        case 'wellness':
          fallbackResponse = "That appears to be a wellness question. Balance in physical activity, nutrition, sleep, and stress management is key to overall wellbeing. Would you like to see some wellness topics I can help with?";
          break;
      }
    }

    setTimeout(() => {
      setIsLoading(false);
      setMessages(prev => [...prev, {
        content: highestScore > 0.3 ? bestMatch.answer : fallbackResponse,
        role: 'assistant'
      }]);
    }, 800);
  };

  const handleClickQuestion = (question, answer) => {
    setMessages(prev => [
      ...prev,
      { content: question, role: 'user' },
    ]);
    
    setIsLoading(true);
    
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { content: answer, role: 'assistant' },
      ]);
      setIsLoading(false);
    }, 800);
  };

  const toggleCategories = () => {
    setShowCategories(prev => !prev);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isChatOpen ? (
        <div className="w-[95vw] max-w-md h-[80vh] max-h-[600px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#faa307] to-[#faa307]/80 p-3 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-white" />
              <h2 className="text-white text-base font-semibold">Fitness Coach</h2>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleCategories}
                className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                aria-label="Toggle categories"
              >
                <Info className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-white/20 p-1.5 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Messages */}
            <div 
              ref={chatContentRef}
              className="flex-1 p-3 overflow-y-auto bg-gradient-to-b from-orange-50 to-white scroll-smooth"
            >
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-3 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div 
                    className={`inline-block p-2.5 rounded-xl max-w-[85%] ${
                      message.role === 'user' 
                        ? 'bg-gradient-to-l from-[#faa307] to-[#faa307]/80 text-white' 
                        : 'bg-white shadow-md text-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start py-2 pl-2">
                  <div className="bg-white shadow-md rounded-xl p-3">
                    <Loader2 className="h-5 w-5 animate-spin text-[#faa307]" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} className="h-1" />
            </div>

            {/* New Messages Notification */}
            {messagesEndRef.current && !isElementInView(messagesEndRef.current) && messages.length > 2 && (
              <button 
                onClick={scrollToBottom}
                className="absolute bottom-32 right-4 bg-[#faa307] text-white p-2 rounded-full shadow-md hover:bg-[#f59000] transition-colors"
                aria-label="Scroll to bottom"
              >
                <ArrowDown className="h-4 w-4" />
              </button>
            )}

            {/* Input */}
            <form onSubmit={handleUserInput} className="p-3 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  ref={inputRef}
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
                />
                <button
                  type="submit"
                  disabled={!userInput.trim() || isLoading}
                  className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>

            {/* FAQ Categories - Collapsible */}
            <div 
              className={`border-t border-gray-200 transition-all duration-300 ${
                showCategories ? 'max-h-60 overflow-y-auto py-2' : 'max-h-0 overflow-hidden py-0'
              }`}
            >
              <div className="px-3">
                <h3 className="text-xs font-semibold text-gray-600 mb-2">Suggested Topics:</h3>
                <div className="space-y-2">
                  {Object.entries(faq).map(([category, questions]) => (
                    <div key={category} className="space-y-1">
                      <h4 className="text-xs font-medium text-gray-500 uppercase">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {questions.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              handleClickQuestion(item.question, item.answer);
                              if (window.innerWidth < 640) setShowCategories(false);
                            }}
                            className="text-xs text-orange-600 hover:text-orange-700 hover:underline truncate max-w-full"
                          >
                            {item.question}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-gradient-to-r from-[#faa307] to-[#faa307]/80 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

// Helper function to check if an element is in the viewport
function isElementInView(el) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export default ChatBot;