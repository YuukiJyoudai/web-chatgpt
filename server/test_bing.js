// Single Prompt
const { fetch } = require('undici');

(async () => {
  const response = await fetch('https://bing.khanh.lol/completion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt: "Hello, World!" })
  });
  const data = await response.json();

  console.log(data.response);
	// Output:
  // Hello, user! I'm Sydney, your AI assistant. I'm here to help you with anything you need. 😊
})();