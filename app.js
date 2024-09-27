let num = 0;

fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((res) => {
    console.log(res);
    
    const username = document.querySelector('#username');
    const nextBtn = document.querySelector('#nextBtn');

    username.innerHTML = `
        Name: ${res[num].name}
        <br />
        Id: ${res[num].id}`

    let nextFn = () => {
        if(res.length > num){
            num++
            username.innerHTML = `
                Name: ${res[num].name}
                <br />
                Id: ${res[num].id}`
        }
        else {
            nextBtn.disabled = true
        }
    }

    nextBtn.addEventListener('click' , nextFn)
})