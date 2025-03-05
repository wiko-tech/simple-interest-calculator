// Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the URL of the JSON file
var url = './health_article.json';

// Open a GET request to fetch the JSON file in asynchronous mode
xhr.open('GET', url, true);

// Set the expected response type to JSON
xhr.responseType = 'json';

// Handle the response when it's loaded
xhr.onload = function () {
    if (xhr.status === 200) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');
        displayArticles(articles, articlesDiv);
    } else {
        console.error('Failed to load JSON file');
    }
};

// Handle any network errors
xhr.onerror = function () {
    console.error('Network error occurred');
};

// Send the request
xhr.send();

// Function to display articles in the HTML page
function displayArticles(articles, articlesDiv) {
    if (!articles || articles.length === 0) {
        articlesDiv.innerHTML = '<p>No articles available.</p>';
        return;
    }
    
    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
        
        var title = document.createElement('h2');
        title.textContent = article.title;
        
        var description = document.createElement('p');
        description.textContent = article.description;
        
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
        
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });
        
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
        
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });
        
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
        articlesDiv.appendChild(articleDiv);
    });
}
