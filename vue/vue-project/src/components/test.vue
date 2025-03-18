<template>
  <div>
    <div>Hello, {{ title }}</div>
    <br />
    <div v-html="htmlString"></div>
    <br />
    <br />
    <input type="text" v-model="valueModel" />
    <br />
    <br />
    <input type="number" v-model="numberModel" />
    <br />
    <br />
    <div>
      <textarea v-model="message"></textarea>
    </div>
    <br />
    <div>
      <select v-model="city">
        <option value="02">서울</option>
        <option value="21">부산</option>
        <option value="064">제주</option>
      </select>
    </div>
    <br />
    <div>
      <label>
        <input type="checkbox" v-model="checked" value="서울" />서울
      </label>
      <label>
        <input type="checkbox" v-model="checked" value="부산" />부산
      </label>
      <label>
        <input type="checkbox" v-model="checked" value="제주" />제주
      </label>
      <br />
      <br />
      <span>체크한 지역: {{ checked }}</span>
    </div>
    <br />
    <div>
      <label>
        <input type="radio" v-bind:value="radioValue1" v-model="picked" />서울
      </label>
      <label>
        <input type="radio" v-bind:value="radioValue2" v-model="picked" />부산
      </label>
      <label>
        <input type="radio" v-bind:value="radioValue3" v-model="picked" />제주
      </label>
      <br />
      <br />
      <span>선택한 지역: {{ picked }}</span>
    </div>
    <br />
    <br />
    <br />
    <div>
      <img v-bind:src="imgSrc" alt width="100" height="100" />
    </div>
    <br />
    <br />
    <input type="text" v-model="textValue" />
    <button type="button" v-bind:disabled="textValue==''">Click</button>
    <div class="container" v-bind:class="{'active': isActive, 'text-red':hasError}">Class Binding</div>
    <div v-bind:class="[activeClass, errorClass]">Class Binding Array(true/false 불가능)</div>
    <div v-bind:style="styleObject">인라인 스타일 바인딩</div>
    <div v-bind:style="[base, add]">인라인 스타일 바인딩 - Array</div>
  </div>
</template>

<script>
export default {
  name: "testComponent",
  components: {},
  data() {
    return {
      title: "World",
      htmlString: "<p style='color:red;'>htis is a red string</p>",
      valueModel: "South Korea",
      numberModel: 3,
      message: "여러 줄을 입력할 수 있는 textarea 입니다.",
      city: "064",
      checked: [],
      picked: "",
      radioValue1: "서울",
      radioValue2: "부산",
      radioValue3: "제주",
      imgSrc: "https://kr.vuejs.org/images/logo.png",
      textValue: "",
      isActive: true,
      hasError: false,
      activeClass: "active",
      errorClass: "text-red",
      styleObject: { color: "red", fontsize: "13px" },
      base: 'background-color: blue; color: white; width:60%; margin: 0 auto;',
      add: 'font-weight: bold;'
    };
  }
};
</script>

<style scoped>
.active {
  background-color: yellow;
  font-weight: bold;
  border: 1px solid black;
}
.text-red {
  color: red;
}
</style>