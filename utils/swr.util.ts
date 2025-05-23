import axios from "axios";

let source = axios.CancelToken.source();

export const swrFetch = async (data: Array<string>) => {
	// console.log('Mutating Start')
	let url = data?.[0] || ''
	let token = data?.[1] || ''

	let res = await axios.get(url, { cancelToken: source.token, headers: { Authorization: token ? token : '' } }).then((res) => res.data);
	// console.log('Mutating Completed')
	// source.cancel()
	return res
};