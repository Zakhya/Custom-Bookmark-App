

document.getElementById('myFrom').addEventListener('submit', saveBookmark);

function saveBookmark(e){
    console.log('It works');

    let siteName = document.getElementById('siteName').value;
    let siteURL = document.getElementById('siteURL').value;

    var bookMark = {
        name: siteName,
        url: siteURL
    }


    alert(bookMark)

    e.preventDefault()
}
