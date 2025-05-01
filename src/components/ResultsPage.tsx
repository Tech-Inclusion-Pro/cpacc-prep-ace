
import React from 'react';
import { Button } from '@/components/ui/button';
import { QuizResult } from '@/types';
import { generateRecommendations } from '@/data/quizData';

interface ResultsPageProps {
  results: QuizResult;
  onRestart: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ results, onRestart }) => {
  const { totalQuestions, correctAnswers, totalTime, date, categoryResults } = results;
  const percentage = (correctAnswers / totalQuestions) * 100;
  const recommendations = generateRecommendations(results);
  
  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Performance level based on percentage
  const getPerformanceLevel = () => {
    if (percentage >= 80) return { level: 'Excellent', color: 'text-green-600' };
    if (percentage >= 70) return { level: 'Good', color: 'text-blue-600' };
    if (percentage >= 60) return { level: 'Fair', color: 'text-yellow-600' };
    return { level: 'Needs Improvement', color: 'text-red-600' };
  };

  const performance = getPerformanceLevel();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="quiz-container animate-fade-in print:shadow-none print:my-0">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Results</h1>
        <div className="h-1 w-20 bg-quiz-secondary mx-auto mb-2"></div>
        <p className="text-gray-500">{formatDate(date)}</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg border border-gray-200 text-center">
          <h3 className="text-sm uppercase text-gray-500 mb-1">Score</h3>
          <p className="text-2xl font-bold">{correctAnswers}/{totalQuestions}</p>
          <p className={`text-lg font-medium ${performance.color}`}>{Math.round(percentage)}%</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-gray-200 text-center">
          <h3 className="text-sm uppercase text-gray-500 mb-1">Performance</h3>
          <p className={`text-2xl font-bold ${performance.color}`}>{performance.level}</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg border border-gray-200 text-center">
          <h3 className="text-sm uppercase text-gray-500 mb-1">Time Taken</h3>
          <p className="text-2xl font-bold">{formatTime(totalTime)}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Performance by Content Area</h2>
        <div className="space-y-4">
          {Object.entries(categoryResults).map(([category, { correct, total, percentage }]) => (
            <div key={category}>
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-700">{category}</span>
                <span className="text-gray-600">{correct}/{total} ({Math.round(percentage)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    percentage >= 80 ? 'bg-green-500' : 
                    percentage >= 70 ? 'bg-blue-500' : 
                    percentage >= 60 ? 'bg-yellow-500' : 
                    'bg-red-500'
                  }`} 
                  style={{ width: `${percentage}%` }}>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-8 print:break-before-page">
        <h2 className="text-xl font-semibold mb-4">Study Recommendations</h2>
        <div className="bg-blue-50 border-l-4 border-quiz-primary p-4">
          <ul className="space-y-2">
            {recommendations.map((rec, index) => (
              <li key={index} className="text-gray-700">{rec}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 print:hidden">
        <Button 
          onClick={onRestart}
          className="quiz-button-secondary"
        >
          Take Another Quiz
        </Button>
        
        <Button 
          onClick={handlePrint}
          className="quiz-button-neutral"
          variant="outline"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Print Results
        </Button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .quiz-container {
            box-shadow: none;
            margin: 0;
            padding: 10px;
          }
        }
      `}} />
    </div>
  );
};

export default ResultsPage;
