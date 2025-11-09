import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function MythAI() {
  const [prompt, setPrompt] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const generateStory = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setStory("");
    try {
      const res = await axios.post("http://localhost:5001/api/openai/generate", { prompt });
      setStory(res.data.story);
    } catch (err) {
      setStory("Error generating story.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="parchment-card">
      <h2>⚡ Myth-Maker (OpenAI)</h2>
      <textarea
        rows="4"
        placeholder="Ask the gods to forge a tale..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateStory} disabled={loading}>
        {loading ? "Forging..." : "Generate Myth"}
      </button>

      {story && (
        <div className="narrative">
          <h3>📜 Your Myth</h3>
          <p>{story}</p>
        </div>
      )}
    </div>
  );
}
