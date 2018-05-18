<template>
  <h1 class="red">Hello {{ name }}!</h1>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData (process) {
    // 모든 Vue 인스턴스의 라이프사이클에서 클라이언트사이드와 서버사이드 모두 호출되는 메소드 는 beforeCreate와 created 뿐입니다. 다른 메소드들은 모두 클라이언트 사이드에서만 호출됨을 명심하세요!

    // isClient	Boolean	클라이언트&서버	클라이언트사이드에서 랜더링하고 있는지의 여부
    // isServer	Boolean	클라이언트&서버	서버사이드에서 랜더링하고 있는지의 여부
    // isDev	Boolean	클라이언트&서버	개발모드인지 아닌지. 이 키는 프로덕션 모드에서 데이터를 캐싱할 경우 도움이 됩니다.
    // route	vue-router의 라우트	클라이언트&서버	vue-router의 라우트 인스턴스
    // store	Vuex Store	클라이언트&서버	Vuex의 스토어 인스턴스 Vuex Store가 설정되어 있는경우에만 사용가능합니다.
    // env	Object	클라이언트&서버	nuxt.config.js에 세팅된 환경변수. 자세한 내용은 env API를 참조
    // params	Object	클라이언트&서버	route.params의 alias
    // query	Object	클라이언트&서버	route.query의 alias
    // req	http.Request	서버	Node.js 서버 요청. Nuxt.js를 미들웨어로 사용하고 있는 경우, req Object는 사용하고 있는 프레임워크에 따라서 달라집니다. nuxt generate을 통해서 이용할 수 없습니다.
    // res	http.Response	서버	Node.js 서버 응답. Nuxt.js를 미들웨어로 사용하고 있는 경우, res Object는 사용하고 있는 프레임워크에 따라서 달라집니다. nuxt generate을 통해서 이용할 수 없습니다.
    // redirect	Function	클라이언트&서버	별도의 라우트에 리다이랙트시키고 싶을경우에 사용합니다. 서버사이드에서 사용되는 상태코드는 디폴트로 302입니다: redirect([status,] path [, query])
    // error	Function	클라이언트&서버	에러페이지를 노출시키고 싶은 경우에 사용합니다: error(params). params은 statusCode와 message 필드를 갖고있어야 합니다.
    // error({statusCode: 404, message : "Someting Wrong"})
    
    return true;
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  },
  head () {
    // Set Meta Tags for this Page
  },
  data () {
      return {
          name : 'Home'
      }
  }
  
}
</script>

<style>
.red {
  color: red;
}
</style>