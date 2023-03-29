const input = document.querySelector("input");
let divPost = document.querySelector(".post");
let divComments = document.querySelector(".comments");

function createButton() {
    document.querySelector("button").addEventListener('click', commentsId);
}


//      fetch
// let searchID = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(response => {
//             for(let element of response){
//                 divComments.innerHTML = "";
//                 if(input.value < 1 || input.value > 100) {
//                     divPost.innerHTML = 'Id has not found'
//                 }
//                 if(element.id == input.value) {
//                     console.log(element);
//                     divPost.innerHTML = `
//                         <p>UserId: ${element.userId}</p>
//                         <p>Id: ${element.id}</p>
//                         <p>Title: ${element.title}</p>
//                         <p>Body: ${element.body}</p>
//                         <button id="${element.id}">Comments</button>
//                     `;
//                     createButton();
//                     break;
//                 }
//             }
//             }
//         )
//         .catch(error => alert(error.message));
// };

// function commentsId () {
//     fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(response => response.json())
//         .then(response => {
//             divComments.innerHTML = "";
//             for(let element of response){
//                 if(element.postId == document.querySelector("button").id) {
//                     console.log(element);
//                     divComments.innerHTML += `
//                         <p>PostId: ${element.postId}</p>
//                         <p>Id: ${element.id}</p>
//                         <p>Name: ${element.name}</p>
//                         <p>Email: ${element.email}</p>
//                         <p>Body: ${element.body}</p>`
//                     ;
//                 }
//             }
//             }
//         )
//         .catch(error => alert(error.message));
// };


//      XMLHttpRequest
function searchID() {
    let xhr = new XMLHttpRequest();
    xhr.open(
        'GET',
        'https://jsonplaceholder.typicode.com/posts',
        true
    );
    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) {
          alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            divComments.innerHTML = "";
            if(input.value < 1 || input.value > 100) {
                divPost.innerHTML = 'Id has not found';
            } else{
                for(let element of JSON.parse(xhr.responseText)){
                    if(element.id == input.value) {
                            divPost.innerHTML = `
                                <p>UserId: ${element.userId}</p>
                                <p>Id: ${element.id}</p>
                                <p>Title: ${element.title}</p>
                                <p>Body: ${element.body}</p>
                                <button id="${element.id}">Comments</button>
                            `;
                    }
                }
                createButton();
            }
        }
    };
    xhr.onerror = function() {
        alert("Запрос не удался");
    };
};

function commentsId () {
    let xhr = new XMLHttpRequest();
    xhr.open(
        'GET',
        'https://jsonplaceholder.typicode.com/comments',
        true
    );
    xhr.send();
    xhr.onload = function() {
        if (xhr.status != 200) {
          alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            divComments.innerHTML = "";
            for(let element of JSON.parse(xhr.responseText)){                    
                if(element.postId == document.querySelector("button").id) {
                    console.log(element);
                    divComments.innerHTML += `
                        <p>PostId: ${element.postId}</p>
                        <p>Id: ${element.id}</p>
                        <p>Name: ${element.name}</p>
                        <p>Email: ${element.email}</p>
                        <p>Body: ${element.body}</p>`
                    ;
                }
          }
          createButton();
        }
    };
    xhr.onerror = function() {
        alert("Запрос не удался");
    };
};

