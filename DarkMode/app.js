const toggleBtn = document.querySelector('.btn');
const articlesContainer = document.querySelector('.articles');

toggleBtn.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark-theme');
})

const articlesData = articles.map((article) => {
	const {title, data, length, snippet} = article;
	const formatDate = new Date(date).toLocaleDateString('en-US', {
		month: 'long', day: 'numeric', year: 'numeric'
		
	
	});

})