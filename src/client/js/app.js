const evaluateArticle = async () => {
    const articleText = document.getElementById('article-input').value;
    const response = await fetch('/api/evaluate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: articleText }),
    });

    const result = await response.json();
    document.getElementById('evaluation-result').innerText = `Đánh giá: ${result.evaluation}`;
};

document.getElementById('evaluate-button').addEventListener('click', evaluateArticle);
