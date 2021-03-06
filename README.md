# todome
카테고리를 통한 일정 관리 프로젝트

## ✨할일많조팀

## 프로젝트의 목적

> *한 학기동안 배운 html, css, js 내용들을 최대한 이용할 수 있는 주제로 todolist 설계가 가장 적합하다고 판단하여 프로젝트 주제를 todolist 설계로 결정하고, 이를 바닐라 자바스크립트로 구현하는 것을 목표로 함. 기존의 단순한 todo list의 나열에서 한 단계 더 발전시켜 카테고리형 todolist로 구현 사항을 확장시킴.*


## About project
1. 카테고리별로 나눠서 일정을 관리할 수 있도록 구성
2. Html, Css, Javascript를 통해 프로젝트 진행
3. flex를 통해 앱과 웹에서 화면 크기에 따라 조절되도록 설정
4. 기획 -> 디자인구성 -> 개발 진행

### ✅프로젝트 기획
<img width="350" alt="sfds" src="https://user-images.githubusercontent.com/81394850/153700389-ec393bfb-074d-427b-98d7-747097c881f7.png">

🟢 __Main Color__
<img width="200" alt="dd" src="https://user-images.githubusercontent.com/81394850/153700444-c04fe9a0-460f-4fd1-abc2-370ffacd5ecf.png">

### ✅프로젝트 요구사항
> 로그인 창(view) 구현
- ID 입력 텍스트 박스
- PW 입력 텍스트 박스
- 확인 버튼
- JS) 확인 누르면 다음 페이지(메인)로 이동

> 검색폼 구현
- 돋보기(아이콘)를 누르면 검색폼이 나온다,
- 키워드를 입력하고 엔터를 누르면 검색 결과가 보인다.
- 검색어를 입력하면 x버튼이 보이고 없으면 x버튼을 숨긴다.
- x버튼을 클릭하거나 검색어를 삭제하면 검색 결과를 삭제 한다.

> 검색 결과 구현
1. 검색 결과가 검색 폼 아래에 위치.
- 해당 키워드를 가진 일정들이 보인다.
- x버튼을 클릭하면 검색폼 초기화, 검색 결과 사라짐
- 뒤로가기 버튼으로 다시 메인 창으로 돌아간다.

> 카테고리 추가 창
- 카테고리 아래에 톱니바퀴 모양 만든다.
- 톱니바퀴 모양 클릭시 x 버튼,  + 버튼 활성화
- + 버튼 누르면 → 직접 입력 창, 확인 버튼 생성
- 직접 입력 창에 키워드 입력시 카테고리로 추가
- x버튼을 누르면 카테고리 삭제

> 일정 추가 창
- x를 누르면 일정을 저장하지 않고 창을 닫는다.
- 카테고리에서 선택하는 창 구현한다.
- 카테고리 창 옆에 todolist 내용을 입력한다.
- 확인 버튼을 클릭하여 선택한 카테고리와 todo내용을 보낸다. (화면에 표시)

> todolist all 창
1. 미완료
    - 카테고리별로 일정들 나눈다.
    - 체크 표시 할 수 있도록 만든다.
    - x버튼으로 일정 삭제 할 수 있게 한다.
2. 완료 (체크 표시 한 경우)
    - 일정 3개 이하 → 회색으로 완료인 것 표시
    - 일정 4개 이상 → 토글로 숨겨놓기

## 1.시작페이지
![Untitled](https://user-images.githubusercontent.com/81394850/155752452-35f8e851-7668-4d11-bbab-52f6e5452869.gif)

## 2.로그인페이지
![Untitled](https://user-images.githubusercontent.com/81394850/155752714-c4e469ae-1b07-49b5-9520-7334841c68e0.gif)

## 3.검색폼
![Untitled](https://user-images.githubusercontent.com/81394850/155752846-922a0bf3-da27-4371-917f-a03d047106f6.gif)

## 4.검색결과
![Untitled](https://user-images.githubusercontent.com/81394850/155753003-20146cf5-b29e-486e-9f4d-ab84f2cfd000.gif)

## 5.카테고리 
* 카테고리 추가
![3](https://user-images.githubusercontent.com/81394850/155753299-545cccf4-6da2-438f-8077-59e81a58e589.gif)

* 카테고리 삭제
![4](https://user-images.githubusercontent.com/81394850/155753412-5df109d4-d190-49da-ad81-be261a4ba0f2.gif)

* 선택한 카테고리만 보이기
![1](https://user-images.githubusercontent.com/81394850/155753490-04cd95cb-e997-486d-885a-6af51c0b9d93.gif)


