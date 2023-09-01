import { createApp } from 'vue';
import App from './App.vue';
import Amplify from '@aws-amplify/core';
import { AWSIoTProvider } from '@aws-amplify/pubsub';

// Amplify 설정
Amplify.configure({
  Auth: {
    identityPoolId: 'us-west-2:db7b8c51-0d7c-4c93-8537-bd1dd030d570',
    region: 'us-west-2'
  }
});

Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: 'us-west-2',
  aws_pubsub_endpoint: 'wss://data-ats.iot.us-west-2.amazonaws.com/mqtt',
}));

// Vue 앱 생성 및 마운트
createApp(App).mount('#app');
