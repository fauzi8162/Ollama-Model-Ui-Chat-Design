async function sendMessage() {
    const inputField = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const modelSelect = document.getElementById("model-select");
    const userMessage = inputField.value.trim();
    const selectedModel = modelSelect.value;

    if (!userMessage) return;

    // Tambahkan pesan user ke UI
    chatBox.innerHTML += `<div class="message user">${userMessage}</div>`;
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch("http://localhost:11434/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                model: selectedModel, 
                prompt: userMessage,
                stream: true 
            })
        });

        // Pastikan response body berupa stream
        if (!response.body) throw new Error("Streaming tidak tersedia.");

        // Buat elemen baru untuk menampung respons bot
        const botMessageElement = document.createElement("div");
        botMessageElement.classList.add("message", "bot");
        chatBox.appendChild(botMessageElement);

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let partialMessage = "";

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const jsonChunks = chunk.trim().split("\n");

            for (const jsonChunk of jsonChunks) {
                try {
                    const parsed = JSON.parse(jsonChunk);
                    if (parsed.response) {
                        partialMessage += parsed.response;
                        botMessageElement.innerText = partialMessage; // Update teks bot
                        chatBox.scrollTop = chatBox.scrollHeight;
                    }
                } catch (error) {
                    console.error("Gagal parsing JSON chunk:", jsonChunk, error);
                }
            }
        }
    } catch (error) {
        console.error("Error:", error);
        chatBox.innerHTML += `<div class="message bot">⚠️ Gagal terhubung ke server.</div>`;
    }
}

// Enter untuk mengirim pesan
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
