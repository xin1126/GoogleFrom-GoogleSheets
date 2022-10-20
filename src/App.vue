<template>
  <div class="container-fluid d-xl-flex">
    <form class="mx-auto p-3 mt-5">
      <div class="mb-3">
        <label
          for="exampleInputEmail1"
          class="form-label"
        >名稱</label>
        <input
          id="exampleInputEmail1"
          v-model="name"
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
        >
      </div>
      <div class="d-flex mb-3">
        <div class="w-50">
          <div class="form-check">
            <input
              id="flexRadioDefault1"
              v-model="gender"
              value="男性"
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              checked
            >
            <label
              class="form-check-label"
              for="flexRadioDefault1"
            >
              男性
            </label>
          </div>
          <div class="form-check">
            <input
              id="flexRadioDefault2"
              v-model="gender"
              value="女性"
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
            >
            <label
              class="form-check-label"
              for="flexRadioDefault2"
            >
              女性
            </label>
          </div>
        </div>
        <select
          v-model="favorite"
          class="form-select w-50 h-25"
          aria-label="Default select example"
        >
          <option
            selected
            disabled
            value=""
          >
            貓派還是狗派
          </option>
          <option value="貓貓">
            貓貓
          </option>
          <option value="狗狗">
            狗狗
          </option>
        </select>
      </div>
      <label
        for="customRange2"
        class="form-label"
      >前端領域熟悉程度{{ frontEnd }}</label>
      <input
        id="customRange2"
        v-model="frontEnd"
        type="range"
        class="form-range"
        min="1"
        max="5"
      >
      <label
        for="customRange2"
        class="form-label"
      >後端領域熟悉程度{{ backend }}</label>
      <input
        id="customRange2"
        v-model="backend"
        type="range"
        class="form-range"
        min="1"
        max="5"
      >
      <button
        type="button"
        class="btn btn-primary mt-3"
        @click="submit"
      >
        送出
      </button>
    </form>
    <iframe
      class="iframe"
      src="https://docs.google.com/spreadsheets/d/16B-dld3Xg--BSscpGgoJjRWcOddAoJ6EECWyw8TplXg/edit?resourcekey=undefined#gid=1808507967"
      frameborder="0"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import jsonp from 'simple-jsonp-promise';

const name = ref('');
const gender = ref('男性');
const favorite = ref('');
const frontEnd = ref('1');
const backend = ref('1');

const submit = () => {
  const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeUJTVWmcLGKh53hOuEM4YYm_TlNuZkDhM6oKf99tN2pOpr4Q/formResponse';
  const data = {
    'entry.1292115892': name.value,
    'entry.607462570': gender.value,
    'entry.1880393844': favorite.value,
    'entry.867922875': frontEnd.value,
    'entry.1251217581': backend.value,
  };
  if (!name.value) {
    alert('請填入名稱');
    return;
  }
  if (!favorite.value) {
    alert('尚未選擇貓貓狗狗');
    return;
  }
  jsonp(url, { data });
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.iframe {
  width: 100%;
  height: 100vh;
}
</style>
