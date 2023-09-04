/* Footer 2depth 스크립트 */
const plusBtn = document.querySelectorAll('.footer_menu>dl>dt');
console.log('plusBtn : ', plusBtn);
// plusBtn item들 추출후 각각 할당하기
for(let i=0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener('click',toggleFooterMenu);
}
// classList CSS 클래스명 연동
const CLICKED_CLASS = 'clicked';
const MARKED_CLASS = 'mark';
// 이벤트 리스너
function toggleFooterMenu(){
    this.nextElementSibling.classList.toggle(CLICKED_CLASS);
    this.classList.toggle(MARKED_CLASS);
}