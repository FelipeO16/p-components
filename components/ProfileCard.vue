<script setup lang="ts">
// import { User } from "@/models/user";

const response = await useFetch("/api/github");
const user: any = ref(response.data);
</script>

<template>
  <div class="">
    {{ user }}
    <BaseCard shape="rounded" class="p-4 md:p-6 grid grid-cols-4 gap-4 w-1/3">
      <div class="flex items-center col-span-1">
        <BaseAvatar :src="user.avatar_url" shape="full" size="xl" />
      </div>
      <div class="col-span-3">
        <BaseHeading level="h5" class="">
          {{ user.name }}
        </BaseHeading>
        <BaseParagraph class="col-span-3">
          {{ user.bio }}
        </BaseParagraph>
      </div>
      <BaseParagraph class="col-span-1">
        {{ user.login }}, {{ user.location }}
      </BaseParagraph>
    </BaseCard>
  </div>
</template>
