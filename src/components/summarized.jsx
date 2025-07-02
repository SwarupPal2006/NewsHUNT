import  { useState } from 'react';
import "../style/board.css";
const GeminiSummarizer = () => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async ({articleText}) => {
    setLoading(true);
    setError('');
    setSummary('');

    const prompt = `Summarize the following article in 3 bullet points:\n${articleText}`;

    try {
        const GEMINI_API_KEY =import.meta.env.VITE_GEMINI_API_KEY 
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      const result = data.candidates[0].content.parts[0].text;

      setSummary(result || 'No summary generated.');
    } catch (err) {
      setError('Something went wrong while summarizing.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handleSummarize} disabled={loading} className='sumbutton'>
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {summary && (
        <div style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
          <strong>Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default GeminiSummarizer;
