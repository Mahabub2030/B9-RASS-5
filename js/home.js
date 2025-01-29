const blog = document.getElementById('blog');
blog.addEventListener('click', function(e){
    e.preventDefault();
    console.log("home clicked");
    window.location.href="index.html"
})

