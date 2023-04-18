import commentsId from '../commentsId/commentsId.jsx';

let searchID = () => {
    const input = document.getElementById("input");
    const divPost = document.getElementById("posts");
    const divComments = document.getElementById("comments");
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(response => {
            for(let element of response){
                divComments.innerHTML = "";
                if(input.value < 1 || input.value > 100) {
                    divPost.innerHTML = 'Id has not found'
                }
                if(element.id == input.value) {
                    divPost.innerHTML = `
                        <p>UserId: ${element.userId}</p>
                        <p>Id: ${element.id}</p>
                        <p>Title: ${element.title}</p>
                        <p>Body: ${element.body}</p>
                        <button id=${element.id}>Comments</button>
                    `;
                    document.getElementById(element.id).addEventListener('click', commentsId);
                }
            }
            }
        )
        .catch(error => alert(error.message));
};

export default searchID;