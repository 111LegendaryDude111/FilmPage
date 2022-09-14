/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта) remove()
2) Изменить жанр фильма, поменять "комедия" на "драма" textConent
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS 
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов 
*/

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
};


function addFilmsOnPage(){
    const newListFilms = document.querySelectorAll('.promo__interactive-list li');
    let movies = movieDB.movies.sort();
        for (let i = 0; i < movies.length; i++){
            if (movies[i].length > 21){
                newListFilms[i].innerHTML = i + 1 + " " + movies[i].slice(0, 21) + "...";
            }else {
                newListFilms[i].innerHTML = i + 1 + " " + movies[i];
            }
           
        }
    }
addFilmsOnPage();

function advertising(){
    const adv = document.querySelectorAll('.promo__adv img');
    adv.forEach((el) => {
        el.remove();
    });
}
advertising();  

const genre = document.querySelector('.promo__genre');
genre.textContent = 'драма';

const promoBg  = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = "url('img/bg.jpg')";

/*2) 
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

*/
/*
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту
*/

const confButton = document.querySelector('.add button');
// console.log(confButton);

function confirm(){
    let input = document.getElementsByClassName('adding__input')[0].value;//получение значения Input
    // console.log(input);
    movieDB.movies.push(input);//добавление значения Инпута в массив с фильмами

    let newElementAtFilmsList = document.querySelector('.promo__interactive-list'); //получение списка куда будем добавлять новый фильм
        
        function  newEl(){ //создает новый элемент на странице чтобы вывести инпут в список фильмов
            let li = document.createElement('li'); 
            li.classList.add('promo__interactive-item');
            return li;
        }
        let newElement = newEl();
        
        newElement.textContent = input;
        newElementAtFilmsList.prepend(newElement);
        addFilmsOnPage();
}
confButton.addEventListener('click', confirm);

let checkbox = document.querySelectorAll('.add input')[1];
function addToFavourite(){
    // console.log(checkbox);
    if (checkbox.checked){
        console.log('Добавляем любимый фильм');
    }
}
addToFavourite();
checkbox.addEventListener('click', addToFavourite);
console.log(movieDB);



