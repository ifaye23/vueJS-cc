<template>
  <div>
    <BorderedSection>
      <template #title>Privacy</template>
      <template #content>
        <form @submit.prevent="addNotification('Privacy settings updated')">
          <div>
            <input type="checkbox" v-model="privacy.SearchEngineIndexing" />
            <label>SearchEngine Indexing</label>
          </div>
          <div class="f-input mt-7">
            <label>Visibility</label>
            <div class="w-[50%]">
              <select class="w-full" v-model="privacy.visibility">
                <option selected>Private</option>
                <option>Public</option>
              </select>
            </div>
          </div>
          <SubmitButton>Save</SubmitButton>
        </form>
      </template>
    </BorderedSection>
  </div>
</template>

<script setup lang="ts">
import BorderedSection from '@/components/BorderedSection.vue';
import tabsData from '@/composables/tabsData';
import SubmitButton from '@/components/SubmitButton.vue';
import notifsHandler from '@/composables/notifsHandler';

const { addNotification } = notifsHandler();

const { privacy } = tabsData();
</script>
