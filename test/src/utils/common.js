
export async function apiCall(n = 1, successFn) {
    // let res = null;
    let url = `https://jsonplaceholder.typicode.com/posts?userId=${n}`;

    const suspender = await fetch(url,{
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((json) => {
        // console.log(json);
        if (successFn && typeof(successFn) === 'function') {
            successFn(json);
        }
    });
    // res = await suspender.json();
    // return res;
}


export async function apiData(n = 1) {
    console.log(n);
    let res = '';
    let url = `https://jsonplaceholder.typicode.com/posts?userId=${n}`;

    const suspender = await fetch(url,{
        headers : {
            'Content-Type' : 'application/json'
        }
    });
    res = await suspender.json();
    console.log(res);
    return res;
}
