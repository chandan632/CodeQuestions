const quizforms = document.querySelectorAll(".quizform")
quizforms.forEach(quizform => {
    quizform.onsubmit = function (e) {
        e.preventDefault()
        $.ajax({
            type: "POST",
            url: "/userans/" + e.target.id,
            data: {
                userans: this.option.value
            },
            success: function (response) {
                console.log(response)
                console.log(e.target)
            }
        })
    }
})

// document.querySelector('#testdone').addEventListener('click', e => {
//     $.ajax({
//         type: 'POST',
//         url: 'http://127.0.0.1:4000/testdone',
//         data: {
//             testdone: 'testdone'
//         }
//     })
// })