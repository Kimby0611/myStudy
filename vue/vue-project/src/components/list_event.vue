<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
    <br><br><br>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'" >B</h1>
        <h1 v-else>C</h1>
    </div>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The counter is : {{ counter }}</p>
    </div>
    <div>
        <button type="button" @click="setCount(7)">Set 7</button>
        <p>The counter is : {{ counter2 }}</p>
    </div>
    <div>
        <button type="button" @click="one(), two()">click</button>
        <p id="ppp"></p>
    </div>
    <div>
        <select v-model="selectdValue" @change="changeSelect">
            <option value="서울">서울</option>
            <option value="부산">부산</option>
            <option value="제주">제주</option>
        </select>
        <p id="selectP"></p>
    </div>
    <div>
        
    </div>
  </div>
</template>

<script>
export default {
  name: "list_event",
  components: {},
  data() {
    return {
      productList: [
        {
          product_name: "기계식 키보드",
          price: 25000,
          category: "노트북/태블릿",
          delivery_price: 5000
        },
        {
          product_name: "무선 마우스",
          price: 12000,
          category: "노트북/태블릿",
          delivery_price: 5000
        },
        {
          product_name: "아이패드",
          price: 725000,
          category: "노트북/태블릿",
          delivery_price: 5000
        },
        {
          product_name: "태블릿 거치대",
          price: 32000,
          category: "노트북/태블릿",
          delivery_price: 5000
        },
        {
          product_name: "무선충전기",
          price: 42000,
          category: "노트북/태블릿",
          delivery_price: 5000
        }
      ],
      type: 'A',
      counter: 0,
      counter2: 0,
      selectdValue: ''
    };
  },
  methods: {
    increaseCounter () {
        this.counter ++;
    },
    setCount (counter2) {
        this.counter2 = counter2;
    },
    one () {
        document.getElementById('ppp').innerHTML = 'one ';
    },
    two () {
        document.getElementById('ppp').innerHTML += 'two';
    },
    changeSelect() {
        document.getElementById('selectP').innerHTML = this.selectdValue;
    }
  }
};
</script>

<style scoped>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 60%;
  margin: 0 auto;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>