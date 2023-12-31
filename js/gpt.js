
const URL = "https://api.openai.com/v1/chat/completions";

function reply() {
    var API_KEY = document.getElementById("api_text").value;
    var text = document.getElementById("request_text").value;
    async function getResponse() {
        try {
            const response = await axios.post(
                URL,
                {
                    "model": "gpt-3.5-turbo",
                    
                    "messages": [
                        { "role": "system", "content": "架空のポケモンを以下の形式で50字程度で説明して 名前: タイプ: 特性: 説明: " },
                        { "role": "user", "content": text }
                    ]
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${API_KEY}`,
                    },
                }
            );
            var chatgpt_response = response.data.choices[0].message.content;
            $("#response_text").val(chatgpt_response);
        } catch (error) {
            console.log(error);
        }
    }
    getResponse();
}