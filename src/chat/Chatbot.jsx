import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

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
      }
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUserInput = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = userInput.trim();
    setUserInput('');
    setMessages(prev => [...prev, { content: userMessage, role: 'user' }]);
    setIsLoading(true);

    // Simple keyword matching for FAQ
    let bestMatch = null;
    let highestScore = 0;

    Object.values(faq).flat().forEach(qa => {
      const score = calculateRelevance(userMessage.toLowerCase(), qa.question.toLowerCase());
      if (score > highestScore) {
        highestScore = score;
        bestMatch = qa;
      }
    });

    setTimeout(() => {
      setIsLoading(false);
      setMessages(prev => [...prev, {
        content: highestScore > 0.3 ? bestMatch.answer : "I'm not sure about that. Could you try rephrasing your question or select one from the suggested topics below?",
        role: 'assistant'
      }]);
    }, 800);
  };


  const calculateRelevance = (input, question) => {
    const inputWords = input.split(' ');
    const questionWords = question.split(' ');
    let matchCount = 0;

    inputWords.forEach(word => {
      if (questionWords.includes(word)) matchCount++;
    });

    return matchCount / Math.max(inputWords.length, questionWords.length);
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

  const handleChatOpen = () => {
    setIsChatOpen(true);
    setMessages([{
      content: "Hi! We are Azoumag and Zaimi. How can I help you today? Feel free to ask questions about exercise, nutrition, or general wellness!",
      role: 'assistant',
    }]);
  };

  return (
    <div className="fixed bottom-4 right-4  z-50">
      {isChatOpen ? (
        <div className="w-[90%] sm:w-96 sm:h-[600px] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#faa307] to-[#faa307]/50 p-4 rounded-t-xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-white" />
              <h2 className="text-white text-lg font-semibold">Fitness Coach</h2>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-orange-50 to-white">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-xl max-w-[85%] ${message.role === 'user' 
                  ? 'bg-gradient-to-l from-[#faa307] to-[#faa307]/80 text-white' 
                  : 'bg-white shadow-md text-black'}`}>
                  <p className="whitespace-pre-line text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center py-2">
                <Loader2 className="h-6 w-6 animate-spin text-[#faa307]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleUserInput} className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                ref={inputRef}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                disabled={!userInput.trim()}
                className="p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* FAQ Categories */}
          <div className="p-4 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">Suggested Topics:</h3>
            <div className="space-y-2">
              {Object.entries(faq).map(([category, questions]) => (
                <div key={category} className="space-y-1">
                  <h4 className="text-xs font-medium text-gray-500 uppercase">{category}</h4>
                  <div className="flex flex-wrap gap-1">
                    {questions.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleClickQuestion(item.question, item.answer)}
                        className="text-sm text-orange-600 hover:text-orange-700 hover:underline"
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
      ) : (
        <button
          onClick={handleChatOpen}
          className="bg-gradient-to-r from-[#faa307] to-[#faa307]/50 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
