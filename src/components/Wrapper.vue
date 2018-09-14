<template>
    <div class='main-container-wrapper'>
        <div class='main-container-wrapper-slide'>
            <slot name='slide'></slot>
        </div>
        <div class='main-container-wrapper-content'>
            <div class='main-container-wrapper-content-box'>
                <slot name='content'></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.main-container-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  .main-container-wrapper-slide {
    height: 100%;
    width: 306px;
    background: #fff;
    padding: 30px 24px;
    .wrapper-slide {
      .slide-title {
        width: 100%;
        font-size: 20px;
        line-height: 30px;
        color: #354052;
        margin-bottom: 30px;
      }
      .slide-sub-title {
        color: #354052;
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 16px;
      }
    }
  }
  .main-container-wrapper-content {
    flex-grow: 1;
    height: 100%;
    background: #f5f6fa;
    padding: 12px;
    .main-container-wrapper-content-box {
      border: 1px solid #ecedf2;
      border-radius: 4px;
      background: #fff;
      height: 100%;
      padding: 0 30px 15px;
      .wrapper-content {
        .content-title {
          border-bottom: 1px solid #ecedf2;
          margin-bottom: 20px;
          height: 60px;
          line-height: 60px;
          font-size: 20px;
          color: #354052;
        }
      }
    }
  }
}
</style>
