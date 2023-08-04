<template>
  <div>
    <input
        style="color: black"
        :id="`input-${placeholder}`"
        :placeholder="placeholder"
        :type="inputType"
        v-model="inputComputed"
        autocomplete="off"
        :maxlength="max"
        class="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
    >
    <span v-if="error" style="color: red">
            {{ error }}
        </span>
  </div>

</template>

<script setup>
const emit = defineEmits(['update:input'])

const props = defineProps(['input', 'placeholder', 'inputType', 'max', 'autoFocus', 'error'])
const { input, placeholder, inputType, max, autoFocus, error } = toRefs(props)

onMounted(() => {
  if (autoFocus.value) {
    document.getElementById(`input-${placeholder.value}`).focus()
  }
})

const inputComputed = computed({
  get: () => input.value,
  set: (val) => emit('update:input', val)
})
</script>