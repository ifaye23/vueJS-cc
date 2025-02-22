<template>
  <div>
    <BorderedSection>
      <template #title>General</template>
      <template #content>
        <form class="flex flex-col gap-5">
          <div class="f-input">
            <label>Identificator</label>
            <input placeholder="D-16 Megatronus" type="text" ref="id" v-model="general.id" />
          </div>
          <div class="f-input">
            <label>Teletraan1 Link</label>
            <input placeholder="megadecepticon@cyber.tron" type="email" v-model="general.email" />
          </div>
          <div class="f-input">
            <label>Battle Log</label>
            <div>
              <textarea
                v-model="general.log"
                placeholder="I am Megatron ! Leader of the Decepticons..."
                class="resize w-full max-w-full overflow-clip max-h-[200px] h-[100px]"
              ></textarea>
            </div>
          </div>
          <div class="f-input">
            <span>Type</span>
            <div>
              <div class="space-x-2">
                <input type="radio" name="type" v-model="general.type" />
                <label>Regular Bot</label>
              </div>
              <div class="space-x-2">
                <input type="radio" name="type" />
                <label>Armed Seeker</label>
              </div>
              <div class="space-x-2">
                <input type="radio" name="type" />
                <label>Triple Changer</label>
              </div>
            </div>
          </div>
          <div class="f-input">
            <span>Faction</span>
            <div>
              <select v-model="general.faction">
                <option disabled selected>Select</option>
                <option>Autobot</option>
                <option>Decepticon</option>
                <option>Mercenary</option>
                <option>Civilian</option>
              </select>
            </div>
          </div>
          <SubmitButton>Confirm</SubmitButton>
        </form></template
      >
    </BorderedSection>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import tabsData from '@/composables/tabsData';
import BorderedSection from '@/components/BorderedSection.vue';
import SubmitButton from '@/components/SubmitButton.vue';

const { general } = tabsData();

const id = ref<HTMLInputElement | null>(null);

onMounted(() => {
  id.value?.focus();
});
</script>
