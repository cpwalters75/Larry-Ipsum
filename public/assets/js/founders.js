const queryUrl1 = 'https://api.github.com/users/doctorallen'
const queryUrl2 = 'https://api.github.com/users/kylewhittemore'
const queryUrl3 = 'https://api.github.com/users/seanhalupczynski'


axios.get(queryUrl1)
    .then(response => {
    console.log(response.data.avatar_url);
    let $larryUrl = (response.data.avatar_url)
    $("#lar1").attr("src", $larryUrl)
    
});

axios.get(queryUrl2)
    .then(response => {
    console.log(response.data.avatar_url);
    let $larryUrl = (response.data.avatar_url)
    $("#lar2").attr("src", $larryUrl)
    
});

axios.get(queryUrl3)
    .then(response => {
    console.log(response.data.avatar_url);
    let $larryUrl = (response.data.avatar_url)
    $("#lar3").attr("src", $larryUrl)
    
});