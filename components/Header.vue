<template>
  <div>
    <TopBar />
  </div>
  <div class="mainHeader--height min-h-[66px]">
    <header class="mainHeader mainHeader_temp02" id="site-header">
      <div class="mainHeader-middle h-full">
        <div class="container-fluid h-full w-full">
          <div class="flex-container-header h-full px-[3px]">
            <NavigationSection :isMobileSection="true" />

            <!-- Logo -->
            <div class="header-wrap-logo">
              <div
                class="wrap-logo"
                itemscope=""
                itemtype="http://schema.org/Organization"
              >
                <a
                  href="https://bitis.com.vn"
                  itemprop="url"
                  arial-label="Biti's"
                >
                  <NuxtImg
                    src="/img/bitis-logo.svg"
                    preload
                    width="95"
                    height="60"
                    alt="Biti's logo"
                  />
                </a>
              </div>
            </div>
            <NavigationSection :isMobileSection="false" />

            <!-- Actions -->
            <HeaderAction />
          </div>
        </div>
      </div>
      <!-- <div class="header-search-mobile">
        <div class="search-box wpo-wrapper-search">
          <form
            action="/search"
            class="searchform-mobile searchform-categoris ultimate-search"
          >
            <div class="wpo-search-inner">
              <input type="hidden" name="type" value="product" />
              <input
                required=""
                id="inputSearchAuto-mb"
                class="input-search"
                name="q"
                maxlength="40"
                autocomplete="off"
                type="text"
                size="20"
                placeholder="Bạn cần tìm gì..."
              />
            </div>
            <button
              type="submit"
              class="btn-search btn"
              id="search-header-btn-mb"
              aria-label="button search"
            >
              <span class="search-icon"
                ><svg
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
                  ></rect></svg
              ></span>
              <span class="search-close"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  ></path></svg
              ></span>
            </button>
          </form>
          <div
            id="ajaxSearchResults-mb"
            class="smart-search-wrapper ajaxSearchResults"
            style="display: none"
          >
            <div class="resultsContent"></div>
          </div>
        </div>
      </div> -->
    </header>
  </div>

  <div class="new_hunter">
    <div class="container-fluid h-full">
      <a href="/pages/hunter" class="justify-start gap-[16vw]">
        <NuxtImg
          src="/img/new-hunter.svg"
          preload
          width="127"
          height="41"
          alt="New Hunter Logo"
        />
        <span>Biti's Hunter thế hệ mới</span>
      </a>
    </div>
  </div>
  <div>
    <Slider />
  </div>
</template>
<style lang="scss">
@use "~/assets/css/header.scss";
@use "~/assets/css/navigation.css";
@use "~/assets/css/responsive.css";
</style>
