"use strict";
const compTwo = {
  template: `
    <section class="mainWrap">
      <img src="https://amp.thisisinsider.com/images/5adf9aefbd967144788b4605-750-563.jpg">
      <p class="name"><span> {{ $ctrl.userProfile.name }} </span></p>
      <p class="contact"><span> {{ $ctrl.userProfile.contact }} </span></p>
      <p><span> {{ $ctrl.userProfile.bio }} </span></p>
      <button ng-click="$ctrl.editProfile()">Edit</button>
    </section>
  `,
  controller: ["ProfileService", function(ProfileService){
    const vm = this;
    vm.userProfile = ProfileService.getUserProfile();
    vm.editProfile = function() {
      ProfileService.editProfile();
    }
  }]
};

angular.module("ProfileApp").component("compTwo", compTwo);