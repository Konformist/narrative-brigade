<template>
  <NbModal
    caption="Micro scene"
    @close="$emit('close')"
  >
    <div style="width: 600px; padding: 16px;">
      <div>
        Discription
      </div>
      <div
        class="modal-scene-action"
      >
        Action
      </div>
    </div>
  </NbModal>
</template>

<script>
import NbModal from '@/components/NbModal.vue';

export default {
  name: 'ModalScene',
  components: { NbModal },
};
</script>

<style lang="scss" scoped>
.modal-scene {
  &-action {
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    text-decoration: underline;

    &:hover { color: aqua; }
    &:active { color: #006464; }
  }
}
</style>
