const Prefix = 'http://127.0.0.1:8081';

type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface FetchResult<T = any> {
    code: number;
    data: T;
    error?: Error;
}

export const request = async <T = any>(
    url: string,
    data: null | Record<string, any>,
    method: HttpMethods = 'GET',
): Promise<FetchResult<T>> => {
    const fetchUrl = Prefix + url;

    let param: any = undefined;

    if (data !== null) {
        param = typeof data === 'string' ? data : JSON.stringify(param);
    }

    try {
        const res = await fetch(fetchUrl, {
            headers: { 'Content-Type': 'application/json' },
            method,
            body: param,
            mode: 'cors',
        });

        console.log(await res.text());
        const json = await res.json();

        return {
            code: res.status,
            data: json as T,
            error: undefined,
        };
    } catch (error) {
        return {
            code: 500,
            data: null as any,
            error,
        };
    }
};
