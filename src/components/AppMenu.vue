<template>
  <div>
    <ul>
      <li v-for="item in menuItems" :key="item.text">
        <a 
          v-if="item.componentName !== 'GrafanaDataComponent'"
          :href="item.link" 
          target="_blank"
        >
          {{ item.text }}
        </a>
        <!-- 실시간 데이터 메뉴 아이템을 위한 추가된 부분 -->
        <a 
          v-else
          href="javascript:void(0)" 
          @click="openGrafanaData"
        >
          {{ item.text }}
        </a>
      </li>
    </ul>
    <!-- GrafanaDataComponent 컴포넌트가 활성화되면 표시될 부분 -->
    <GrafanaDataComponent v-if="showGrafanaData"/>
  </div>
</template>

<script>
import GrafanaDataComponent from './GrafanaDataComponent.vue'

export default {
  components: {
    GrafanaDataComponent
  },
  data() {
    return {
      showGrafanaData: false,
      menuItems: [
        { text: "실시간 데이터", componentName: "GrafanaDataComponent" },
        { text: "실시간 화재 판단", link: "https://www.facebook.com" },
        { text: "실시간 CCTV", link: ""},
        { text: "내부 트윈", link:"" }
        // 다른 메뉴 아이템을 추가할 수 있습니다.
      ],
    };
  },
  methods: {
    openGrafanaData() {
      this.showGrafanaData = true;
    }
  }
};
</script>

