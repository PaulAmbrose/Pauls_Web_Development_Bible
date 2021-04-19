//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click', function(eventobject){
        const styles = eventobject.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('increase')){
            count++;
        }else if(styles.contains('reset')){
            count = 0;
        }
        value.textContent = count;
        if (count<0){
            value.style.color = "red"
        } else if (count > 0){
            value.style.color = "green"
        }
    })
});
