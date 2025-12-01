import React from 'react'

const Analytics = () => {
  const data = [
    { name: "MMLU", desc: "General knowledge", tech: 45.4, pre: 46.91, post: 44.12 },
    { name: "HellaSwag", desc: "Common sense reasoning", tech: 49.3, pre: 47.55, post: 49.66 },
    { name: "Winogrande", desc: "Natural Language", tech: 56.8, pre: 54.14, post: 54.85 },
    { name: "TruthfulQA", desc: "Factuality & hallucination check", tech: 39.7, pre: 44.05, post: 36.27 },
    { name: "GSM8K", desc: "Multi-step math word problems", tech: 36.5, pre: 38.29, post: 24.49 },
  ];
  return (
    <div className="overflow-x-auto mt-16">
      <table className="min-w-full text-md text-left border-2 border-primary rounded-lg">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3">Benchmark</th>
            <th className="px-6 py-3">Description</th>
            <th className="px-6 py-3 text-center">Tech Report</th>
            <th className="px-6 py-3 text-center">Pre-Fine-Tune</th>
            <th className="px-6 py-3 text-center">Post-Fine-Tune</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.name} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
              <td className="px-6 py-4 text-gray-500">{row.desc}</td>
              <td className="px-6 py-4 text-center">{row.tech}</td>
              <td className="px-6 py-4 text-center">{row.pre}</td>
              <td className="px-6 py-4 text-center">{row.post}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics