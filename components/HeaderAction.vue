<template>
  <div>
    <div class="header-wrap-action px-[15px]">
      <div class="header-action">
        <div
          class="header-action-item header-action_search xxl:hidden flex gap-[10px]"
        >
          <div class="hidden max-lg:block">
            <UIcon name="i-mdi-light:magnify" />
          </div>

          <div
            class="header-search sitenav-content sitenav-search md:hidden lg:block"
          >
            <div class="search-box wpo-wrapper-search">
              <form
                action="/search"
                class="searchform searchform-categoris ultimate-search"
              >
                <div class="wpo-search-inner">
                  <input type="hidden" name="type" value="product" />
                  <input
                    required=""
                    id="inputSearchAuto"
                    class="input-search"
                    name="q"
                    maxlength="40"
                    autocomplete="off"
                    type="text"
                    size="20"
                    data-vn="Bạn cần tìm gì..."
                    placeholder="Bạn cần tìm gì..."
                  />
                </div>
                <button
                  type="submit"
                  class="btn-search btn"
                  id="search-header-btn"
                  aria-label="button search"
                >
                  <svg
                    version="1.1"
                    class="svg search"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 27"
                    style="enable-background: new 0 0 24 27"
                    xml:space="preserve"
                  >
                    <path
                      d="M10,2C4.5,2,0,6.5,0,12s4.5,10,10,10s10-4.5,10-10S15.5,2,10,2z M10,19c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7S13.9,19,10,19z"
                    ></path>
                    <rect
                      x="17"
                      y="17"
                      transform="matrix(0.7071 -0.7071 0.7071 0.7071 -9.2844 19.5856)"
                      width="4"
                      height="8"
                    ></rect>
                  </svg>
                </button>
              </form>
              <div
                id="ajaxSearchResults"
                class="smart-search-wrapper ajaxSearchResults"
                style="display: none"
              >
                <div class="resultsContent"></div>
              </div>
            </div>
          </div>

          <UIcon name="i-mdi-light:account" />

          <UIcon name="i-mdi-light:heart" />

          <UIcon name="i-hugeicons:shopping-bag-02" />
        </div>
      </div>
    </div>
  </div>
</template>
