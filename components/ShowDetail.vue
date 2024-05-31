<template>
  <div class="cd-detail ">
    <div
      class=" w-full flex justify-between bg-gray-800 rounded-3xl px-10 max-lg:flex-col max-lg:justify-center max-lg:gap-20  max-lg:py-20 h-screen max-lg:h-auto show-detail opacity-0">
      <div class="h-full w-1/2 flex  justify-start items-center max-lg:w-full max-lg:justify-center max-lg:h-auto">
        <!-- ici mettre en props pour garder  nimporte quel objet -->
        <h1 class="text-5xl font-bold">{{ title }}</h1>
      </div>
      <div
        class="h-full w-1/2 flex flex-col gap-10  items-start justify-center text-2xl max-lg:w-full max-lg:justify-center">
        <!-- ici mettre en props pour garder  nimporte quel objet -->
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
        <!-- <p class="">  <span class="font-bold">Analytics, Performance Measurement and Optimization</span> <br>

            &bull; Analytics audit (Google Analytics and others)<br>
&bull; Implementation of measurement tools<br>
&bull; Use and enhancement of data<br>
&bull; Performance analysis of touchpoints and digital campaigns<br>
&bull; Dashboards, findings reports, and recommendations<br>

<br> <span class="font-bold">Data Strategy and Customer Knowledge</span><br>

&bull; Data environment audit<br>
&bull; Data quality analysis<br>
&bull; Data collection and insight strategy<br>
&bull; 360-degree customer view with CDP (Customer Data Platform)<br>
&bull; Lead generation and nurturing strategy<br>
&bull; Data modelling and behavioural segmentation<br>
&bull; Personalization and digital relationship marketing strategy<br>
&bull; Guidance in choice of platform and/or analysis and trigger marketing tools<br>
&bull; Definition of performance indicators and prediction of results<br>

<br><span class="font-bold" >Search engine optimization (SEO) and audit</span><br>

 Positioning and keyword analysis<br>
 &bull; Organic traffic analysis<br>
 &bull; Technical analysis<br>
 &bull; Editorial analysis<br>
 &bull; Off-page analysis<br>
 &bull; Competitive analysis<br>
 &bull; SEO recommendations related to content creation</p> -->

        <p class="text-4xl mb-0 text-sky-400"> Human</p>
        <p>

          We prioritize the human aspect in all we do, fostering relationships built on trust, transparency, and respect. Whether it's our customers, employees, or communities, our commitment to being human-centric ensures everyone feels heard, valued, and supported..</p>
        <p class="text-4xl mb-0 text-sky-400" > Responsible </p>
        <p>

          Our commitment to responsibility encompasses accountability, integrity, and sustainability. Guided by ethical choices and transparent communication, we strive to inspire positive change and contribute to a better world
          experiences for everyone involved.</p>
        <p class="text-4xl mb-0 text-sky-400"> Performance-Driven </p>
        <p>

          We are driven by performance. Committed to excellence, we push boundaries to achieve optimal outcomes for our
          clients. Our relentless pursuit of success ensures every action contributes to our objectives, enhancing the
          value we provide.</p>
      </div>

    </div>
  </div>
</template>
<script setup>
defineProps({
  title:String,
  subtitle1: String,
  subtitle2: String,
  subtitle3: String,
  description1: String,
  description2: String,
  description3: String
})


onMounted(() => {

  cardShowAnimation({ element: '.show-detail' })
})
</script>
<style scoped>
.cd-detail {
  /* 0, 132, 199, */
  background: rgba(41, 41, 41, 0);
  box-shadow: 0 0px 100px 0 rgba(0, 132, 199, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>