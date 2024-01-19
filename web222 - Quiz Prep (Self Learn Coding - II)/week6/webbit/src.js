console.log("HELLO FROM SRC!!!")


var form = document.querySelector("#post-form")
console.log(form)


var postTitle = document.querySelector("#title").value

form.onsubmit = function() {
    console.log(postTitle)
}

