
class question_and_Answer {
    $container;
    $question1;
    $answer1;
    $question2;
    $answer2;
    $question3;
    $answer3;

    answer1_appear = () => {
        this.$answer1.style.display = 'block';
        this.$question1.addEventListener('click',this.answer1_disappear)    
        this.$question1.addEventListener('click',this.answer1_appear)
    }

    answer1_disappear = ()=>{
        this.$answer1.style.display = 'none'
        this.$question1.addEventListener('click',this.answer1_appear)
    }

    constructor(){
        this.$container = document.createElement('div')
        this.$container.classList.add('container')

        this.$question1=document.createElement('div')
        this.$question1.classList.add('question1')
        this.$question1.innerHTML='What kind of product you are selling?'
        this.$question1.addEventListener('click', this.answer1_appear);

        this.$answer1=document.createElement('div')
        this.$answer1.classList.add('answer1')
        this.$answer1.innerHTML="Clothing & Bag"
        this.$answer1.style.display = 'none'
    
    }

    render(){
        this.$container.appendChild(this.$question1)
        
        this.$container.appendChild(this.$answer1) 
        return this.$container
    }

}



