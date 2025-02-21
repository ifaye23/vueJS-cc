import { computed, ref } from 'vue'
import type { Tab, TabKey } from '@/types.ts';
import GeneralTab from '@/components/GeneralTab.vue';
import NotifsTab from '@/components/NotifsTab.vue';
import PrivacyTab from '@/components/PrivacyTab.vue';

const tabs: Tab[] = [
    {
      key: 'General',
      label: 'General',
      component: GeneralTab,
    },
    {
      key: 'Notifications',
      label: 'Notifications',
      component: NotifsTab,
    },
    {
      key: 'Privacy',
      label: 'Privacy',
      component: PrivacyTab,
    },
  ];

const currentTab = ref<TabKey>('General');
const currentComponent = computed(() => tabs.find(tab => tab.key === currentTab.value)?.component)

const toggleTab = (key: TabKey) => {
  currentTab.value = key;
};

export default function tabsHandler() {
    return {
        tabs,
        currentTab,
        currentComponent,
        toggleTab
    }
}