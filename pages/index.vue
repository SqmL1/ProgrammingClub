<script setup lang="ts">
useSeoMeta({
  description:
    "The coding club for programmers of all levels at Anoka-Ramsey Community College",
  ogTitle: "DevC2",
  ogDescription:
    "The club for programmers of all levels at Anoka-Ramsey Community College",
  ogImage: "/DevC2.svg",
  twitterTitle: "DevC2",
  twitterDescription:
    "The club for programmers of all levels at Anoka-Ramsey Community College",
  twitterImage: "/DevC2.svg",
  ogLocale: "en-US",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <div
    class="flex flex-col m-auto 2xl:mx-auto mt-10 md:mt-20 2xl:mt-40 w-fit md:grid md:grid-cols-2 grid-flow-col-dense md:gap-x-12 xl:gap-x-24 2xl:gap-x-52 font-content"
  >
    <div class="w-fit text-lg flex flex-col mx-5 md:mx-0 md:ml-24">
      <h1
        class="font-bold text-4xl text-header-text 2xl:w-prose max-w-lg font-heading"
      >
        DevC<sup>2</sup>
      </h1>
      <p
        class="max-w-md break-words lg:max-w-lg xl:max-w-xl 2xl:max-w-prose text-lg 2xl:text-xl mt-6 w-fit text-left"
      >
        The official place to assist students in pursuing their tech careers
        through real programming skills, networking opportunities, and
        peer-to-peer collaboration at
        <a
          href="https://www.anokaramsey.edu"
          class="text-link underline-offset-1 underline"
          >Anoka-Ramsey Community College.</a
        >
      </p>
      <!--Join Now button-->
      <div class="flex mt-8 mb-8">
        <InternalLink link="/join" text="Join Now!" />
        <!--Learn more Section-->
        <!-- Should we put all this on the same page? -->
        <InternalLink link="/about" text="Learn About Us" class="ml-10" />
      </div>
    </div>

    <!-- On bigger displays this part splits into the right hand side -->
    <div class="w-fit text-lg flex flex-col space-y-8 mx-5 lg:m-none lg:mx-16">
      <!-- Here we'll do the cards in the design that are off to the right -->
      <!--Resources Text Block-->
      <!--Line 52 flex postioning didn't apply to the resources section used ml-16 as a temporary fix, change eventually-->
      <h2 class="font-bold text-header-text text-4xl">What We Offer</h2>
      <Card name="Resources" :border="true">
        <p>
          We provide resources to aid you with your journey along the computer
          science pathway, such as information on how to get free courses and
          services
        </p>
      </Card>
      <Card name="Networking" :border="true">
        <p>
          In order to help you succeed in the land of computer science, ARPC
          provides an excellent opportunity to network with others on the CS
          path
        </p>
      </Card>
      <Card name="Skill / Skill training" :border="true">
        <p>
          Not only do we provide resources to sharpen your skills in CS, we (and
          our members) are resources to hone your skills like specific
          languages, backend development, and frontend development
        </p>
      </Card>
    </div>
  </div>
</template>
