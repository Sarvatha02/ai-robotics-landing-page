// API client for submitting workshop registration enquiry
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function submitEnquiry(data) {
  try {
    const response = await fetch(`${API_URL}/api/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Something went wrong. Please try again.');
    }
    
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}
