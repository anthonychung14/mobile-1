function baseRequest(options = {}) {
    const method = options.method || 'GET';
    let body = options.body ? options.body : false;

    const base = {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    if (body) {
        body = typeof body === 'string' ? body : JSON.stringify(body);
        base.body = body;
    }

    return base;
}

export const fetchData = () => fetch('http://jsonplaceholder.typicode.com/posts', baseRequest())
    .then(response => response.json())
    .catch(err => console.log(err));