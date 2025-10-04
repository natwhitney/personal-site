<script setup lang="ts"></script>

<template>
  <v-container class="about-page" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4" class="text-center">
        <v-avatar size="200">
          <v-img src="https://placehold.co/200x200?text=Avatar" alt="Profile picture"></v-img>
        </v-avatar>
      </v-col>
      <v-col cols="12" md="8">
        <h2>Hello, I'm Nathan</h2>
        <p>
          I'm a full‑stack developer in the Midwest. My current job description says I'm a Data
          Engineer, while my title says I'm a software developer, my actual role lives somewhere
          between the two. <br /><br />This site is for me to mess around with stuff, and share
          things that I make or find cool.
        </p>
        <h3 class="mt-4">Skills</h3>
        <v-chip-group column>
          <v-chip color="primary" label>Vue 3</v-chip>
          <v-chip color="primary" label>TypeScript</v-chip>
          <v-chip color="primary" label>Node.js</v-chip>
          <v-chip color="primary" label>Python</v-chip>
          <v-chip color="primary" label>Docker</v-chip>
          <v-chip color="primary" label>Git</v-chip>
        </v-chip-group>
      </v-col>
    </v-row>

    <v-divider class="my-6"></v-divider>

    <v-row justify="center" align="center">
      <v-col cols="auto">
        <v-btn icon="mdi-github" href="https://github.com/natwhitney" target="_blank" />
        <v-btn
          icon="mdi-linkedin"
          href="https://www.linkedin.com/in/nathan-whitney/"
          target="_blank"
        />
        <v-btn icon="mdi-email" href="mailto:nathan@example.com" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.about-page {
  padding-top: 20px;
}
</style>
