<template>
  <section class="text-2xl mb-7">
    <slot name="title"></slot>
  </section>
  <section class="m-auto border-2 border-neutral-800 p-5 flex flex-col gap-2.5">
    <slot name="content"></slot>
  </section>
</template>
