import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Make the error message more user-friendly
if (!apiKey || apiKey === 'your_gemini_api_key') {
  throw new Error(
    'Please add your Gemini API key to the .env file. You can get one from https://makersuite.google.com/app/apikey'
  );
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export async function summarizePaper(text: string): Promise<string> {
  const prompt = `Please provide a comprehensive summary of the following research paper. Focus on the main findings, methodology, and conclusions. Here's the paper text:\n\n${text}`;
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error summarizing paper:', error);
    throw error;
  }
}

export async function detectBias(text: string): Promise<string> {
  const prompt = `Analyze the following research paper for potential biases. Consider:
  1. Selection bias in methodology
  2. Confirmation bias in conclusions
  3. Sampling bias in data collection
  4. Cultural or geographical bias
  5. Funding source bias
  6. Publication bias
  
  Provide a detailed analysis of any biases found and their potential impact on the research findings.
  
  Paper text:\n\n${text}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error detecting bias:', error);
    throw error;
  }
}

export async function answerQuestion(text: string, question: string): Promise<string> {
  const prompt = `Using the context of the following research paper, please answer this question: "${question}"
  
  Paper text:\n\n${text}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error answering question:', error);
    throw error;
  }
}