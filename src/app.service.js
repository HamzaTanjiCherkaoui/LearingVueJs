import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

const appService ={
	getPosts(categoryId=2){
		return new Promise((resolve)=> {
			axios.get(`https://api.fullstackweekly.com/wp-json/wp/v2/posts?ccategorie=${categoryId}&per_page=6
				`)
			.then(res => {
              		resolve(res.data)
			})
		})

	}
}
export default appService