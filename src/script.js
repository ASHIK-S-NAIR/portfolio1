const questions = document.getElementsByClassName('faq-question-section');
    const answers = document.getElementsByClassName('faq-answer-section');
    // const icons = document.getElementsByClassName('faq-question-icon');

    // const answers = document.querySelectorAll('.faq-answer-section');
    // const questions = document.querySelectorAll('.faq-question-section');

    console.log(answers.length);

    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', () => {
            if(parseInt(answers[i].style.height) !== answers[i].scrollHeight){
                answers[i].style.height = answers[i].scrollHeight + 'px';

            }else{
                answers[i].style.height = '0px';
            }
        })
    }