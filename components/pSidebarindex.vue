<template>
  <div>
    <div class="iq-sidebar" v-if="ownerID.length > 0">
      <div class="iq-sidebar-logo d-flex justify-content-between">
        <NuxtLink to="/">
          <img src="~/assets/images/newz.svg" class="img-fluid" alt="" />
          <span>Devz</span>
        </NuxtLink>
        <div class="iq-menu-bt-sidebar">
          <div class="iq-menu-bt align-self-center">
            <div class="wrapper-menu">
              <div class="main-circle">
                <i class="ri-arrow-left-s-line"></i>
              </div>
              <div class="hover-circle">
                <i class="ri-arrow-right-s-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sidebar-scrollbar">
        <nav class="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" class="iq-menu">
            <!-- <li class="iq-menu-title">
              <i class="ri-subtract-line"></i><span>Dashboard</span>
            </li> -->
            <li>
              <NuxtLink
                to="/#index"
                class="iq-bg-primary-hover rounded nav-link router-link-exact-active router-link-active pr-2"
                ><i class="ri-home-4-line pr-2"></i>Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/"
                ><i class="ri-login-box-line"></i>Logout</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/pageWishList"
                ><i class="ri-heart-line"></i>Wishlist</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/pagedashboard"
                class="iq-bg-primary-hover rounded nav-link router-link-exact-active router-link-active pr-2"
                ><i class="ri-home-3-line pr-2"></i>Dashboard</NuxtLink
              >
            </li>
            <li>
              <a
                href="#forms"
                class="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
                ><i class="ri-profile-line"></i><span>Profile Management</span
                ><i class="ri-arrow-right-s-line iq-arrow-right"></i
              ></a>
              <ul
                id="forms"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <NuxtLink to="/userprofile"
                    ><i class="ri-profile-line"></i>User Profile</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/userprofileEdit"
                    ><i class="ri-file-edit-line"></i>User Edit</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/pageadduser"
                    ><i class="ri-user-add-line"></i>User Add</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/pageuserlist"
                    ><i class="ri-file-list-line"></i>User List</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/wallet"
                    ><i class="ri-file-list-line"></i>Wallet</NuxtLink
                  >
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#mailbox"
                class="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
                ><i class="ri-mail-line"></i><span>Product Management</span
                ><i class="ri-arrow-right-s-line iq-arrow-right"></i
              ></a>
              <ul
                id="mailbox"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <NuxtLink to="/pageaddproduct"
                    ><i class="ri-plus-line">Add Product</i></NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/pageproductDetail"
                    ><i class="ri-plus-line">Product Detail</i></NuxtLink
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="p-3"></div>
      </div>
    </div>
    <div class="iq-sidebar" v-else>
      <div class="iq-sidebar-logo d-flex justify-content-between">
        <NuxtLink to="/">
          <img src="~/assets/images/newz.svg" class="img-fluid" alt="" />
          <span>Devz</span>
        </NuxtLink>
        <div class="iq-menu-bt-sidebar">
          <div class="iq-menu-bt align-self-center">
            <div class="wrapper-menu">
              <div class="main-circle">
                <i class="ri-arrow-left-s-line"></i>
              </div>
              <div class="hover-circle">
                <i class="ri-arrow-right-s-line"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sidebar-scrollbar">
        <nav class="iq-sidebar-menu">
          <ul id="iq-sidebar-toggle" class="iq-menu">
            <!-- <li class="iq-menu-title">
              <i class="ri-subtract-line"></i><span>Dashboard</span>
            </li> -->
            <li>
              <NuxtLink
                to="/#index"
                class="iq-bg-primary-hover rounded nav-link router-link-exact-active router-link-active pr-2"
                ><i class="ri-home-4-line pr-2"></i>Home</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/pageLogin"
                ><i class="ri-login-box-line"></i>Login</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/pageSignup"
                ><i class="ri-login-circle-line"></i>Sign Up</NuxtLink
              >
            </li>

            <li>
              <NuxtLink to="/pageWishList"
                ><i class="ri-heart-line"></i>Wishlist</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/pagedashboard"
                class="iq-bg-primary-hover rounded nav-link router-link-exact-active router-link-active pr-2"
                ><i class="ri-home-3-line pr-2"></i>Dashboard</NuxtLink
              >
            </li>
            <li>
              <a
                href="#forms"
                class="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
                ><i class="ri-profile-line"></i><span>Profile Management</span
                ><i class="ri-arrow-right-s-line iq-arrow-right"></i
              ></a>
              <ul
                id="forms"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <NuxtLink to="/userprofile"
                    ><i class="ri-profile-line"></i>User Profile</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/userprofileEdit"
                    ><i class="ri-file-edit-line"></i>User Edit</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/pageadduser"
                    ><i class="ri-user-add-line"></i>User Add</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/pageuserlist"
                    ><i class="ri-file-list-line"></i>User List</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/wallet"
                    ><i class="ri-file-list-line"></i>Wallet</NuxtLink
                  >
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#mailbox"
                class="iq-waves-effect collapsed"
                data-toggle="collapse"
                aria-expanded="false"
                ><i class="ri-mail-line"></i><span>Product Management</span
                ><i class="ri-arrow-right-s-line iq-arrow-right"></i
              ></a>
              <ul
                id="mailbox"
                class="iq-submenu collapse"
                data-parent="#iq-sidebar-toggle"
              >
                <li>
                  <NuxtLink to="/pageaddproduct"
                    ><i class="ri-plus-line">Add Product</i></NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/pageproductDetail"
                    ><i class="ri-plus-line">Product Detail</i></NuxtLink
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="p-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ownerID: [],
    };
  },
  mounted() {
    const owner = JSON.parse(localStorage.getItem("ownerId"));
    axios
      .get(
        `https://vastcollar.backendless.app/api/data0/Users?where=ownerId%3D'${owner}'`
      )
      .then((response) => {
        this.ownerID = response.data;
        console.log(ownerID);
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style></style>
