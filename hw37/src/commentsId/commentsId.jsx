function commentsId () {
    const divComments = document.getElementById("comments");
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(response => {
            divComments.innerHTML = "";
            for(let element of response){
                if(element.postId == document.querySelector("button").id) {
                    divComments.innerHTML += `
                        <p>PostId: ${element.postId}</p>
                        <p>Id: ${element.id}</p>
                        <p>Name: ${element.name}</p>
                        <p>Email: ${element.email}</p>
                        <p>Body: ${element.body}</p>`
                    ;
                }
            }
            }
        )
        .catch(error => alert(error.message));
};

export default commentsId;