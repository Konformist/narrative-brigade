<template>
  <div
    class="modal nb-flex nb-flex-center"
    @click.self="$emit('close')"
  >
    <div class="modal-container">
      <div class="nb-flex nb-flex-center">
        <div style="flex-grow: 1; margin-right: 8px;">
          {{ caption }}
        </div>
        <button
          class="modal-button"
          @click="$emit('close')"
        >
          x
        </button>
      </div>
      <div class="modal-block">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NbModal',
  
  props: {
    caption: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
  
  &-button {
    display: block;
    width: 22px;
    margin-left: auto;
  }
  
  &-block {
    margin-top: 16px;
    border: 1px solid #18e800;
    background: #000;
  }
}
</style>
