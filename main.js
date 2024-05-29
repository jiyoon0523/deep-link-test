// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Deep Link Test";

console.log('test')

document.getElementById('navigateButton1').addEventListener('click', function() {
    window.location.href = 'unitydl://mylink';
});

document.getElementById('navigateButton2').addEventListener('click', function() {
    window.location.href = 'unitydl://mylink?FetchScene';
});

document.getElementById('navigateButton3').addEventListener('click', function() {
    window.location.href = 'unitydl://mylink?XRScene';
});

document.getElementById('navigateButton4').addEventListener('click', function() {
    window.location.href = 'https://www.naver.com';
});