import  firebase  from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyBH_ZWCI9UpF6pwX92YQy7qKrH5TSOMG44",
    authDomain: "jobopenings-d99da.firebaseapp.com",
    databaseURL: "https://jobopenings-d99da.firebaseio.com",
    projectId: "jobopenings-d99da",
    storageBucket: "jobopenings-d99da.appspot.com",
    messagingSenderId: "811114344226",
    appId: "1:811114344226:web:e800464a28365e6e06ff7b"
  };


  firebase.initializeApp(firebaseConfig);

  //   var database = firebase.database();
  //   var ref = database.ref("resume");
  // ref.on("value", gotData, errData);

  // function gotData(data){
  //   let items = data.val();
  //   let keyss = Object.keys(items);
  //   console.log(keyss);
  // }

  // function errData(){
  //   console.log("error!");

  // }

 export default firebase;
