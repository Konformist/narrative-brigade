<template>
  <NbModal
    caption="Inventory"
    @close="$emit('close')"
  >
    <div
      class="container"
      style="padding: 16px;"
    >
      <div class="card">
        <div class="card-image" />
        <div class="card-info">
          Description
        </div>
      </div>
      <div class="card">
        <div class="card-image" />
        <div class="card-info">
          Description
        </div>
      </div>
      <div class="card">
        <div class="card-image" />
        <div class="card-info">
          Description
        </div>
      </div>
      <div class="card">
        <div class="card-image" />
        <div class="card-info">
          Description
        </div>
      </div>
      <div class="card">
        <div class="card-image" />
        <div class="card-info">
          Description
        </div>
      </div>
    </div>
  </NbModal>
</template>

<script>
import NbModal from '@/components/NbModal.vue';

export default {
  name: 'ModalInventory',
  components: { NbModal },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  width: 450px;

  .card {
    border: 1px solid #18e800;
    
    &-image {
      height: 120px;
      background-size: 24px 24px;
      background-image:
        linear-gradient(45deg, rgba(0, 0, 0, 0) 49.9%, #18e800 49.9%, #18e800 60%, rgba(0, 0, 0, 0) 60% ),
        linear-gradient(45deg, #18e800 10%, rgba(0, 0, 0, 0) 10% );
    }
    
    &-info {
      border-top: 1px solid #18e800;
      padding: 4px;
    }
  }
}
</style>
