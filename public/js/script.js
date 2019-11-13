const addquestionform = document.querySelector(".addquestionform")
const description = document.querySelector("#description")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const option3 = document.querySelector("#option3")
const option4 = document.querySelector("#option4")
const ans = document.querySelector("#ans")
const msgbox = document.querySelector(".msg")

function showmsg(bg, element, msg) {
    element.classList.add(bg)
    element.innerHTML = msg
    setTimeout(() => {
        element.classList.remove(bg)
        element.innerHTML = ""
    }, 2000)
}

addquestionform.addEventListener("submit", e => {
    e.preventDefault()
    if (description.value.trim() == "") {
        description.focus()
        showmsg("bg-danger", msgbox, "Description is Empty")
        return false
    }
    else if (option1.value.trim() == "") {
        option1.focus()
        showmsg("bg-danger", msgbox, "Option1 is Empty")
        return false
    }
    else if (option2.value.trim() == "") {
        option2.focus()
        showmsg("bg-danger", msgbox, "Option2 is Empty")
        return false
    }
    else if (option3.value.trim() == "") {
        option3.focus()
        showmsg("bg-danger", msgbox, "Option3 is Empty")
        return false
    }
    else if (option4.value.trim() == "") {
        option4.focus()
        showmsg("bg-danger", msgbox, "Option4 is Empty")
        return false
    } else {
        $.ajax({
            type: "POST",
            url: "/addquestions",
            data: {
                description: description.value,
                option1: option1.value,
                option2: option2.value,
                option3: option3.value,
                option4: option4.value,
                ans: ans.value
            },
            success: function (response) {
                if (response.trim() == "Question Added") {
                    showmsg("bg-success", msgbox, response)
                } else {
                    showmsg("bg-danger", msgbox, response)
                }
            }
        })
    }
})