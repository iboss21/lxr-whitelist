/*
    ██╗     ██╗  ██╗██████╗        ██╗    ██╗██╗  ██╗██╗████████╗███████╗██╗     ██╗███████╗████████╗
    ██║     ╚██╗██╔╝██╔══██╗       ██║    ██║██║  ██║██║╚══██╔══╝██╔════╝██║     ██║██╔════╝╚══██╔══╝
    ██║      ╚███╔╝ ██████╔╝█████╗ ██║ █╗ ██║███████║██║   ██║   █████╗  ██║     ██║███████╗   ██║   
    ██║      ██╔██╗ ██╔══██╗╚════╝ ██║███╗██║██╔══██║██║   ██║   ██╔══╝  ██║     ██║╚════██║   ██║   
    ███████╗██╔╝ ██╗██║  ██║       ╚███╔███╔╝██║  ██║██║   ██║   ███████╗███████╗██║███████║   ██║   
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝        ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝╚══════╝   ╚═╝   
                                                                                                       
    🐺 LXR Whitelist - Application Evaluation Engine
    
    This evaluation engine provides AI-powered scoring and analysis for RedM
    roleplay server whitelist applications. Built specifically for Georgian RP
    with comprehensive criteria and detailed feedback generation.
    
    ═══════════════════════════════════════════════════════════════════════════════
    SERVER INFORMATION
    ═══════════════════════════════════════════════════════════════════════════════
    
    Server:      The Land of Wolves 🐺
    Tagline:     Georgian RP 🇬🇪 | მგლების მიწა - რჩეულთა ადგილი!
    Description: ისტორია ცოცხლდება აქ! (History Lives Here!)
    Type:        Serious Hardcore Roleplay
    Access:      Discord & Whitelisted
    
    Developer:   iBoss21 / The Lux Empire
    Website:     https://www.wolves.land
    Discord:     https://discord.gg/CrKcWdfd3A
    GitHub:      https://github.com/iBoss21
    Store:       https://theluxempire.tebex.io
    Server:      https://servers.redm.net/servers/detail/8gj7eb
    
    ═══════════════════════════════════════════════════════════════════════════════
    
    Version: 1.0.0
    Performance Target: Optimized for instant evaluation with detailed feedback
    
    Tags: RedM, Georgian, SeriousRP, Whitelist, Evaluation, AI, Scoring
    
    Framework Support:
    - LXR Core (Primary)
    - RSG Core (Compatible)
    - VORP Core (Compatible)
    - Standalone (Frontend Web Application)
    
    ═══════════════════════════════════════════════════════════════════════════════
    CREDITS
    ═══════════════════════════════════════════════════════════════════════════════
    
    Script Author: iBoss21 / The Lux Empire for The Land of Wolves
    Original Concept: Whitelist evaluation system for Georgian RP
    Inspired by: Professional recruitment and HR evaluation systems
    
    © 2026 iBoss21 / The Lux Empire | wolves.land | All Rights Reserved
*/

// ═══════════════════════════════════════════════════════════════════════════════
// 🐺 EVALUATION ENGINE CORE
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Evaluation criteria and scoring weights
 */
export const EVALUATION_CRITERIA = {
  loreConsistency: {
    name: 'ლორი და ეპოქასთან შესაბამისობა',
    nameEn: 'Lore & Era Consistency',
    weight: 0.15,
    maxScore: 10
  },
  characterDepth: {
    name: 'პერსონაჟის სიღრმე',
    nameEn: 'Character Depth',
    weight: 0.20,
    maxScore: 10
  },
  motivationClarity: {
    name: 'მოტივაციის სიცხადე',
    nameEn: 'Motivation Clarity',
    weight: 0.20,
    maxScore: 10
  },
  rpSustainability: {
    name: 'RP მდგრადობა',
    nameEn: 'RP Sustainability',
    weight: 0.20,
    maxScore: 10
  },
  risks: {
    name: 'რისკები / წითელი ნიშნები',
    nameEn: 'Risk / Red Flags',
    weight: 0.15,
    maxScore: 10
  },
  languageStructure: {
    name: 'ენა და სტრუქტურა',
    nameEn: 'Language & Structure',
    weight: 0.10,
    maxScore: 10
  }
};

export const MINIMUM_PASSING_SCORE = 8.0;

/**
 * Parse whitelist application text into structured data
 */
export function parseApplication(text) {
  const lines = text.split('\n').filter(line => line.trim());
  
  const application = {
    rawText: text,
    fields: {}
  };
  
  // Extract fields using regex patterns
  const fieldPatterns = {
    name: /სახელი და გვარი.*?:\s*(.+)/i,
    age: /ასაკი.*?:\s*(\d+)/i,
    origin: /წარმოშობა და ბავშვობა.*?:\s*(.+)/i,
    character: /ხასიათი და ქცევა.*?:\s*(.+)/i,
    weaknesses: /სისუსტეები და შიშები.*?:\s*(.+)/i,
    conflictAttitude: /კონფლიქტისადმი დამოკიდებულება.*?:\s*(.+)/i,
    currentState: /მიმდინარე მდგომარეობა.*?:\s*(.+)/i,
    rpGoals: /მიზნები RP-ში.*?:\s*(.+)/i
  };
  
  for (const [key, pattern] of Object.entries(fieldPatterns)) {
    const match = text.match(pattern);
    if (match) {
      application.fields[key] = match[1].trim();
    }
  }
  
  return application;
}

/**
 * Calculate word count
 */
function getWordCount(text) {
  if (!text) return 0;
  return text.split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Evaluate lore and era consistency
 */
function evaluateLoreConsistency(application) {
  const { origin, currentState } = application.fields;
  const text = `${origin} ${currentState}`.toLowerCase();
  
  let score = 7.0;
  let assessment = 'გარემოსთან თავსებადია, თუმცა აღწერა ძალიან ზოგადია.';
  
  // Positive indicators
  const positiveKeywords = [
    'მექსიკ', 'ამერიკ', 'ქალაქ', 'უბან', 'ოჯახ', 'ფერმ', 
    'ნადირ', 'ქუჩა', 'სოფელ', 'საზღვარ', 'valentine', 'saint denis'
  ];
  
  const negativeKeywords = [
    'თანამედროვე', 'ტელეფონ', 'ინტერნეტ', 'მანქან', 'კომპიუტერ'
  ];
  
  const positiveCount = positiveKeywords.filter(kw => text.includes(kw)).length;
  const negativeCount = negativeKeywords.filter(kw => text.includes(kw)).length;
  
  if (positiveCount >= 3) {
    score += 1.5;
    assessment = 'კარგად ჯდება Western გარემოსთან და რეალისტურია.';
  }
  
  if (negativeCount > 0) {
    score -= 2.0;
    assessment = 'შეიცავს ანაქრონიზმებს და არ შეესაბამება ეპოქას.';
  }
  
  // Check for specific details
  const wordCount = getWordCount(origin);
  if (wordCount >= 40) {
    score += 0.5;
  }
  
  return {
    score: Math.min(10, Math.max(1, score)),
    assessment
  };
}

/**
 * Evaluate character depth
 */
function evaluateCharacterDepth(application) {
  const { origin, weaknesses, character } = application.fields;
  const combined = `${origin} ${weaknesses} ${character}`.toLowerCase();
  
  let score = 6.5;
  let assessment = 'არ ჩანს კონკრეტული მოვლენა ან ტრავმა, რომელიც პერსონაჟს ფორმირებს.';
  
  // Look for trauma indicators
  const traumaKeywords = [
    'გარდაიცვალ', 'დაიღუპ', 'დაკარგ', 'მოკლ', 'სიკვდილ', 'ტრავმ', 
    'მძიმე', 'სირთულ', 'ტანჯ', 'ღარიბ', 'უბედურება', 'შიმშილ'
  ];
  
  // Look for emotional depth
  const emotionalKeywords = [
    'შიში', 'ემოცი', 'სევდ', 'მარტოობ', 'სინანულ', 'ჩაკეტ',
    'მგრძნობიარ', 'შინაგან', 'ფსიქოლოგ'
  ];
  
  const traumaCount = traumaKeywords.filter(kw => combined.includes(kw)).length;
  const emotionalCount = emotionalKeywords.filter(kw => combined.includes(kw)).length;
  
  if (traumaCount >= 2) {
    score += 1.0;
    assessment = 'ტრავმა და ძლიერი გამოცდილება ქმნის სიუჟეტურ საფუძველს.';
  }
  
  if (emotionalCount >= 2) {
    score += 0.5;
    assessment = 'ემოციური სიღრმე და ფსიქოლოგიური საფუძველი აშკარაა.';
  }
  
  // Check for generic descriptions
  if (combined.includes('უბრალო') && combined.includes('მშვიდი') && traumaCount === 0) {
    score -= 1.0;
    assessment = 'პერსონაჟი ზედმეტად ზოგადია და აკლია უნიკალური ელემენტები.';
  }
  
  return {
    score: Math.min(10, Math.max(1, score)),
    assessment
  };
}

/**
 * Evaluate motivation clarity
 */
function evaluateMotivationClarity(application) {
  const { rpGoals, currentState } = application.fields;
  const text = `${rpGoals} ${currentState}`.toLowerCase();
  
  let score = 7.0;
  let assessment = 'მიზნები გასაგებია, თუმცა ზოგადია.';
  
  // Specific goals
  const specificGoals = [
    'ოჯახ', 'რანჩო', 'მაღაზი', 'ბიზნეს', 'ავტორიტეტ', 'შერიფ', 
    'მარშალ', 'ვაჭრობ', 'ნადირობ', 'საკუთარი', 'დასახლდ'
  ];
  
  // Generic/vague goals
  const genericGoals = [
    'ფულ', 'ძალა', 'გავლენ', 'წინსვლ', 'წარმატებ'
  ];
  
  const specificCount = specificGoals.filter(kw => text.includes(kw)).length;
  const genericCount = genericGoals.filter(kw => text.includes(kw)).length;
  
  if (specificCount >= 2) {
    score += 1.0;
    assessment = 'კონკრეტული და გრძელვადიანი მიზნები მკაფიოა.';
  } else if (genericCount >= 2 && specificCount === 0) {
    score -= 0.5;
    assessment = 'მიზნები ზედმეტად ზოგადია და არა პერსონალური.';
  }
  
  return {
    score: Math.min(10, Math.max(1, score)),
    assessment
  };
}

/**
 * Evaluate RP sustainability
 */
function evaluateRPSustainability(application) {
  const { rpGoals, character, conflictAttitude } = application.fields;
  const text = `${rpGoals} ${character} ${conflictAttitude}`.toLowerCase();
  
  let score = 7.5;
  let assessment = 'პერსონაჟი შეიძლება განვითარდეს, მაგრამ საჭიროებს კონტროლს.';
  
  // Positive RP indicators
  const positiveRP = [
    'სოციალურ', 'ურთიერთობ', 'თანამშრომლობ', 'გუნდ', 'მეგობრ',
    'ეკონომიკ', 'ვაჭრობ', 'მუშაობ', 'განვითარებ'
  ];
  
  // Negative RP indicators
  const negativeRP = [
    'მოვკლავ', 'დავანგრევ', 'გავანადგურ', 'შურ'
  ];
  
  const positiveCount = positiveRP.filter(kw => text.includes(kw)).length;
  const negativeCount = negativeRP.filter(kw => text.includes(kw)).length;
  
  if (positiveCount >= 2) {
    score += 0.5;
    assessment = 'სოციალური და ეკონომიკური RP ხაზები განვითარებადია.';
  }
  
  if (negativeCount > 0) {
    score -= 1.0;
    assessment = 'ძალადობაზე ორიენტაცია საჭიროებს კონტროლს RP-ში.';
  }
  
  return {
    score: Math.min(10, Math.max(1, score)),
    assessment
  };
}

/**
 * Evaluate risks and red flags
 */
function evaluateRisks(application) {
  const { rpGoals, conflictAttitude, character } = application.fields;
  const text = `${rpGoals} ${conflictAttitude} ${character}`.toLowerCase();
  
  let score = 8.0;
  let assessment = 'მინიმალური რისკები, კონტროლირებადი ქცევა.';
  
  // Red flags
  const redFlags = {
    violence: ['ძალადობ', 'სისასტიკ', 'სასტიკ', 'მოვკლავ', 'სისხლ'],
    power: ['ძალაუფლებ', 'გავლენ', 'დომინირებ', 'მოვიგებ', 'ავტორიტეტ'],
    revenge: ['შურ', 'შურისძიებ', 'გამოვიხდ', 'გადავუხდ'],
    chaos: ['ქაოს', 'რეპირებ', 'გამოვუვლ', 'არეულობ']
  };
  
  let flagCount = 0;
  let mainRisk = '';
  
  for (const [category, keywords] of Object.entries(redFlags)) {
    const count = keywords.filter(kw => text.includes(kw)).length;
    if (count > 0) {
      flagCount += count;
      if (category === 'violence') mainRisk = 'ძალადობაზე ფოკუსი';
      else if (category === 'power') mainRisk = 'ძალაუფლებაზე ფოკუსი';
      else if (category === 'revenge') mainRisk = 'შურისძიების მოტივი';
      else if (category === 'chaos') mainRisk = 'ქაოსური ქცევა';
    }
  }
  
  if (flagCount >= 3) {
    score = 6.0;
    assessment = `${mainRisk} → მაღალი RDM/Power-RP რისკი.`;
  } else if (flagCount >= 1) {
    score = 7.0;
    assessment = `${mainRisk} → საჭიროებს კონტროლს RP-ში.`;
  }
  
  // Positive indicators
  const positiveIndicators = ['მშვიდ', 'დიპლომატ', 'საუბარ', 'შეთანხმებ', 'მოლაპარაკებ'];
  const positiveCount = positiveIndicators.filter(kw => text.includes(kw)).length;
  
  if (positiveCount >= 2 && flagCount === 0) {
    score = 8.5;
    assessment = 'დაბალანსებული მიდგომა კონფლიქტისადმი.';
  }
  
  return {
    score: Math.min(10, Math.max(1, score)),
    assessment
  };
}

/**
 * Evaluate language and structure
 */
function evaluateLanguageStructure(application) {
  const { fields } = application;
  
  let score = 8.0;
  let assessment = 'ტექსტი გასაგებია და გამართულია.';
  
  // Check if all fields are filled
  const requiredFields = ['name', 'age', 'origin', 'character', 'rpGoals'];
  const filledFields = requiredFields.filter(field => fields[field] && fields[field].length > 10);
  
  if (filledFields.length < requiredFields.length) {
    score -= 2.0;
    assessment = 'არასრული განაცხადი, ზოგიერთი ველი ცარიელია.';
  }
  
  // Check word counts
  const originWords = getWordCount(fields.origin);
  const characterWords = getWordCount(fields.character);
  
  if (originWords < 20 || characterWords < 20) {
    score -= 1.0;
    assessment = 'ძალიან მოკლე აღწერა, აკლია დეტალები.';
  }
  
  if (originWords > 50 && characterWords > 50) {
    score += 0.5;
    assessment = 'დეტალური და ჩამოყალიბებული ტექსტი.';
  }
  
  return {
    score: Math.min(10, Math.max(1, score)),
    assessment
  };
}

/**
 * Main evaluation function
 */
export function evaluateWhitelist(text) {
  if (!text || text.trim().length < 50) {
    return {
      error: 'განაცხადი ზედმეტად მოკლეა ან ცარიელია',
      status: 'rejected'
    };
  }
  
  const application = parseApplication(text);
  
  // Evaluate each criteria
  const loreResult = evaluateLoreConsistency(application);
  const depthResult = evaluateCharacterDepth(application);
  const motivationResult = evaluateMotivationClarity(application);
  const sustainabilityResult = evaluateRPSustainability(application);
  const risksResult = evaluateRisks(application);
  const languageResult = evaluateLanguageStructure(application);
  
  // Calculate weighted score
  const scores = {
    loreConsistency: loreResult.score,
    characterDepth: depthResult.score,
    motivationClarity: motivationResult.score,
    rpSustainability: sustainabilityResult.score,
    risks: risksResult.score,
    languageStructure: languageResult.score
  };
  
  let totalScore = 0;
  for (const [key, score] of Object.entries(scores)) {
    totalScore += score * EVALUATION_CRITERIA[key].weight;
  }
  
  // Round to 1 decimal
  const finalScore = Math.round(totalScore * 10) / 10;
  
  // Determine status
  const status = finalScore >= MINIMUM_PASSING_SCORE ? 'accepted' : 'rejected';
  
  // Generate recommendations
  const recommendations = [];
  if (scores.characterDepth < 7) {
    recommendations.push('დაამატეთ კონკრეტული მოვლენები და ტრავმა პერსონაჟის ფორმირებისთვის');
  }
  if (scores.loreConsistency < 7) {
    recommendations.push('დააკონკრეტეთ ადგილები და ეპოქის კონტექსტი');
  }
  if (scores.motivationClarity < 7) {
    recommendations.push('განსაზღვრეთ უფრო კონკრეტული და პერსონალური მიზნები');
  }
  if (scores.risks < 7) {
    recommendations.push('შეამცირეთ ძალადობაზე ორიენტაცია და დაამატეთ RP ალტერნატივები');
  }
  
  return {
    application,
    scores,
    finalScore,
    status,
    minimumScore: MINIMUM_PASSING_SCORE,
    assessments: {
      loreConsistency: loreResult.assessment,
      characterDepth: depthResult.assessment,
      motivationClarity: motivationResult.assessment,
      rpSustainability: sustainabilityResult.assessment,
      risks: risksResult.assessment,
      languageStructure: languageResult.assessment
    },
    recommendations,
    timestamp: new Date().toISOString()
  };
}
