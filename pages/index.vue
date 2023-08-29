<template>
  <section
    class="dark:bg-zinc-950 dark:text-white h-screen flex items-center justify-center container text-center flex-col"
  >
    <div class="text-[3rem] font-bold">PlayText</div>
    <div class="text-sm font-semibold leading-snug text-neutral-600">Онлайн генератор текста и изображений.</div>
    <div class="text-sm font-semibold leading-snug text-neutral-600">Мгновенно, качественно, уникально!</div>

    <div class="flex items-center justify-center container text-center py-10">
      <FormKit
        type="multi-step"
        tab-style="progress"
        :hide-progress-labels="true"
        steps-class="border-0"
      >
        <FormKit type="step" name="stepOne" next-label="Продолжить">
          <FormKit
            type="text"
            label="Для чего вы хотите сгенерировать текст?"
            validation="required"
          />
        </FormKit>
        <FormKit
          type="step"
          name="stepTwo"
          next-label="Продолжить"
          previous-label="Назад"
        >
          <FormKit
            type="textarea"
            label="Какой размер текста вам необходим?"
            validation="required"
          />
        </FormKit>
        <FormKit
          type="step"
          name="stepThree"
          next-label="Продолжить"
          previous-label="Назад"
        >
          <FormKit
            type="textarea"
            label="Спасибо! А теперь напишите, какой текст мне для вас создать?"
            validation="required"
          />
          <template #stepNext>
            <FormKit type="submit" label="Отправить" />
          </template>
        </FormKit>
      </FormKit>
    </div>
  </section>
</template>

<style></style>
