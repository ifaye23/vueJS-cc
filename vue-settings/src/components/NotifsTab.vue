<template>
  <div>
    <BorderedSection>
      <template #title>Notifications</template>
      <template #content>
        <p class="text-[110%] mb-5">Choose Teletraan1 data protocol</p>
        <div>
          <input type="checkbox" name="notif" v-model="notifs.symlink" />
          <label>Symlink</label>
        </div>
        <div>
          <input type="checkbox" name="notif" v-model="notifs.nreceptors" />
          <label>Neural Receptors</label>
        </div>
        <div>
          <input type="checkbox" name="notif" v-model="notifs.cog" />
          <label>Message Cog</label>
        </div>
      </template>
    </BorderedSection>
  </div>
</template>

<script setup lang="ts">
import BorderedSection from '@/components/BorderedSection.vue';
import tabsData from '@/composables/tabsData';

const { notifs } = tabsData();
</script>
