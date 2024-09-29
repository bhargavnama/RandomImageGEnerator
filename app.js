let url = "https://dog.ceo/api/breeds/image/random";
let img = document.createElement("img");
let btn = document.querySelector(".btn");
let h1 = document.querySelector("h1");

btn.addEventListener("click", async () => {
    try {
        let imgUrl = await getImg();
        img.src = imgUrl;
        img.classList.add("img");
        h1.insertAdjacentElement('afterend', img);
    } catch (e) {
        console.log(e);
    }
})

async function getImg(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch(e){
        throw e; // rethrow the error so it can be caught in the click handler
    }
}