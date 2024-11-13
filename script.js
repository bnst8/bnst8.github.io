// 아이콘과 메시지 목록 생성
const messageList = document.getElementById('message-list');

document.addEventListener('DOMContentLoaded', function () {
    // 로그인 모달 열기
    const loginOverlay = document.querySelector('.login-overlay');
    loginOverlay.style.display = 'flex'; // 페이지 로드 시 로그인 모달이 보이도록

    // 로그인 폼 제출
    document.getElementById('login-form').addEventListener('submit', function (e) {
        e.preventDefault(); // 폼 기본 동작 방지 (페이지 새로 고침 방지)

        // 입력된 키워드 값
        const keyword = document.getElementById('keyword').value;

        // 원하는 키워드 설정 (여기서는 '비밀번호'로 설정)
        const correctKeyword = '권예진'; 

        // 키워드 비교
        if (keyword === correctKeyword) {
            // 키워드가 일치하면 로그인 모달을 숨기고, 편지 페이지로 이동
            loginOverlay.style.display = 'none'; // 모달 숨기기
            // 실제 편지 페이지로 이동
            document.querySelector('.container').style.display = 'block';  // 메시지 페이지 보이기
        } else {
            // 키워드가 틀리면 에러 메시지 출력
            document.getElementById('error-message').textContent = '올바른 이름을 입력하세요.';
        }
    });
});

// 22개의 아이콘 생성
for (let i = 1; i <= 22; i++) {
    const iconDiv = document.createElement('div');
    iconDiv.classList.add('message-icon');
    iconDiv.innerHTML = `<img src="https://i.namu.wiki/i/HLw_fW3iu5oh57ldyHKfMFnvJe6-ISZlkk53feGyUYwXGiCLpJ5UfcMlH2CXKzjJowBpPOBVFKG07YJ01esr8w.webp" alt="아이콘 ${i}" onclick="showMessage('message${i}')">`;
    messageList.appendChild(iconDiv);

    // 각 메시지 뷰 생성
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message-view');
    messageDiv.id = `message${i}`;  // 동적으로 id 설정

    // 메시지 이미지는 로컬에서 불러오기
    const messageImage = document.createElement('img');
    messageImage.src = `./image/message${i}.png`;  // 로컬 파일 경로 설정
    messageImage.alt = `메시지 ${i}`;

    // 메시지Div에 이미지만 추가 (닫기 버튼 제거)
    messageDiv.appendChild(messageImage);

    // 메시지Div를 body에 추가
    document.body.appendChild(messageDiv);
}

// 메시지 표시 함수
function showMessage(messageId) {
    // 모든 메시지 숨기기
    const messages = document.querySelectorAll('.message-view');
    messages.forEach(message => {
        message.style.display = 'none';
        message.classList.remove('show'); // 애니메이션 초기화
    });

    // 배경 어두운 부분 보이기
    const overlay = document.querySelector('.message-overlay');
    overlay.style.display = 'block';

    // 클릭한 메시지 보이기
    const message = document.getElementById(messageId);
    if (message) {
        message.style.display = 'block';
        message.classList.add('show'); // 애니메이션 적용
    }
}

// 메시지 숨기기 함수
function hideMessage() {
    const messages = document.querySelectorAll('.message-view');
    messages.forEach(message => {
        message.style.display = 'none';
        message.classList.remove('show'); // 애니메이션 초기화
    });

    // 배경 어두운 부분 숨기기
    const overlay = document.querySelector('.message-overlay');
    overlay.style.display = 'none';
}

// 배경 클릭 시 메시지 숨기기
const overlay = document.querySelector('.message-overlay');
overlay.addEventListener('click', hideMessage);  // 배경을 클릭하면 메시지 닫기