import _ from 'lodash';
import './style.css';

const submitList = document.querySelectorAll('.submit');
const popup = document.querySelector('.popup');
const closeBtn = document.getElementById('close');

// display popup and get id of retrieved item
submitList.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const input = e.target.id;
    const id = input.split('-')[1];
    console.log(id);
    popup.style.display = 'flex';
  });
});

// close popup
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});