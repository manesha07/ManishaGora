var body = document.body;
const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');
const blogs = [
	{
	  title:
		"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
	  content:
		"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
	},
	{
	  title:
		"qui est esse",
	  content:
		"est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
	},
	{
	  title:
		"ea molestias quasi exercitationem repellat qui ipsa sit aut",
	  content:
		"et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut",
	},
	{
	  title:
		"eum et est occaecati",
	  content:
		"ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit",
	},
	{
	  title:
		"nesciunt quas odio",
	  content:
		"repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque",
	},
	{
		title:
		  "dolorem eum magni eos aperiam quia",
		content:
		  "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae",
	  },
	  {
		title:
		  "magnam facilis autem",
		content:
		  "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas",
	  },
	  {
		title:
		  "dolorem dolore est ipsam",
		content:
		  "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae",
	  },
	  {
		title:
		  "nesciunt iure omnis dolorem tempora et accusantium",
		content:
		  "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas",
	  },
	  {
		title:
		  "optio molestias id quia eum",
		content:
		  "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error",
	  }
  ];
  
var id = 1;
let start = 0;
let end = 5;

function filterPosts(e) {
	const term = e.target.value;
	const posts = document.querySelectorAll('.post');
  
	posts.forEach(post => {
	  const title = post.querySelector('.post-title').textContent;
	  const body = post.querySelector('.post-body').textContent;
  
	  if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
		post.style.display = 'block';
	  } else {
		post.style.display = 'none';
	  }
	});
  }

filter.addEventListener('input', filterPosts);

showPosts = () => {
	//to continue the loop
	if(start == 10 ) {
		start = 0;
		end = 5;
	}
	const posts = blogs.slice(start,end);
	console.log("start",start,"end",end);
  
	posts.forEach((post) => {
	  const postEl = document.createElement('div');
	  postEl.classList.add('post');
	  postEl.innerHTML = `
		<div class="number">${id}</div>
		<div class="post-info">
		  <h2 class="post-title">${post.title}</h2>
		  <p class="post-body">${post.content}</p>
		</div>
	  `;
  	  postsContainer.appendChild(postEl);
		// addPosts(id,post.title,post.content);
		id++;
	});
	start = end;
	end += 5;
  }
showPosts();
  
  // on each scroll at the buttom
  // show loader - css

window.onscroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
		setTimeout(() => {
			// attach to the list
			loading.classList.add("show");
			setTimeout(() => {
				loading.classList.remove('show');
				showPosts();
			},1000);			
		}, 0);
    }
};