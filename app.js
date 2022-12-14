const popBtn = document.getElementById(`pop`);
const element = document.querySelector(`.container_pop`);
const closeBtn = document.getElementById(`close`);
const body = document.getElementById(`scroll`);
popBtn.addEventListener(`click`, () => {
    element.classList.add(`pop`);
    body.classList.add(`hide`);
});
closeBtn.addEventListener(`click`, () => {
    element.classList.remove(`pop`);
    body.classList.remove(`hide`);
});