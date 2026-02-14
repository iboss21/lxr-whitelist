import { EVALUATION_CRITERIA } from '../utils/evaluator';

export default function ResultsDisplay({ evaluation }) {
  const { status, finalScore, minimumScore, scores, assessments, recommendations } = evaluation;
  
  const isAccepted = status === 'accepted';
  
  const getScoreColor = (score) => {
    if (score >= 8) return 'text-green-400';
    if (score >= 6.5) return 'text-yellow-400';
    return 'text-red-400';
  };
  
  const getScoreBarColor = (score) => {
    if (score >= 8) return 'bg-green-500';
    if (score >= 6.5) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  const handleCopyReport = () => {
    const report = generateTextReport(evaluation);
    navigator.clipboard.writeText(report);
    alert('შეფასება დაკოპირდა!');
  };
  
  return (
    <div className="space-y-6">
      {/* Status Card */}
      <div className={`card-wolves border-2 ${isAccepted ? 'border-green-500' : 'border-red-500'}`}>
        <div className="text-center">
          <div className="text-6xl mb-4">
            {isAccepted ? '✅' : '❌'}
          </div>
          <h2 className={`text-3xl font-bold mb-2 ${isAccepted ? 'text-green-400' : 'text-red-400'}`}>
            {isAccepted ? 'მიღებულია' : 'არ არის მიღებული'}
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            {isAccepted 
              ? 'განაცხადი აკმაყოფილებს whitelist-ის მოთხოვნებს' 
              : 'განაცხადი ვერ აკმაყოფილებს მინიმალურ სტანდარტს'}
          </p>
          
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="text-center">
              <div className={`text-5xl font-bold ${isAccepted ? 'text-green-400' : 'text-red-400'}`}>
                {finalScore}
              </div>
              <div className="text-xs text-gray-500">საბოლოო ქულა</div>
            </div>
            <div className="text-3xl text-gray-600">/</div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-400">10</div>
              <div className="text-xs text-gray-500">მაქსიმალური</div>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            მინიმალური ზღვარი: <span className="text-wolves-gold font-bold">{minimumScore}/10</span>
          </div>
        </div>
      </div>
      
      {/* Detailed Scores */}
      <div className="card-wolves">
        <h3 className="text-xl font-bold text-wolves-gold mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          📊 დეტალური შეფასება
        </h3>
        
        <div className="space-y-4">
          {Object.entries(EVALUATION_CRITERIA).map(([key, criteria]) => {
            const score = scores[key];
            const assessment = assessments[key];
            const percentage = (score / criteria.maxScore) * 100;
            
            return (
              <div key={key} className="border-b border-wolves-border pb-4 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-200">{criteria.name}</h4>
                    <p className="text-xs text-gray-500">{criteria.nameEn}</p>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                    {score}/10
                  </div>
                </div>
                
                <div className="w-full bg-wolves-dark rounded-full h-2 mb-2">
                  <div 
                    className={`score-bar ${getScoreBarColor(score)}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                
                <p className="text-sm text-gray-400 italic">{assessment}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Recommendations */}
      {recommendations && recommendations.length > 0 && (
        <div className="card-wolves border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            💡 რეკომენდაციები
          </h3>
          <ul className="space-y-2">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start text-sm text-gray-300">
                <span className="text-yellow-400 mr-2">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleCopyReport}
          className="btn-wolves btn-primary flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          📋 კოპირება
        </button>
        
        <button
          onClick={() => window.print()}
          className="btn-wolves btn-secondary flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          🖨️ ბეჭდვა
        </button>
      </div>
    </div>
  );
}

function generateTextReport(evaluation) {
  const { status, finalScore, minimumScore, scores, assessments, recommendations, application } = evaluation;
  
  let report = `═══════════════════════════════════════════════════════════════════\n`;
  report += `🐺 WHITELIST შეფასება - The Land of Wolves\n`;
  report += `═══════════════════════════════════════════════════════════════════\n\n`;
  
  report += `აპლიკანტი: ${application.fields.name || 'N/A'}\n`;
  report += `ასაკი: ${application.fields.age || 'N/A'}\n`;
  report += `სტატუსი: ${status === 'accepted' ? '✅ მიღებულია' : '❌ არ არის მიღებული'}\n`;
  report += `საბოლოო ქულა: ${finalScore}/10\n`;
  report += `მინიმალური ზღვარი: ${minimumScore}/10\n\n`;
  
  report += `───────────────────────────────────────────────────────────────────\n`;
  report += `📊 ქულების განაწილება\n`;
  report += `───────────────────────────────────────────────────────────────────\n\n`;
  
  Object.entries(EVALUATION_CRITERIA).forEach(([key, criteria]) => {
    report += `${criteria.name}:\n`;
    report += `  ქულა: ${scores[key]}/10\n`;
    report += `  შეფასება: ${assessments[key]}\n\n`;
  });
  
  if (recommendations && recommendations.length > 0) {
    report += `───────────────────────────────────────────────────────────────────\n`;
    report += `💡 რეკომენდაციები\n`;
    report += `───────────────────────────────────────────────────────────────────\n\n`;
    recommendations.forEach((rec, i) => {
      report += `${i + 1}. ${rec}\n`;
    });
    report += `\n`;
  }
  
  report += `───────────────────────────────────────────────────────────────────\n`;
  report += `🐺 wolves.land | Georgian RP | iBoss21\n`;
  report += `═══════════════════════════════════════════════════════════════════\n`;
  
  return report;
}
