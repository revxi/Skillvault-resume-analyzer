import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">SkillVault</h1>
      <p className="text-lg mb-6">Upload your resume to analyze your skills and discover career growth paths.</p>
      <input type="file" accept=".pdf,.doc,.docx" className="p-2 border rounded bg-white" />
    </div>
  );
}

export default App;