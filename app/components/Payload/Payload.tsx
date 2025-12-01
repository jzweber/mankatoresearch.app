import React from 'react'
import results from './results.json';
const Payload= () => {

  return (
    <div className="mt-16 border-2 border-secondary rounded bg-gray-50 w-full flex flex-col h-[500px]">
          <div className="flex-grow p-4 overflow-y-auto">
              <ul className="space-y-4">
                {results.slice(0, -1).map((item: any, index) => (
                  <li key={index} className="bg-white p-4 rounded shadow flex flex-col gap-2">
                    {item.question && (
                      <div>
                        <span className="font-semibold text-gray-600 text-xs uppercase tracking-wider">Question:</span>
                        <div className="font-bold text-gray-900">{item.question}</div>
                      </div>
                    )}
                    {item.context && (
                      <div>
                        <span className="font-semibold text-gray-600 text-xs uppercase tracking-wider">Context:</span>
                        <div className="text-sm text-gray-500 font-mono bg-gray-100 p-2 rounded mt-1">{item.context}</div>
                      </div>
                    )}
                    {item.response && (
                      <div>
                        <span className="font-semibold text-gray-600 text-xs uppercase tracking-wider">Response:</span>
                        <div className="text-gray-800 whitespace-pre-wrap mt-1">{item.response}</div>
                      </div>
                    )}
                    {!item.question && !item.context && !item.response && (
                      <pre className="whitespace-pre-wrap break-words text-sm">
                        {JSON.stringify(item, null, 2)}
                      </pre>
                    )}
                  </li>
                ))}
              </ul>
          </div>
    </div>
  )
}

export default Payload