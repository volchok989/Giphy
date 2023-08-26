const _apiHost: string = 'https://api.giphy.com/v1/gifs/'

const request = async (url: string, params: object, method: string = 'GET'): Promise<any> => {
    const paramsObj = {
        api_key: '3IWr74FHx4wWAQ90OGGJ5s8Gp4Cw7FJF',
        ...params
    }
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (method === 'GET') {
        url += '?' + objectToQueryString(paramsObj)
    } else {
        options['body'] = JSON.stringify(paramsObj)
    }
    // @ts-ignore
    const response = await fetch(_apiHost + url, options)
    try {
        return await response.json()
    } catch (e) {
        // @ts-ignore
        alert('Some error has occurred')
    }
}

const objectToQueryString = (obj: any) => Object.keys(obj).map(key => key + '=' + obj[key]).join('&')

const get = (url: string, params: object) => request(url, params)

const post = (url: string, params: object) => request(url, params, 'POST')

const put = (url: string, params: object) => request(url, params, 'PUT')

const remove = (url: string, params: object) => request(url, params, 'DELETE')

export default {
    get,
    post,
    put,
    remove
}
