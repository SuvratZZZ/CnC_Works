/**
 * Write your challenge solution here
 */
const nam = document.getElementById('nameDisplay');
document.getElementById('nameInput').oninput = function (e) {
  nam.innerText = this.value;
};

const age = document.getElementById('ageDisplay');
document.getElementById('ageInput').oninput = function (e) {
  age.innerText = this.value;
};

const bio = document.getElementById('bioDisplay');
document.getElementById('bioInput').oninput = function (e) {
  bio.innerText = this.value;
};

const job = document.getElementById('jobDisplay');
document.getElementById('jobInput').oninput = function (e) {
  job.innerText = this.value;
};
