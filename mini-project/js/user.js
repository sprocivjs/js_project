let div = document.createElement('div');
div.classList.add('users');


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {


            for (const user of users) {
                let userDiv = document.createElement('div');
                userDiv.classList.add('user');
                userDiv.innerHTML = `
                ${user.id} - ${user.name} - ${user.email} -${user.website}
                Address:
                `;


                for (const key in user.address) {
                    let addressDiv = document.createElement('div');
                    addressDiv.innerHTML = `${key}: ${user.address[key]}`;
                    userDiv.appendChild(addressDiv)

                }

                    // if(user.hasOwnProperty(key)){
                    //     userDiv.innerHTML = `${key} : ${user[key]}`;
                    //     console.log(`${key} : ${user[key]}`)
                    // }
                 // userDiv.innerHTML = `
                 // ${key} : ${user[key]}
                 // `; }


                div.appendChild(userDiv);
            }
        }
    )

document.body.appendChild(div)



