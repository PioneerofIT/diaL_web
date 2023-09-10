<template>
  <div>
    <h1>{{ dashboard.title }}</h1>
    <!-- 여기에 대시보드 정보를 기반으로 한 추가적인 렌더링을 수행할 수 있습니다 -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dashboard: {}
    };
  },
  mounted() {
    this.fetchDashboardByUID('N4wn5bzIz');
  },
  methods: {
    fetchDashboardByUID(uid) {
      // 수정된 부분: AWS API Gateway를 통한 Grafana API URL
      const GRAFANA_API_URL = `https://l8pe3x46m5.execute-api.us-west-2.amazonaws.com/dev-grafana/api/dashboards/uid/${uid}`;
      const TOKEN = "sa-gh-52bada05-d063-4a1f-a62c-6bc76cd76d18";


      axios.get(GRAFANA_API_URL, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        }
      }).then(response => {
        this.dashboard = response.data.dashboard;
      }).catch(error => {
        console.error("Error fetching dashboard:", error);
      });
    }
  }
};
</script>
