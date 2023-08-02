<template>
  <div class="w-full">
    <div @click="toggle" class="text-center select-none cursor-pointer max-w-[1090px] mx-auto font-bold pt-10">
      <div class="mb-7 relative">
        <div class="text-4xl grow">{{ $attrs.title }}</div>
        <SvgIcon class="absolute -top-1 right-6 h-12 w-12 justify-self-end transition-all duration-300"
          :class="{ '-rotate-180': isExpend }" use="expand_more"></SvgIcon>
      </div>
      <div>{{ $attrs['sub-title'] }}</div>
    </div>
    <div ref="contentRef" class="overflow-hidden transition-[max-height] duration-300 pb-7"
      :style="{ maxHeight: `${maxHeight}` }">
      <ContentSlot :use="$slots.default" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const contentRef = ref<HTMLElement | null>(null);
const maxHeight = ref('100%')

onMounted(() => {
  if (contentRef.value) {
    maxHeight.value = contentRef.value.scrollHeight + 'px';
  }
});

const isExpend = ref(true)
async function toggle() {
  isExpend.value = !isExpend.value;
  maxHeight.value = maxHeight.value === '0px' ? contentRef.value?.scrollHeight + 'px' : '0px';
}
</script>
