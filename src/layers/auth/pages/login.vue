
<template>
  <div class="card flex justify-center">
      <Form :resolver @submit="onFormSubmit" class="flex flex-col gap-4 w-full sm:w-56">
          <FormField v-slot="$field" name="username">
              <InputText type="text" placeholder="Username" :class="[{ error: $field?.invalid }]" v-bind="$field.props" />
              <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
          </FormField>
          <FormField v-slot="$field" name="password">
              <InputText v-model="$field.value" type="password" placeholder="Password" :class="[{ error: $field?.invalid }]" @input="$field.onInput" @blur="$field.onBlur" @change="$field.onChange" />
              <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
          </FormField>

          <NuxtLink to="/" class="text-sm text-right">Forgot Password?</NuxtLink>

          <NuxtLink to="/" class="text-sm text-right">dashboard</NuxtLink>
          <Button type="submit" severity="secondary" label="Submit" />
      </Form>
  </div>
</template>

<script setup>
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { useToast } from 'primevue/usetoast';
import { InputText } from 'primevue';


useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

definePageMeta({
    layout: 'guest',
    title: 'login',
})

const toast = useToast();

const resolver = zodResolver(
  z.object({
      username: z.string().min(1, { message: 'Username is required.' }),
      password: z.string().min(1, { message: 'Password is required.' })
  })
);

const onFormSubmit = ({ valid }) => {
if (valid) {
  toast.add({ severity: 'success', summary: 'Form is submitted.', life: 3000 });
}
};
</script>
<style scoped>
input {
  width: 100%;
  color: var(--p-inputtext-color);
  background: var(--p-inputtext-background);
  border: 1px solid var(--p-inputtext-border-color);
}

input.error {
  border-color: var(--p-inputtext-invalid-border-color);
}
</style>
