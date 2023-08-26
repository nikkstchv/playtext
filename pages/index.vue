<template>
  <section class="dark:bg-zinc-950 dark:text-white h-screen">
    <div class="flex items-center justify-center container text-center py-10">
      <FormKit type="multi-step" outer-class="border-0">
        <FormKit type="step" name="stepOne" next-label="Продолжить">
          <FormKit
            type="text"
            label="Вопрос (1 из 3): О чем текст?"
            validation="required"
          />
        </FormKit>
        <FormKit type="step" name="stepTwo">
          <FormKit type="textarea" label="Your story" validation="required" />
        </FormKit>
        <FormKit type="step" name="stepThree">
          <FormKit
            type="textarea"
            label="Something else"
            validation="required"
          />
        </FormKit>
      </FormKit>
    </div>
  </section>
</template>
