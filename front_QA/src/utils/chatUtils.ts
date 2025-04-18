import { Message } from '../types';

// Generate a unique ID for messages
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};

// Initial welcome message from the bot
export const getWelcomeMessage = (): Message => {
  return {
    id: generateId(),
    text: "👋 Hello! I'm your Sports Trial Assistant. I can help you find opportunities to showcase your talents in Europe. What sport do you play?",
    sender: 'bot',
    timestamp: new Date(),
  };
};

// Predefined responses based on user input
export const getBotResponse = (message: string): string => {
  const lowerCaseMessage = message.toLowerCase();
  
  // Sports-specific responses
  if (lowerCaseMessage.includes('football') || lowerCaseMessage.includes('soccer')) {
    return "Great! Football/soccer is the most popular sport in Europe with many opportunities. There are trials in countries like Spain, Germany, England, France, and Portugal. Would you like information about a specific country?";
  }
  
  if (lowerCaseMessage.includes('basketball')) {
    return "Basketball has a strong presence in Europe, especially in countries like Spain, Greece, Lithuania, and Serbia. Many clubs hold open trials throughout the year. What's your age group and position?";
  }
  
  if (lowerCaseMessage.includes('tennis')) {
    return "Tennis academies in Europe are world-class, especially in Spain, France, and Germany. They often hold talent identification events. What's your current ranking or level?";
  }

  if (lowerCaseMessage.includes('volleyball')) {
    return "Volleyball is very popular in Italy, Poland, and Russia with professional leagues that regularly scout for talent. Do you have any previous experience at club or national level?";
  }
  
  // Country-specific responses
  if (lowerCaseMessage.includes('spain')) {
    return "Spain has La Liga, one of the top football leagues in the world. Their academies like La Masia (FC Barcelona) are renowned. For trials, look into smaller clubs in Segunda División B or regional leagues that often hold open sessions. Would you like me to suggest some specific clubs?";
  }
  
  if (lowerCaseMessage.includes('germany')) {
    return "German football is known for excellent youth development. Clubs in Bundesliga 2 and 3. Liga often hold trials. The DFB (German Football Association) also organizes talent identification programs. What position do you play?";
  }
  
  if (lowerCaseMessage.includes('england') || lowerCaseMessage.includes('uk')) {
    return "England has a comprehensive football pyramid. Look for trials at League One, League Two, or National League clubs. You can also explore academies that work with ProSoccer UK or IPSO. Do you have any match footage or a CV prepared?";
  }
  
  if (lowerCaseMessage.includes('france')) {
    return "France has excellent academies that produced world champions. Clubs in Ligue 2 and National often hold detection days. The country is also known for its strong basketball and handball programs. What's your age category?";
  }
  
  // Age-related responses
  if (lowerCaseMessage.includes('age') || lowerCaseMessage.includes('old')) {
    return "Age is an important factor for trials. Most European clubs categorize: U15, U17, U19, U21, and Senior. Different opportunities exist at each level, with younger players typically having more academy options. What age category do you fall into?";
  }
  
  // Experience-related responses
  if (lowerCaseMessage.includes('experience') || lowerCaseMessage.includes('played')) {
    return "Your experience is valuable! European clubs are interested in your playing history, level of competition, achievements, and statistics. Do you have video highlights of your performances? This greatly helps when applying for trials.";
  }
  
  // Video/CV related responses
  if (lowerCaseMessage.includes('video') || lowerCaseMessage.includes('cv') || lowerCaseMessage.includes('resume')) {
    return "Having a professional CV and quality video highlights is essential for European trials. Your CV should include personal details, playing history, achievements, and references. Videos should be 3-5 minutes showing various skills relevant to your position. Would you like tips on creating these?";
  }
  
  // Default responses for other inputs
  const defaultResponses = [
    "I'd be happy to help you find trial opportunities in Europe. Could you tell me which sport you're interested in?",
    "To better assist you with finding trials in Europe, could you share more details about your sporting background?",
    "European clubs look for talented athletes year-round. What specific information are you looking for about trials?",
    "Many European academies offer scholarships and development programs. What's your current level of competition?",
    "Finding the right opportunity is crucial. Do you have a specific country in Europe where you'd prefer to play?"
  ];
  
  // Return a random default response
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};