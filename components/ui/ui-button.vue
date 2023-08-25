<template>
  <div ref="button">
    <button
      v-if="isButton"
      :class="classButton"
      class="leading-none gap-2 rounded-xl transition duration-200 ease-in-out uppercase flex items-center border disabled:cursor-not-allowed font-medium disabled:bg-opacity-30"
    >
      <span v-html="text"></span>
    </button>
    <NuxtLink
      v-if="isLink"
      :to="link"
      :class="classButton"
      class="leading-none gap-2 rounded-xl no-underline transition duration-200 ease-in-out uppercase inline-flex items-center border"
    >
      <span v-html="text"></span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { enumSizes, enumVariants, variants, sizes } from '@/types/variants'
import { PropType } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String as PropType<keyof typeof enumVariants>,
    required: true,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<keyof typeof enumSizes>,
    default: 'medium',
  },
  animation: {
    type: Boolean,
    default: true,
  },
  link: {
    type: String,
    default: '',
  },
})

const styleSize: sizes = {
  small: 'px-4 py-3 text-[12px]',
  medium: 'py-3 px-6 text-xs ',
  large: 'px-8 py-4 text-lg',
}

const styleButton: variants = {
  primary:
    'bg-primary group hover:bg-primaryHover text-white hover:text-white ' +
    styleSize[props.size],
  secondary:
    'bg-transparent group hover:bg-primary text-primary hover:text-white border-primary hover:border-white ' +
    styleSize[props.size],
  third:
    'bg-blue group hover:bg-white text-white hover:text-blue border-primary ' +
    styleSize[props.size],
}

const isButton = computed(() => {
  return props.link === ''
})

const isLink = computed(() => {
  return props.link !== ''
})

const classButton = computed(() => {
  return styleButton[props.variant]
})
</script>
