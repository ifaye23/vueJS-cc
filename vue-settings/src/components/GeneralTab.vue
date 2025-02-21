<template>
  <div>
    <h2 class="text-2xl mb-7">General</h2>
    <form class="flex flex-col gap-5 m-auto border-2 border-neutral-800 p-5">
      <div class="f-input">
        <label>Identificator</label>
        <input placeholder="D-16 Megatronus" type="text" ref="id" />
      </div>
      <div class="f-input">
        <label>Teletraan1 Link</label>
        <input placeholder="megadecepticon@cyber.tron" type="email" />
      </div>
      <div class="f-input">
        <label>Battle Log</label>
        <div>
          <textarea
            placeholder="I am Megatron ! Leader of the Decepticons..."
            class="resize w-full max-w-full overflow-clip max-h-[200px] h-[100px]"
          ></textarea>
        </div>
      </div>
      <div class="f-input">
        <span>Type</span>
        <div>
          <div class="space-x-2">
            <input type="radio" name="faction" />
            <label>Regular Bot</label>
          </div>
          <div class="space-x-2">
            <input type="radio" name="faction" />
            <label>Armed Seeker</label>
          </div>
          <div class="space-x-2">
            <input type="radio" name="faction" />
            <label>Triple Changer</label>
          </div>
        </div>
      </div>
      <div class="f-input">
        <span>Faction</span>
        <div>
          <select class="bg-neutral-800 p-2.5 rounded-sm">
            <option disabled selected>Select</option>
            <option>Autobot</option>
            <option>Decepticon</option>
            <option>Mercenary</option>
            <option>Civilian</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-neutral-800 rounded-sm p-3 text-center border-2 border-transparent hover:border-neutral-300 mt-3 transition-all hover:bg-neutral-600 hover:font-bold"
        >
          Confirm
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const id = ref<HTMLInputElement | null>(null);

onMounted(() => {
  id.value?.focus();
});
</script>
