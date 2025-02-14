<div align="center">
  <a href="https://fauzi8162.github.io/Ollama-Model-Ui-Chat-Design/" />
    <img alt="ollama" height="400px" src="https://github.com/fauzi8162/Ollama-Model-Ui-Chat-Design/blob/main/screenshot.png">
  </a>
</div>

# Ollama | Open Source LLM (Large Language Model)

Get up and running with large language models.

### macOS

[Download](https://ollama.com/download/Ollama-darwin.zip)

### Windows

[Download](https://ollama.com/download/OllamaSetup.exe)

### Linux

```shell
curl -fsSL https://ollama.com/install.sh | sh
```

[Manual install instructions](https://github.com/ollama/ollama/blob/main/docs/linux.md)

## Quickstart

After finish instalation Ollama
To run and chat with `example` [DeepSeek-R1 (1.5b)](https://ollama.com/library/deepseek-r1:1.5b):

```shell
ollama run deepseek-r1:1.5b
```

## Model library

Ollama supports a list of models available on [ollama.com/library](https://ollama.com/library 'ollama model library')

Here are some example models that can be downloaded:

| Model              | Parameters | Size  | Download                         |
| ------------------ | ---------- | ----- | -------------------------------- |
| DeepSeek-R1 (1.5b) | 1.5B       | 1.1GB | `ollama run deepseek-r1:1.5b`    |
| DeepSeek-R1 (7b)   | 7B         | 4.7GB | `ollama run deepseek-r1`         |
| DeepSeek-R1 (671b) | 671B       | 404GB | `ollama run deepseek-r1:671b`    |
| Llama 3.2          | 1B         | 1.3GB | `ollama run llama3.2:1b`         |
| Llama 3.1          | 405B       | 231GB | `ollama run llama3.1:405b`       |
| Phi 3 Mini         | 3.8B       | 2.3GB | `ollama run phi3`                |
| Gemma 2            | 2B         | 1.6GB | `ollama run gemma2:2b`           |
| Mistral            | 7B         | 4.1GB | `ollama run mistral`             |
| Moondream 2        | 1.4B       | 829MB | `ollama run moondream`           |
| Neural Chat        | 7B         | 4.1GB | `ollama run neural-chat`         |
| Starling           | 7B         | 4.1GB | `ollama run starling-lm`         |
| Code Llama         | 7B         | 3.8GB | `ollama run codellama`           |
| Llama 2 Uncensored | 7B         | 3.8GB | `ollama run llama2-uncensored`   |
| LLaVA              | 7B         | 4.5GB | `ollama run llava`               |
| Solar              | 10.7B      | 6.1GB | `ollama run solar`               |

> [!NOTE]
> You should have at least 8 GB of RAM available to run the 7B models, 16 GB to run the 13B models, and 32 GB to run the 33B models.

## Testing

### Fetch Javascript

```js
fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
		model: "deepseek-r1:1.5b", 
		stream: false, 
		prompt: "Halo, apa kabar?" 
		})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
```

### curl Command Prompt Windows

   ```shell
   curl -X POST http://localhost:11434/api/generate -H "Content-Type: application/json" -d "{\"model\": \"deepseek-r1:1.5b\", \"prompt\": \"Halo, apa kabar?\"}"
   ```
