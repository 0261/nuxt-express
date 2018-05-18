module.exports = {
    css: [
        'assets/main.css' // # main.css를 전역 CSS로 선언.
    ],
    router: {
        middleware: 'check-route' // # 경로가 변경될 때마다 실행.
    },
    build: {
        vendor: ['axios'] // # 매번 import를 선언해서 axios를 가져올 경우 페이지의 용량이 커짐. 그러나 이렇게 선언해놓으면 괜찮.
    },
    srcDir: 'client/' //  client/ 아래에서 nuxt 설정이 작동
}