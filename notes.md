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
