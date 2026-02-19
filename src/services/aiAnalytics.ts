/*
    ██╗     ██╗  ██╗██████╗        ██╗    ██╗██╗  ██╗██╗████████╗███████╗██╗     ██╗███████╗████████╗
    ██║     ╚██╗██╔╝██╔══██╗       ██║    ██║██║  ██║██║╚══██╔══╝██╔════╝██║     ██║██╔════╝╚══██╔══╝
    ██║      ╚███╔╝ ██████╔╝█████╗ ██║ █╗ ██║███████║██║   ██║   █████╗  ██║     ██║███████╗   ██║   
    ██║      ██╔██╗ ██╔══██╗╚════╝ ██║███╗██║██╔══██║██║   ██║   ██╔══╝  ██║     ██║╚════██║   ██║   
    ███████╗██╔╝ ██╗██║  ██║       ╚███╔███╔╝██║  ██║██║   ██║   ███████╗███████╗██║███████║   ██║   
    ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝        ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝╚══════╝   ╚═╝   
                                                                                                       
    🐺 LXR Whitelist - AI Analytics Service
    
    Advanced AI-powered character analysis and suspicion detection system.
    Supports OpenAI, Anthropic Claude, and Grok for deep character insights.
    
    © 2026 iBoss21 / The Lux Empire | wolves.land | All Rights Reserved
*/

// ═══════════════════════════════════════════════════════════════════════════════
// 🐺 AI ANALYTICS ENGINE
// ═══════════════════════════════════════════════════════════════════════════════

export interface AIAnalysisResult {
  suspicionLevel: 'none' | 'low' | 'medium' | 'high' | 'critical';
  suspicionScore: number;
  redFlags: string[];
  greenFlags: string[];
  characterProfile: {
    archetype: string;
    traits: string[];
    motivationAnalysis: string;
    conflictStyle: string;
  };
  behavioralPredictions: {
    likelyToRDM: number;
    likelyToPowerplay: number;
    likelyToFailRP: number;
    likelyToBePositive: number;
  };
  recommendations: string[];
  aiInsights: string;
}

// AI Provider Configuration
const getAIConfig = () => {
  return {
    provider: import.meta.env.VITE_AI_PROVIDER || 'openai',
    openai: {
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-4o',
    },
    anthropic: {
      apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
      model: import.meta.env.VITE_ANTHROPIC_MODEL || 'claude-3-5-sonnet-20241022',
    },
    grok: {
      apiKey: import.meta.env.VITE_GROK_API_KEY,
      model: import.meta.env.VITE_GROK_MODEL || 'grok-beta',
    },
    features: {
      suspicionDetection: import.meta.env.VITE_AI_SUSPICION_DETECTION === 'true',
      characterAnalysis: import.meta.env.VITE_AI_CHARACTER_ANALYSIS === 'true',
      recommendationEngine: import.meta.env.VITE_AI_RECOMMENDATION_ENGINE === 'true',
    },
  };
};

/**
 * Advanced AI-powered character analysis
 */
export async function analyzeWithAI(
  applicationText: string,
  evaluationScores: any
): Promise<AIAnalysisResult> {
  const config = getAIConfig();

  // If AI is not configured, return rule-based analysis
  if (!config.features.suspicionDetection && !config.features.characterAnalysis) {
    return performRuleBasedAnalysis(applicationText, evaluationScores);
  }

  try {
    // Prepare the analysis prompt
    const analysisPrompt = buildAnalysisPrompt(applicationText, evaluationScores);

    // Call appropriate AI provider
    let aiResponse: string;
    
    switch (config.provider) {
      case 'anthropic':
        aiResponse = await callAnthropicAI(analysisPrompt, config.anthropic);
        break;
      case 'grok':
        aiResponse = await callGrokAI(analysisPrompt, config.grok);
        break;
      case 'openai':
      default:
        aiResponse = await callOpenAI(analysisPrompt, config.openai);
        break;
    }

    // Parse AI response
    return parseAIResponse(aiResponse, evaluationScores);
  } catch (error) {
    console.error('AI Analysis failed, falling back to rule-based:', error);
    return performRuleBasedAnalysis(applicationText, evaluationScores);
  }
}

/**
 * Build comprehensive analysis prompt for AI
 */
function buildAnalysisPrompt(applicationText: string, scores: any): string {
  return `You are an expert RedM roleplay server administrator analyzing a whitelist application for "The Land of Wolves" Georgian RP server.

Application Text:
${applicationText}

Current Evaluation Scores:
- Lore Consistency: ${scores.loreConsistency}/10
- Character Depth: ${scores.characterDepth}/10
- Motivation Clarity: ${scores.motivationClarity}/10
- RP Sustainability: ${scores.rpSustainability}/10
- Risks/Red Flags: ${scores.risks}/10
- Language Structure: ${scores.languageStructure}/10

Please provide a detailed JSON analysis with:
1. suspicionLevel: Rate from "none", "low", "medium", "high", "critical"
2. suspicionScore: 0-100 numerical score
3. redFlags: Array of specific concerns
4. greenFlags: Array of positive indicators
5. characterProfile: Detailed character archetype and traits
6. behavioralPredictions: Likelihood percentages for RDM, powerplay, fail RP, and positive behavior
7. recommendations: Specific actionable recommendations
8. aiInsights: 2-3 sentence summary of your overall assessment

Focus on detecting:
- Power-gaming tendencies
- Meta-gaming indicators
- Unrealistic character concepts
- Potential RDM/VDM behavior
- Fail RP red flags
- Positive community contribution potential

Return ONLY valid JSON, no additional text.`;
}

/**
 * Call OpenAI API
 */
async function callOpenAI(prompt: string, config: any): Promise<string> {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        {
          role: 'system',
          content: 'You are an expert RedM RP server administrator. Always respond with valid JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

/**
 * Call Anthropic Claude API
 */
async function callAnthropicAI(prompt: string, config: any): Promise<string> {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': config.apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: config.model,
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.content[0].text;
}

/**
 * Call Grok AI API
 */
async function callGrokAI(prompt: string, config: any): Promise<string> {
  const response = await fetch('https://api.x.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages: [
        {
          role: 'system',
          content: 'You are an expert RedM RP server administrator. Always respond with valid JSON only.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`Grok API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

/**
 * Parse AI response into structured analysis
 */
function parseAIResponse(aiResponse: string, scores: any): AIAnalysisResult {
  try {
    const parsed = JSON.parse(aiResponse);
    
    return {
      suspicionLevel: parsed.suspicionLevel || 'low',
      suspicionScore: parsed.suspicionScore || 20,
      redFlags: parsed.redFlags || [],
      greenFlags: parsed.greenFlags || [],
      characterProfile: parsed.characterProfile || {
        archetype: 'Unknown',
        traits: [],
        motivationAnalysis: 'No analysis available',
        conflictStyle: 'Unknown',
      },
      behavioralPredictions: parsed.behavioralPredictions || {
        likelyToRDM: 10,
        likelyToPowerplay: 10,
        likelyToFailRP: 10,
        likelyToBePositive: 70,
      },
      recommendations: parsed.recommendations || [],
      aiInsights: parsed.aiInsights || 'No AI insights available',
    };
  } catch (error) {
    console.error('Failed to parse AI response:', error);
    return performRuleBasedAnalysis('', scores);
  }
}

/**
 * Rule-based analysis (fallback when AI is not available)
 */
function performRuleBasedAnalysis(applicationText: string, scores: any): AIAnalysisResult {
  const text = applicationText.toLowerCase();
  
  // Calculate suspicion based on scores
  const riskScore = scores.risks || 5;
  const avgScore = Object.values(scores as Record<string, number>).reduce((a, b) => a + b, 0) / Object.keys(scores).length;
  
  let suspicionLevel: AIAnalysisResult['suspicionLevel'] = 'none';
  let suspicionScore = 0;
  
  if (riskScore < 6) {
    suspicionLevel = 'high';
    suspicionScore = 75;
  } else if (riskScore < 7) {
    suspicionLevel = 'medium';
    suspicionScore = 50;
  } else if (riskScore < 8) {
    suspicionLevel = 'low';
    suspicionScore = 25;
  } else {
    suspicionLevel = 'none';
    suspicionScore = 10;
  }
  
  // Detect red flags
  const redFlags: string[] = [];
  const greenFlags: string[] = [];
  
  if (text.includes('მოვკლავ') || text.includes('ძალადობ')) {
    redFlags.push('🚩 ძალადობაზე ფოკუსირებული ქცევა');
  }
  
  if (text.includes('შურ') || text.includes('შურისძიებ')) {
    redFlags.push('🚩 შურისძიების მოტივი - RDM რისკი');
  }
  
  if (text.includes('ძალა') && text.includes('გავლენ')) {
    redFlags.push('🚩 Power-gaming ინდიკატორები');
  }
  
  if (scores.characterDepth > 8) {
    greenFlags.push('✅ სიღრმისეული პერსონაჟის განვითარება');
  }
  
  if (scores.motivationClarity > 8) {
    greenFlags.push('✅ მკაფიო და რეალისტური მოტივაცია');
  }
  
  if (scores.rpSustainability > 8) {
    greenFlags.push('✅ გრძელვადიანი RP პოტენციალი');
  }
  
  // Character archetype detection
  let archetype = 'Neutral Character';
  if (text.includes('ნადირ')) archetype = 'Hunter/Survivalist';
  if (text.includes('ვაჭარ')) archetype = 'Merchant/Trader';
  if (text.includes('შერიფ') || text.includes('კანონ')) archetype = 'Lawman';
  if (text.includes('განდგომ')) archetype = 'Outlaw';
  
  return {
    suspicionLevel,
    suspicionScore,
    redFlags,
    greenFlags,
    characterProfile: {
      archetype,
      traits: ['Rule-based analysis', 'Limited insights'],
      motivationAnalysis: 'Basic pattern matching used - consider enabling AI for deeper analysis',
      conflictStyle: 'Unable to determine without AI',
    },
    behavioralPredictions: {
      likelyToRDM: riskScore < 7 ? 60 : 15,
      likelyToPowerplay: riskScore < 7 ? 50 : 20,
      likelyToFailRP: avgScore < 7 ? 50 : 15,
      likelyToBePositive: avgScore > 8 ? 80 : 50,
    },
    recommendations: [
      'Enable AI analytics for comprehensive character analysis',
      'Configure API keys in .env file for advanced insights',
    ],
    aiInsights: 'Rule-based analysis complete. Enable AI providers for advanced psychological profiling and behavioral predictions.',
  };
}
