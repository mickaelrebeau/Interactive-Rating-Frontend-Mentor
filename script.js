let stars = document.querySelectorAll(".stars");
const submit = document.getElementById("btn");
const ratings = document.querySelector(".ratings");
const thanks = document.querySelector(".thanks");
const empty = document.getElementById("empty");

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', () => {
        let star = stars[i].textContent;
        stars[i].style.backgroundColor = "hsl(25, 97%, 53%)";
        stars[i].style.color = "white";

        for (let i = 0; i < stars.length; i++) {
            stars[i].classList.contains('selected');
            stars[i].classList.remove('selected');
        }

        stars[i].classList.toggle('selected');

        submit.addEventListener('click', () => {
            ratings.style.display ='none';
            thanks.style.display = 'flex';
            empty.textContent = star;
        })
    })
}