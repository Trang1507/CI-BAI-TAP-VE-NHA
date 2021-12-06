
class question_and_Answer {
    $container;
    $question1;
    $answer1;
    $question2;
    $answer2;
    $question3;
    $answer3;



    constructor(){
        this.$container = document.createElement('div')
        this.$container.classList.add('container')
        this.$container.innerHTML = "Question and Answer"


        this.$question1=document.createElement('div')
        this.$question1.classList.add('question1')
        this.$question1.innerHTML='What kind of product you are selling?'
        this.$question1.addEventListener('click', this.answer1_appear);

        this.$answer1=document.createElement('div')
        this.$answer1.classList.add('answer1')
        this.$answer1.innerHTML="Clothing & Bag"
        this.$answer1.style.display = 'none'
    
        this.$question2=document.createElement('div')
        this.$question2.classList.add('question2')
        this.$question2.innerHTML='What kind of payment you are offering?'
        this.$question2.addEventListener('click', this.answer2_appear);

        this.$answer2=document.createElement('div')
        this.$answer2.classList.add('answer2')
        this.$answer2.innerHTML="POS and cash"
        this.$answer2.style.display = 'none'


        this.$question3=document.createElement('div')
        this.$question3.classList.add('question2')
        this.$question3.innerHTML='Do you offer a refund?'
        this.$question3.addEventListener('click', this.answer3_appear);

        this.$answer3=document.createElement('div')
        this.$answer3.classList.add('answer3')
        this.$answer3.innerHTML="Yes"
        this.$answer3.style.display = 'none'

    }

    answer1_appear = () => {

        if (this.$answer1.style.display == 'block'){
            this.$answer1.style.display = 'none'
        }
        else {
            this.$answer1.style.display = 'block'
        }
    }

    answer2_appear = () => {

        if (this.$answer2.style.display == 'block'){
            this.$answer2.style.display = 'none'
        }
        else {
            this.$answer2.style.display = 'block'
        }
    }

    answer3_appear = () => {

        if (this.$answer3.style.display == 'block'){
            this.$answer3.style.display = 'none'
        }
        else {
            this.$answer3.style.display = 'block'
        }
    }

    render(){
        this.$container.appendChild(this.$question1)
        this.$question1.appendChild(this.$answer1) 
        this.$container.appendChild(this.$question2)
        this.$question2.appendChild(this.$answer2) 
        this.$container.appendChild(this.$question3)
        this.$question3.appendChild(this.$answer3) 
        return this.$container
    }

}



