<template>
  <div>
    <div>
      <div @click="toggle" class="text-center select-none cursor-pointer w-[1000px] mx-auto">
        <div class="text-3xl">{{ $attrs.title }}</div>
        <div class="font-bold">{{ $attrs['sub-title'] }}</div>
      </div>
    </div>


    <div ref="contentRef" class="overflow-hidden transition-[max-height] duration-300"
      :class="isExpend ? `max-h-[${contentHeight}]` : 'max-h-[0px]'">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'

// const contentRef: Ref<ComponentPublicInstance | null> = ref(null);

const contentRef = ref<HTMLElement | null>(null);
const contentHeight = computed(() => {
  return contentRef.value?.clientHeight ?? '0px'
})

onMounted(async () => {
  await nextTick(() => {
    console.log('contentRef:', contentRef.value?.clientHeight);
  })
});

const isExpend = ref(true)
function toggle() {
  isExpend.value = !isExpend.value;
  console.log('isExpend', isExpend.value)
}
</script>
