## installs
Go to React native website and look at their navigation initially we were using react native navigation 4 but we have 6
### navigation
npm install @react-navigation/native
### dependancies
npx expo install react-native-screens react-native-safe-area-context
## Context
->Kinda simillar to props but the difference being 
### Props
->Communicate information from parent directly to child
->easy to setup
->To communicate data down multiple layers we have to write a lot of code

### Context
->Moves data directly into the targeted nested child
->Complicated to setup
->Easy to communicate data from parent to a supper nested child

### Context wraps everything. thus you wra[p the app.js inside it

### Adding code to github repository
 In settings Git:Enabled
 git -version
 git init
 git add .
 git commit -m "My first Commit"
 git branch -M master
 git remote add Repository url
 git push -u origin master

 ### making Commits
 -> git add .
 -> git commit -m "Write relevant message"
 -> git push origin master

Incase of error I dont know who you are:
 git config -global user.name "Your Name"
 git config -global user.email "Your Email"

 ### Creatig a json server
 -> open the default directory of all your react native projects
 ->create a folder named jsonserver
 open the folder in terminal and run: npm init
 -> add: npm install json-server ngrok
-> Create an account and login to https://dashboard.ngrok.com/get-started/setup
->follow setup  instructions
-> in vs code open package.json file 
        "scripts": {
            "db": "json-server -w db.json",
            "tunnel": "ngrok http 3000"
        }

-> create an api folder in src and jsonserver.js file
->in file add the followin code 
{
    import Axios from 'axios';

    export default Axios.create({
         baseURL: 'https://be3b-41-90-64-255.ap.ngrok.io'
})
}

->Rememer the URL changes every time we run the ngrog server
-> run npm i axios

->in the blog context file create an async function 
{
    const getBlogPost = async()=>{
        const response = await jsonserver.get('/blogposts');
        dispatch({type: 'get_blogposts', payload: response.data })
    }
}

-> in dispach add a case to handle get blogpost
{
    case 'get_blogposts':
            return action.payload
}

-> These functions pass data from the api to the BlogContext
-> Add getBlogPost in BlogContext.provider, in index page add getBlogPost in context
-> create a useEffect to call the getBlogPost() once
ie: {
     useEffect(()=>{getBlogPost();}, [] )
}

### Possible errors and how to handle them
->[AxiosError: Request failed with status code 404] Db not foudn possible error in db
-> error 500 server error
-> code 200 