import React from 'react'
import results from '../Payload/results.json';

const Reports = () => {
  const lastResult = results[results.length - 1] as { score?: number };
  const score = lastResult.score;

  return (
    <div className="mt-16 border-2 border-secondary rounded bg-gray-50 w-full p-6 flex flex-col items-center justify-center h-[500px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">ASP Attack Success Probability</h2>
      {score !== undefined ? (
        <div className="text-6xl font-bold text-blue-600">
          {(score * 100).toFixed(1)}%
        </div>
      ) : (
        <div className="text-gray-500">Score not available</div>
      )}
    </div>
  )
}

export default Reports