<template>
  <div>
    <BorderedSection>
      <template #title>Notifications</template>
      <template #content>
        <p class="text-[110%] mb-5">Choose Teletraan1 data transfer protocol</p>
        <div>
          <input
            type="checkbox"
            name="notif"
            v-model="notifs.symlink"
            @change="addNotification('DTP registered')"
          />
          <label>Symlink</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="notif"
            v-model="notifs.nreceptors"
            @change="addNotification('DTP registered')"
          />
          <label>Neural Receptors</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="notif"
            v-model="notifs.cog"
            @change="addNotification('DTP registered')"
          />
          <label>Message Cog</label>
        </div>
      </template>
    </BorderedSection>
  </div>
</template>

<script setup lang="ts">
import BorderedSection from '@/components/BorderedSection.vue';
import tabsData from '@/composables/tabsData';
import notifsHandler from '@/composables/notifsHandler';

const { addNotification } = notifsHandler();
const { notifs } = tabsData();
</script>
