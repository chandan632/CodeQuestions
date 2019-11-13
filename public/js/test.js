const quizforms = document.querySelectorAll(".quizform")
quizforms.forEach(quizform => {
    quizform.onsubmit = function () {
        $.ajax({
            type: "POST",
            url: "/userans/" + e.target.id
        })
        alert(this.option.value)
    }
})